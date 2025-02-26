// store/cartStore.ts
import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image_url?: string;
  category?: string;
  brand?: string;
  size?: string;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addToCart: (product: CartItem) =>
          set(state => {
            const existingProduct = state.cart.find(item => item.id === product.id);
            if (existingProduct) {
              return state;
            }
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
          }),
        removeFromCart: (productId: number) =>
          set(state => ({
            cart: state.cart.filter(item => item.id !== productId),
          })),
        updateQuantity: (productId: number, newQuantity: number) =>
          set(state => {
            if (typeof newQuantity !== 'number' || isNaN(newQuantity)) {
              console.warn('Некоректна кількість: має бути числом');
              return state;
            }
            const clampedQuantity = Math.min(Math.max(1, Math.floor(newQuantity)), 99);
            return {
              cart: state.cart.map(item =>
                item.id === productId ? { ...item, quantity: clampedQuantity } : item
              ),
            };
          }),
        incrementQuantity: (productId: number) =>
          set(state => ({
            cart: state.cart.map(item =>
              item.id === productId ? { ...item, quantity: Math.min(item.quantity + 1, 99) } : item
            ),
          })),
        decrementQuantity: (productId: number) =>
          set(state => ({
            cart: state.cart.map(item =>
              item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
            ),
          })),
        clearCart: () => set({ cart: [] }),
        getTotal: () => get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      }),
      {
        name: 'cart-storage', // Ім’я для localStorage
        storage: createJSONStorage(() => localStorage), // Використовуємо createJSONStorage з localStorage
      }
    ),
    { name: 'Cart Store' }
  )
);
