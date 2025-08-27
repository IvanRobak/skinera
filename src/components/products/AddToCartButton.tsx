'use client';

import { motion } from 'framer-motion';
import { useCartStore } from '../store/cartStore';
import { toast } from 'react-toastify';
import { Product } from '@/lib/products';
import { useRouter } from 'next/navigation';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addToCart = useCartStore(state => state.addToCart);
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: {
        en: product.name.en,
        ua: product.name.ua,
      },
      price: product.price,
      image_url: product.image_url,
      quantity: 1,
      capacity: product.volume || 0,
    });
    toast.success('Товар додано до кошика!', {
      position: 'top-right',
      autoClose: 1000,
    });
  };

  const handleBuyNow = () => {
    // Спочатку додаємо товар до кошика
    addToCart({
      id: product.id,
      name: {
        en: product.name.en,
        ua: product.name.ua,
      },
      price: product.price,
      image_url: product.image_url,
      quantity: 1,
      capacity: product.volume || 0,
    });

    // Показуємо повідомлення та перенаправляємо на оформлення замовлення
    toast.success('Товар додано до кошика! Переходимо до оформлення замовлення...', {
      position: 'top-right',
      autoClose: 1500,
    });

    // Перенаправляємо на сторінку оформлення замовлення
    router.push('/checkout');
  };

  return (
    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 w-full">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBuyNow}
        className="flex-1 bg-brand-500 text-white py-4 px-8 rounded-full hover:bg-brand-600 transition duration-300 shadow-md hover:shadow-lg font-bold transform hover:scale-105"
      >
        Купити зараз
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleAddToCart}
        className="flex-1 bg-gray-200 text-gray-800 py-4 px-8 rounded-full hover:bg-gray-300 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
      >
        Додати до кошика
      </motion.button>
    </div>
  );
}
