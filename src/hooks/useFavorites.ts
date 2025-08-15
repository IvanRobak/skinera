'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSession, getSession } from 'next-auth/react';
import { useFavoritesStore } from '@/components/store/favoritesStore';
// import { toast } from 'react-toastify';

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

// Глобальний стан більше не потрібен, оскільки використовуємо єдине джерело істини (Zustand store)

export function useFavorites() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [, setHasSynced] = useState(false);

  const {
    favorites,
    setFavorites,
    addToFavorites: addToLocalFavorites,
    removeFromFavorites: removeFromLocalFavorites,
    isFavorite: isLocalFavorite,
    clearOnLogout,
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
        setFavorites(products);
      }
    } catch (error) {
      console.error('Error fetching favorites:', error);
    } finally {
      setIsLoading(false);
    }
  }, [session?.user?.email, setFavorites]);

  // Додати товар на сервер
  const addToServerFavorites = useCallback(
    async (product: FavoriteProduct) => {
      try {
        const response = await fetch('/api/favorites', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ product }),
        });

        if (response.ok) {
          addToLocalFavorites(product);
        }
      } catch (error) {
        console.error('Error adding to server favorites:', error);
      }
    },
    [addToLocalFavorites]
  );

  // Синхронізація: при наявності сесії просто завантажуємо серверні улюблені у store

  // Видалити товар з сервера
  const removeFromServerFavorites = useCallback(
    async (productId: number) => {
      try {
        const response = await fetch(`/api/favorites?productId=${productId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          removeFromLocalFavorites(productId);
        }
      } catch (error) {
        console.error('Error removing from server favorites:', error);
      }
    },
    [removeFromLocalFavorites]
  );

  // Додати товар до улюблених
  const addToFavorites = async (product: FavoriteProduct) => {
    // Отримуємо свіжу сесію
    const currentSession = await getSession();

    if (!currentSession?.user?.email) {
      throw new Error('Потрібна авторизація для додавання в улюблені');
    }

    // Для авторизованих користувачів - додаємо на сервер і локально (store)
    await addToServerFavorites(product);
  };

  // Видалити товар з улюблених
  const removeFromFavorites = async (productId: number) => {
    // Отримуємо свіжу сесію
    const currentSession = await getSession();

    if (currentSession?.user?.email) {
      // Для авторизованих користувачів - видаляємо з сервера і локально (store)
      await removeFromServerFavorites(productId);
    } else {
      // Для неавторизованих користувачів - не дозволяємо видаляти
      throw new Error('Потрібна авторизація для роботи з улюбленими');
    }
  };

  // Перевірити, чи товар в улюблених
  const isFavorite = (productId: number): boolean => {
    if (session?.user?.email) {
      return isLocalFavorite(productId);
    }
    // Для неавторизованих користувачів - завжди false
    return false;
  };

  // Отримати всі улюблені товари
  const getAllFavorites = (): FavoriteProduct[] => {
    if (session?.user?.email) {
      return favorites as FavoriteProduct[];
    }
    // Для неавторизованих користувачів - порожній масив
    return [];
  };

  // Отримати кількість улюблених товарів
  const getFavoritesCount = (): number => {
    return getAllFavorites().length;
  };

  // Ефект для завантаження серверних улюблених при наявності сесії
  useEffect(() => {
    if (session?.user?.email && hasHydrated) {
      fetchServerFavorites();
    }
  }, [session?.user?.email, hasHydrated, fetchServerFavorites]);

  // Скидаємо глобальний стан при виході з системи
  useEffect(() => {
    if (!session?.user?.email) {
      setHasSynced(false);
      clearOnLogout();
    }
  }, [session?.user?.email, clearOnLogout]);

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
