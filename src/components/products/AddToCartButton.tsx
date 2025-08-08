'use client';

import { motion } from 'framer-motion';
import { useCartStore } from '../store/cartStore';
import { toast } from 'react-toastify';
import { Product } from '@/lib/products';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addToCart = useCartStore(state => state.addToCart);

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
    handleAddToCart();
    // In a real app, you might redirect to checkout
    toast.info('Перехід до оформлення замовлення...', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  return (
    <div className="flex gap-4 w-full">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBuyNow}
        className="flex-1 bg-brand-500 text-white py-4 px-8 rounded-lg hover:bg-brand-600 transition duration-300 shadow-md font-bold"
      >
        Купити зараз
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleAddToCart}
        className="flex-1 bg-gray-200 text-gray-800 py-4 px-8 rounded-lg hover:bg-gray-300 transition duration-300 shadow-md"
      >
        Додати до кошика
      </motion.button>
    </div>
  );
}
