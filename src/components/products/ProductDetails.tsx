'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  category: string;
  brand: string;
  country: string;
  characteristics: {
    cosmetic_classification: string;
    skin_type: string;
    purpose_and_result: string;
    volume: string;
    cleanser_type: string;
    skin_problem: string;
    age: string;
    hypoallergenic: string;
  };
  description: string;
  instructions: string;
  ingredients: string;
  availability: string;
  delivery: string;
}

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('/products.json');
        const products: Product[] = await res.json();
        const foundProduct = products.find(p => p.id.toString() === id) || null;
        setProduct(foundProduct);
      } catch (error) {
        console.error('Помилка завантаження продукту:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-gray-600 flex items-center gap-2"
        >
          <span className="animate-spin">⏳</span> Завантаження...
        </motion.p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.p
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-xl text-red-500 flex items-center gap-2"
        >
          ❌ Продукт не знайдено
        </motion.p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md"
      >
        {/* Заголовок продукту */}
        <div className="text-center py-6 border-b border-gray-200">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">{product.name}</h1>
          <p className="text-sm text-gray-500">
            {product.brand} | {product.country}
          </p>
        </div>

        {/* Основний контент: зображення ліворуч, кнопка/ціна праворуч */}
        <div className="flex flex-col md:flex-row gap-8 p-6">
          {/* Зображення */}
          <div className="w-full md:w-1/2 flex justify-center p-8 bg-gray-100 rounded-lg shadow-md">
            <div className="relative w-full max-w-xs h-[400px]  p-4">
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                className="object-contain"
                priority={true}
              />
            </div>
          </div>

          {/* Кнопка, ціна та наявність */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
            <p className="text-2xl font-bold text-red-500">{product.price} ₴</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className=" bg-red-500 text-white py-3 px-12 rounded-md hover:bg-red-600 focus:ring-4 focus:ring-red-200 focus:outline-none transition duration-300"
            >
              Купити зараз
            </motion.button>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📦 Доставка: {product.delivery}</p>
              <p>✅ Наявність: {product.availability}</p>
            </div>
          </div>
        </div>

        {/* Текстовий контент: опис, інструкції, склад */}
        <div className="p-6 border-t border-gray-200 space-y-6">
          {/* Опис */}
          {product.description && (
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">Опис</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
          )}

          {/* Характеристики */}
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">Характеристики</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>
                <strong>Класифікація:</strong> {product.characteristics.cosmetic_classification}
              </li>
              <li>
                <strong>Тип шкіри:</strong> {product.characteristics.skin_type}
              </li>
              <li>
                <strong>Призначення:</strong> {product.characteristics.purpose_and_result}
              </li>
              <li>
                <strong>Об’єм:</strong> {product.characteristics.volume} мл
              </li>
              <li>
                <strong>Тип очищувача:</strong> {product.characteristics.cleanser_type}
              </li>
              <li>
                <strong>Проблеми шкіри:</strong> {product.characteristics.skin_problem}
              </li>
              <li>
                <strong>Вік:</strong> {product.characteristics.age}
              </li>
              <li>
                <strong>Гіпоалергенність:</strong> {product.characteristics.hypoallergenic}
              </li>
            </ul>
          </div>

          {/* Інструкції */}
          {product.instructions && (
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">Як використовувати</h2>
              <p className="text-gray-600">{product.instructions}</p>
            </div>
          )}

          {/* Склад */}
          {product.ingredients && (
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">Склад</h2>
              <p className="text-gray-600">{product.ingredients}</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
