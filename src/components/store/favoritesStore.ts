// store/favoritesStore.ts
import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

export interface FavoriteItem {
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

interface FavoritesStore {
  favorites: FavoriteItem[];
  addToFavorites: (product: FavoriteItem) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
  clearFavorites: () => void;
  getFavoritesCount: () => number;
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
  clearOnLogout: () => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  devtools(
    persist(
      (set, get) => ({
        favorites: [],
        hasHydrated: false,
        setHasHydrated: (state: boolean) => {
          set({
            hasHydrated: state,
          });
        },
        addToFavorites: (product: FavoriteItem) =>
          set(state => {
            const existingProduct = state.favorites.find(item => item.id === product.id);
            if (existingProduct) {
              return state; // Товар вже в улюблених
            }
            return { favorites: [...state.favorites, product] };
          }),
        removeFromFavorites: (productId: number) =>
          set(state => ({
            favorites: state.favorites.filter(item => item.id !== productId),
          })),
        isFavorite: (productId: number) => {
          const state = get();
          return state.favorites.some(item => item.id === productId);
        },
        clearFavorites: () => set({ favorites: [] }),
        getFavoritesCount: () => get().favorites.length,
        clearOnLogout: () => set({ favorites: [] }),
      }),
      {
        name: 'favorites-storage',
        storage: createJSONStorage(() => localStorage),
        onRehydrateStorage: () => state => {
          state?.setHasHydrated(true);
        },
      }
    ),
    { name: 'Favorites Store' }
  )
);
