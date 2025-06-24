'use client';

import { useState } from 'react';
import Navigation from './Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { UserIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Логотип */}
        <Link href="/" className="flex items-center space-x-3 cursor-pointer">
          <div className="bg-purple-600 rounded-full p-1">
            <Image src="/icon/icon.svg" alt="Skinera Logo" width={32} height={32} />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Skinera
          </span>
        </Link>

        {/* Меню для великих екранів */}
        <div className="hidden md:flex items-center space-x-4">
          <Navigation />
          {session ? (
            <Link
              href="/account"
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 hover:text-purple-600 transition-colors"
            >
              <UserIcon className="w-5 h-5" />
              <span>{session.user?.name}</span>
            </Link>
          ) : (
            <div className="flex items-center space-x-3">
              <Link
                href="/auth/signin"
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 hover:text-purple-600 transition-colors"
              >
                <UserIcon className="w-5 h-5" />
                <span>Увійти</span>
              </Link>
              <Link
                href="/auth/register"
                className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg"
              >
                <span>Реєстрація</span>
              </Link>
            </div>
          )}
        </div>

        {/* Бургер-меню для мобільних екранів */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Мобільне меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <Navigation isMobile onNavigate={() => setIsMenuOpen(false)} />
          {session ? (
            <div className="px-4 py-3 border-t border-gray-100">
              <Link
                href="/account"
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserIcon className="w-5 h-5" />
                <span>{session.user?.name}</span>
              </Link>
            </div>
          ) : (
            <div className="px-4 py-3 border-t border-gray-100 space-y-2">
              <Link
                href="/auth/signin"
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 hover:text-purple-600 transition-colors w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserIcon className="w-5 h-5" />
                <span>Увійти</span>
              </Link>
              <Link
                href="/auth/register"
                className="flex items-center justify-center px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Реєстрація</span>
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
