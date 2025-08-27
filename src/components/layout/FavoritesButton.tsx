'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useFavorites } from '@/hooks/useFavorites';
import { useSession } from 'next-auth/react';

interface FavoritesButtonProps {
  isMobile?: boolean;
}

export default function FavoritesButton({ isMobile = false }: FavoritesButtonProps) {
  const { getFavoritesCount, hasHydrated } = useFavorites();
  const { data: session } = useSession();
  const favoritesCount = getFavoritesCount();

  // Показуємо skeleton поки не завантажилось
  if (!hasHydrated) {
    return (
      <Link
        href="/favorites"
        className={`
          relative flex items-center space-x-2 px-4 py-2 rounded-full 
          text-gray-700 hover:text-brand-600 transition-colors
          ${isMobile ? 'w-full' : ''}
        `}
      >
        <div className="relative">
          <Image
            src="/heart-filled.svg"
            alt="Улюблені"
            width={20}
            height={20}
            className="opacity-100"
          />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/favorites"
      className={`
        relative flex items-center space-x-2 px-4 py-2 rounded-full 
        text-gray-700 hover:text-brand-600 transition-colors
        ${isMobile ? 'w-full ' : ''}
      `}
    >
      <div className="relative">
        <Image
          src="/heart-filled.svg"
          alt="Улюблені"
          width={20}
          height={20}
          className="opacity-100"
        />
        {session && favoritesCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-brand-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center "
          >
            {favoritesCount > 99 ? '99+' : favoritesCount}
          </motion.div>
        )}
      </div>
    </Link>
  );
}
