// components/Navigation.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCartStore } from '../store/cartStore'; // Імпортуй Zustand
import Cart from '../Cart';

const Navigation = ({ isMobile }: { isMobile?: boolean }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useCartStore(state => state.cart); // Отримуємо кошик із Zustand

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav
        className={`${
          isMobile ? 'flex flex-col bg-pink-600 w-full text-center' : 'hidden md:flex space-x-6'
        }`}
      >
        <Link
          href="/about"
          className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}
        >
          Про нас
        </Link>
        <Link
          href="/products"
          className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}
        >
          Товари
        </Link>
        <Link
          href="/services"
          className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}
        >
          Послуги
        </Link>
        <Link
          href="/reviews"
          className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}
        >
          Відгуки
        </Link>
        <Link
          href="/contacts"
          className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}
        >
          Контакти
        </Link>
        <button
          className={`hover:text-yellow-300 transition ${
            isMobile ? 'py-2' : ''
          } flex items-center gap-2`}
          onClick={toggleCart}
        >
          <span>🛒</span>
          <span className="text-sm">{cart.length}</span>
        </button>
      </nav>
      {/* Модальне вікно кошика */}
      {isCartOpen && (
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

export default Navigation;
