'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useCartStore } from '../store/cartStore'; // Імпортуй зі свого шляху
import { toast } from 'react-toastify';

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
  const { addToCart } = useCartStore();

  // Оновлення продуктів, якщо змінилися фільтри (хоча сортування вже на сервері)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = new URL('/api/products', window.location.origin);
        if (searchQuery) url.searchParams.append('search', searchQuery);
        if (selectedBrand) url.searchParams.append('brand', selectedBrand);
        if (selectedCategory) url.searchParams.append('category', selectedCategory);
        if (selectedCountry) url.searchParams.append('country', selectedCountry);
        if (sortOption && sortOption !== 'default') url.searchParams.append('sort', sortOption);
        url.searchParams.append('page', page.toString());
        url.searchParams.append('limit', limit.toString());

        const res = await fetch(url.toString());
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Помилка оновлення продуктів:', error);
      }
    };

    fetchProducts();
  }, [sortOption, searchQuery, selectedBrand, selectedCategory, selectedCountry, page, limit]);

  // Обробник для додавання товару до кошика
  const handleAddToCart = (product: Product) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      quantity: 1,
    };
    addToCart(cartItem);
    toast.success('Товар додано до кошика!', {
      position: 'top-right',
      autoClose: 1000,
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-6 p-4 sm:p-6">
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className="relative group">
            <ProductCard product={product} />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] opacity-0 group-hover:opacity-100 group-hover:bottom-[-20px] transition-all duration-300 z-10">
              <button
                className="bg-pink-500 text-white py-1 px-12 rounded-lg shadow-md hover:bg-pink-600 transition text-xs sm:text-sm"
                onClick={e => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                Купити
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full text-gray-600 text-lg">❌ Нічого не знайдено</p>
      )}
    </div>
  );
};

export default ProductList;
