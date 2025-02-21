'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

interface Product {
  id: number;
  image_url: string;
  name: string;
  price: number;
  description: string;
}

export default function ProductDetails() {
  const { id } = useParams(); // Отримуємо ID з URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('/products.json'); // Завантажуємо JSON
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

  if (loading) return <p className="text-center">⏳ Завантаження...</p>;
  if (!product) return <p className="text-center">❌ Продукт не знайдено</p>;

  return (
    <div className="max-w-4xl mx-auto py-18">
      <h1 className="text-3xl font-bold text-center mb-6">{product.name}</h1>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src={product.image_url}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
            priority={true}
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-lg text-gray-700">{product.description}</p>
          <p className="text-xl font-bold">{product.price} ₴</p>
          <button className="bg-pink-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 transition">
            Купити
          </button>
        </div>
      </div>
    </div>
  );
}
