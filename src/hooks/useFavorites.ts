'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { useFavoritesStore } from '@/components/store/favoritesStore';
import { toast } from 'react-toastify';

export interface FavoriteProduct {
  id: number;
  name: {
    en: string;
    ua: string;
  };
  price: number;
  image_url: string;
  category: string;
  brand: string;
  volume?: number;
  country: string;
}

// Глобальний стан для уникнення повторних синхронізацій
const globalSyncState = {
  hasSynced: false,
  isCurrentlySyncing: false,
};

export function useFavorites() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [serverFavorites, setServerFavorites] = useState<FavoriteProduct[]>([]);
  const [, setHasSynced] = useState(globalSyncState.hasSynced);

  const {
    favorites: localFavorites,
    addToFavorites: addToLocalFavorites,
    removeFromFavorites: removeFromLocalFavorites,
    isFavorite: isLocalFavorite,

    hasHydrated,
  } = useFavoritesStore();

  // Завантажити улюблені товари з сервера
  const fetchServerFavorites = useCallback(async () => {
    if (!session?.user?.email) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/favorites');
      if (response.ok) {
        const data = await response.json();
        const products = data.favorites.map((fav: { product: FavoriteProduct }) => fav.product);
        setServerFavorites(products);
      }
    } catch (error) {
      console.error('Error fetching favorites:', error);
    } finally {
      setIsLoading(false);
    }
  }, [session?.user?.email]);

  // Додати товар на сервер
  const addToServerFavorites = useCallback(async (product: FavoriteProduct) => {
    try {
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product }),
      });

      if (response.ok) {
        setServerFavorites(prev => [...prev.filter(p => p.id !== product.id), product]);
      }
    } catch (error) {
      console.error('Error adding to server favorites:', error);
    }
  }, []);

  // Синхронізувати локальні улюблені з сервером при вході
  const syncFavoritesWithServer = useCallback(async () => {
    if (
      !session?.user?.email ||
      !hasHydrated ||
      globalSyncState.hasSynced ||
      globalSyncState.isCurrentlySyncing
    )
      return;

    globalSyncState.isCurrentlySyncing = true;
    setIsLoading(true);

    try {
      // Завантажуємо серверні улюблені
      await fetchServerFavorites();

      // Якщо є локальні улюблені, додаємо їх на сервер
      if (localFavorites.length > 0) {
        for (const product of localFavorites) {
          await addToServerFavorites(product);
        }
        // Показуємо повідомлення тільки якщо було що синхронізувати
        toast.success(`Синхронізовано ${localFavorites.length} улюблених товарів!`, {
          toastId: 'sync-favorites', // Унікальний ID щоб уникнути дублікатів
        });
      }

      globalSyncState.hasSynced = true;
      setHasSynced(true);
    } catch (error) {
      console.error('Error syncing favorites:', error);
    } finally {
      globalSyncState.isCurrentlySyncing = false;
      setIsLoading(false);
    }
  }, [
    session?.user?.email,
    hasHydrated,
    fetchServerFavorites,
    localFavorites,
    addToServerFavorites,
  ]);

  // Видалити товар з сервера
  const removeFromServerFavorites = useCallback(async (productId: number) => {
    try {
      const response = await fetch(`/api/favorites?productId=${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setServerFavorites(prev => prev.filter(p => p.id !== productId));
      }
    } catch (error) {
      console.error('Error removing from server favorites:', error);
    }
  }, []);

  // Додати товар до улюблених
  const addToFavorites = async (product: FavoriteProduct) => {
    if (session?.user?.email) {
      // Для авторизованих користувачів - додаємо на сервер і локально
      await addToServerFavorites(product);
      addToLocalFavorites(product);
    } else {
      // Для неавторизованих - тільки локально
      addToLocalFavorites(product);
    }
  };

  // Видалити товар з улюблених
  const removeFromFavorites = async (productId: number) => {
    if (session?.user?.email) {
      // Для авторизованих користувачів - видаляємо з сервера і локально
      await removeFromServerFavorites(productId);
      removeFromLocalFavorites(productId);
    } else {
      // Для неавторизованих - тільки локально
      removeFromLocalFavorites(productId);
    }
  };

  // Перевірити, чи товар в улюблених
  const isFavorite = (productId: number): boolean => {
    if (session?.user?.email) {
      return serverFavorites.some(p => p.id === productId) || isLocalFavorite(productId);
    }
    return isLocalFavorite(productId);
  };

  // Отримати всі улюблені товари
  const getAllFavorites = (): FavoriteProduct[] => {
    if (session?.user?.email) {
      // Об'єднуємо серверні та локальні, видаляючи дублікати
      const combined = [...serverFavorites];
      localFavorites.forEach(local => {
        if (!combined.some(server => server.id === local.id)) {
          combined.push(local);
        }
      });
      return combined;
    }
    return localFavorites;
  };

  // Отримати кількість улюблених товарів
  const getFavoritesCount = (): number => {
    return getAllFavorites().length;
  };

  // Ефект для синхронізації при вході (тільки якщо є локальні улюблені)
  useEffect(() => {
    if (
      session?.user?.email &&
      hasHydrated &&
      !globalSyncState.hasSynced &&
      !globalSyncState.isCurrentlySyncing &&
      localFavorites.length > 0
    ) {
      syncFavoritesWithServer();
    }
  }, [session?.user?.email, hasHydrated, localFavorites.length, syncFavoritesWithServer]);

  // Ефект для завантаження серверних улюблених
  useEffect(() => {
    if (session?.user?.email && globalSyncState.hasSynced) {
      fetchServerFavorites();
    }
  }, [session?.user?.email, fetchServerFavorites]);

  // Скидаємо глобальний стан при виході з системи
  useEffect(() => {
    if (!session?.user?.email) {
      globalSyncState.hasSynced = false;
      globalSyncState.isCurrentlySyncing = false;
      setHasSynced(false);
      setServerFavorites([]);
    }
  }, [session?.user?.email]);

  return {
    favorites: getAllFavorites(),
    isLoading,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    getFavoritesCount,
    hasHydrated,
  };
}
