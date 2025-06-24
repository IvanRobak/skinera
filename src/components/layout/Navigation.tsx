// components/Navigation.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCartStore } from '../store/cartStore'; // Імпортуй Zustand
import Cart from '../Cart';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const Navigation = ({ isMobile, onNavigate }: { isMobile?: boolean; onNavigate?: () => void }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useCartStore(state => state.cart); // Отримуємо кошик із Zustand
  const hasHydrated = useCartStore(state => state.hasHydrated);
  const pathname = usePathname();

  // Ensure hydration is complete before showing cart count
  const totalItems = hasHydrated ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { path: '/about', label: 'Про нас' },
    { path: '/products', label: 'Товари' },
    { path: '/services', label: 'Послуги' },
    { path: '/reviews', label: 'Відгуки' },
    { path: '/contacts', label: 'Контакти' },
  ];

  return (
    <>
      <nav
        className={`${
          isMobile ? 'flex flex-col space-y-1 py-3' : 'hidden md:flex items-center space-x-1'
        }`}
      >
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            href={path}
            className={`px-4 py-2 rounded-full transition-colors ${
              isActive(path)
                ? 'text-purple-600 bg-purple-50 font-medium'
                : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
            } ${isMobile ? 'text-center' : ''}`}
            onClick={() => isMobile && onNavigate?.()}
          >
            {label}
          </Link>
        ))}

        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors ${
            isMobile ? 'justify-center' : ''
          }`}
          onClick={toggleCart}
        >
          <div className="relative">
            <ShoppingBagIcon className="w-5 h-5" />
            {hasHydrated && totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
          <span className="sr-only">Кошик</span>
        </button>
      </nav>
      {/* Модальне вікно кошика */}
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

export default Navigation;
