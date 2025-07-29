'use client';

import { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import Cart from '../Cart';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const CartButton = ({ isMobile }: { isMobile?: boolean }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useCartStore(state => state.cart);
  const hasHydrated = useCartStore(state => state.hasHydrated);

  // Ensure hydration is complete before showing cart count
  const totalItems = hasHydrated ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-gray-700 hover:text-brand-600 hover:bg-gray-50 transition-colors ${
          isMobile ? 'justify-center' : ''
        }`}
        onClick={toggleCart}
      >
        <div className="relative">
          <ShoppingBagIcon className="w-5 h-5" />
          {hasHydrated && totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
        <span className="sr-only">Кошик</span>
      </button>

      {/* Cart Modal */}
      {isCartOpen && hasHydrated && (
        <Cart
          cart={cart}
          onUpdateQuantity={(productId, newQuantity) =>
            useCartStore.getState().updateQuantity(productId, newQuantity)
          }
          onRemoveFromCart={productId => useCartStore.getState().removeFromCart(productId)}
          onClose={toggleCart}
        />
      )}
    </>
  );
};

export default CartButton;
