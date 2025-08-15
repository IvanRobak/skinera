'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/products/ProductCard';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useFavorites } from '@/hooks/useFavorites';
import { useSession } from 'next-auth/react';

export default function FavoritesPage() {
  const { favorites, hasHydrated, clearAllFavorites } = useFavorites();
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !hasHydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Мої улюблені товари
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Збережені товари для зручного перегляду
          </motion.p>
        </div>

        {!session ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <Image
                src="/heart-filled.svg"
                alt="heart"
                width={48}
                height={48}
                className="opacity-50"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Для перегляду улюблених товарів потрібна авторизація
            </h3>
            <p className="text-gray-600 mb-6">
              Увійдіть в акаунт, щоб зберігати та переглядати улюблені товари
            </p>
            <Link
              href="/auth/signin"
              className="inline-flex items-center px-6 py-3 bg-brand-500 text-white font-medium rounded-full hover:bg-brand-600 transition-colors duration-200 mr-4"
            >
              Увійти в акаунт
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300 transition-colors duration-200"
            >
              Перейти до товарів
            </Link>
          </motion.div>
        ) : favorites.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <Image
                src="/heart-filled.svg"
                alt="heart"
                width={48}
                height={48}
                className="opacity-50"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              У вас поки немає улюблених товарів
            </h3>
            <p className="text-gray-600 mb-6">
              Додавайте товари до улюблених, натискаючи на іконку серця
            </p>
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-brand-500 text-white font-medium rounded-full hover:bg-brand-600 transition-colors duration-200"
            >
              Перейти до товарів
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Інформація про кількість */}
            <div className="flex justify-between items-center mb-8">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-600"
              >
                Знайдено {favorites.length} товар{getPluralForm(favorites.length)}
              </motion.p>
              {session && (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  onClick={clearAllFavorites}
                  className="px-4 py-2 text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
                >
                  Очистити всі
                </motion.button>
              )}
            </div>

            {/* Сітка товарів */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            >
              {favorites.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

function getPluralForm(count: number): string {
  if (count === 1) return '';
  if (count >= 2 && count <= 4) return 'и';
  return 'ів';
}
