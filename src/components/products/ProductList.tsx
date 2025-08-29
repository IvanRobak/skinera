'use client';

import { useMemo } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: {
    en: string;
    ua: string;
  };
  price: number;
  image_url: string;
  category: string;
  brand: string;
  country: string;
  capacity: number;
}

const ProductList = ({
  products = [], // Просто отримуємо продукти як проп, без дублювання запитів
}: {
  products: Product[];
}) => {
  // Мемоізуємо рендер для оптимізації
  const renderedProducts = useMemo(() => {
    return products.map(product => (
      <div key={product.id} className="w-full max-w-xs">
        <ProductCard product={product} />
      </div>
    ));
  }, [products]);

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 justify-items-center">
      {products.length > 0 ? (
        renderedProducts
      ) : (
        <p className="text-center w-full sm:col-span-full text-gray-600 text-lg">
          ❌ Нічого не знайдено
        </p>
      )}
    </div>
  );
};

export default ProductList;
