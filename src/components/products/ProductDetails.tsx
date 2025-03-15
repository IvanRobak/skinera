'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProductCard from '@/components/products/ProductCard';
import { useCartStore } from '../store/cartStore';

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
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description'); // Для вкладок

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        const foundProduct = data.products.find((p: Product) => p.id.toString() === id) || null;
        setProduct(foundProduct);
        setAllProducts(data.products);
      } catch (error) {
        console.error('Помилка завантаження продукту:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProducts();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
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

  const relatedProducts = allProducts
    .filter(p => p.id !== product.id)
    .filter(p => p.brand === product.brand || p.category === product.category)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* Заголовок продукту */}
        <div className="text-center py-8 bg-gradient-to-r from-pink-50 to-white border-b border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-sm text-gray-500 mt-2">
            {product.brand} | {product.country}
          </p>
        </div>

        {/* Основний контент */}
        <div className="flex flex-col md:flex-row gap-8 p-8">
          {/* Зображення з ефектом зуму */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm h-[400px] group">
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
          </div>

          {/* Інформація та кнопка покупки */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6">
            <p className="text-3xl font-bold text-pink-600">{product.price} ₴</p>
            <div className="flex gap-4 w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  useCartStore.getState().addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image_url: product.image_url,
                    quantity: 1,
                  })
                }
                className="flex-1 bg-gray-200 text-gray-800 py-4 px-8 rounded-lg hover:bg-gray-300 transition duration-300 shadow-md"
              >
                Додати до кошика
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-pink-500 text-white py-4 px-8 rounded-lg hover:bg-pink-600 transition duration-300 shadow-md"
              >
                Купити зараз
              </motion.button>
            </div>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-center gap-2">
                <span className="text-pink-500">🚚</span> Доставка: {product.delivery}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-pink-500">✔️</span> Наявність: {product.availability}
              </p>
            </div>
          </div>
        </div>

        {/* Вкладки для текстового контенту */}
        <div className="p-8 border-t border-gray-200">
          <div className="flex border-b border-gray-200 mb-6">
            {['description', 'characteristics', 'instructions', 'ingredients'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-6 text-sm font-medium ${
                  activeTab === tab
                    ? 'border-b-2 border-pink-500 text-pink-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'description' && 'Опис'}
                {tab === 'characteristics' && 'Характеристики'}
                {tab === 'instructions' && 'Як використовувати'}
                {tab === 'ingredients' && 'Склад'}
              </button>
            ))}
          </div>

          {/* Вміст вкладок */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-600"
          >
            {activeTab === 'description' && product.description && (
              <div>
                <p className="leading-relaxed">{product.description}</p>
              </div>
            )}
            {activeTab === 'characteristics' && (
              <ul className="list-disc pl-5 space-y-2">
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
                  <strong>Обʼєм:</strong> {product.characteristics.volume} мл
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
            )}
            {activeTab === 'instructions' && product.instructions && (
              <p className="leading-relaxed">{product.instructions}</p>
            )}
            {activeTab === 'ingredients' && product.ingredients && (
              <p className="leading-relaxed">{product.ingredients}</p>
            )}
          </motion.div>
        </div>

        {/* Схожі продукти (карусель) */}
        {relatedProducts.length > 0 && (
          <div className="p-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Схожі продукти</h2>
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
                {relatedProducts.map(relatedProduct => (
                  <motion.div
                    key={relatedProduct.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="relative  bg-gray-50 rounded-lg h-78">
                      <ProductCard product={relatedProduct} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
