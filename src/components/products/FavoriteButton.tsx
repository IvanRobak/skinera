'use client';

import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import AuthModal from '../auth/AuthModal';
import { useFavorites } from '@/hooks/useFavorites';

interface FavoriteButtonProps {
  product: {
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
  };
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isHovered?: boolean;
}

export default function FavoriteButton({
  product,
  size = 'md',
  className = '',
  isHovered = false,
}: FavoriteButtonProps) {
  const { data: session } = useSession();
  const { addToFavorites, removeFromFavorites, isFavorite, hasHydrated } = useFavorites();
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Don't render until the store has hydrated to prevent hydration mismatch
  if (!hasHydrated) {
    return null;
  }

  const favorite = isFavorite(product.id);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const handleToggleFavorite = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Запобігаємо переходу на сторінку товару

    // Якщо користувач не авторизований, показуємо модальне вікно
    if (!session) {
      setShowAuthModal(true);
      return;
    }

    if (favorite) {
      await removeFromFavorites(product.id);
      toast.success('Товар видалено з улюблених', {
        position: 'top-right',
        autoClose: 1000,
      });
    } else {
      await addToFavorites(product);
      toast.success('Товар додано до улюблених!', {
        position: 'top-right',
        autoClose: 1000,
      });
    }
  };

  const handleAuthSuccess = async () => {
    // Після успішної авторизації додаємо товар до улюблених
    await addToFavorites(product);
    toast.success('Товар додано до улюблених!', {
      position: 'top-right',
      autoClose: 1000,
    });
  };

  // Показуємо кнопку тільки якщо товар у улюблених або при ховері
  const shouldShow = favorite || isHovered;

  if (!shouldShow) {
    return (
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
        defaultTab="signin"
      />
    );
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggleFavorite}
        className={`
          ${sizeClasses[size]}
          ${className}
          absolute top-2 right-2 z-10
          bg-white/90 backdrop-blur-sm
          rounded-full shadow-lg
          flex items-center justify-center
          transition-all duration-300
          hover:bg-white hover:shadow-xl
        `}
        aria-label={favorite ? 'Видалити з улюблених' : 'Додати до улюблених'}
      >
        <motion.div animate={favorite ? { scale: [1, 1.2, 1] } : {}} transition={{ duration: 0.3 }}>
          <Image
            src={favorite ? '/heart-filled.svg' : '/heart.svg'}
            alt="heart"
            width={iconSizes[size]}
            height={iconSizes[size]}
            className="transition-all duration-300"
          />
        </motion.div>
      </motion.button>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
        defaultTab="signin"
      />
    </>
  );
}
