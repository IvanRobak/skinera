// store/cartStore.ts
import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image_url?: string;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  clearCart: () => void; // Додаткова функція для очищення кошика
}

export const useCartStore = create<CartStore>(set => ({
  cart: [],
  addToCart: (product: CartItem) =>
    set(state => {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        return state; // Не додаємо, якщо товар уже є
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (productId: number) =>
    set(state => ({
      cart: state.cart.filter(item => item.id !== productId),
    })),
  updateQuantity: (productId: number, newQuantity: number) =>
    set(state => ({
      cart: state.cart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity < 1 ? 1 : newQuantity } : item
      ),
    })),
  clearCart: () => set({ cart: [] }),
}));
