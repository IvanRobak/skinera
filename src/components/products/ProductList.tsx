'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  category: string;
  brand: string;
  country: string;
}

const ProductList = ({
  products: initialProducts = [], // Отримуємо продукти як проп
  sortOption = '',
  searchQuery = '',
  selectedBrand = '',
  selectedCategory = '',
  selectedCountry = '',
  page = 1,
  limit = 12,
}: {
  products?: Product[];
  sortOption?: string;
  searchQuery?: string;
  selectedBrand?: string;
  selectedCategory?: string;
  selectedCountry?: string;
  page?: number;
  limit?: number;
}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  // Оновлення продуктів, якщо змінилися фільтри (хоча сортування вже на сервері)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = new URLSearchParams();
        if (searchQuery) params.append('search', searchQuery);
        if (selectedBrand) params.append('brand', selectedBrand);
        if (selectedCategory) params.append('category', selectedCategory);
        if (selectedCountry) params.append('country', selectedCountry);
        if (sortOption && sortOption !== 'default') params.append('sort', sortOption);
        params.append('page', page.toString());
        params.append('limit', limit.toString());

        const url = `/api/products?${params.toString()}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Помилка оновлення продуктів:', error);
      }
    };

    fetchProducts();
  }, [sortOption, searchQuery, selectedBrand, selectedCategory, selectedCountry, page, limit]);

  return (
    <div className="w-full flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-6 p-4 sm:p-6 sm:justify-items-center">
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className="w-full max-w-xs">
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        <p className="text-center w-full sm:col-span-full text-gray-600 text-lg">
          ❌ Нічого не знайдено
        </p>
      )}
    </div>
  );
};

export default ProductList;
