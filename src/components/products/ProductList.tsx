'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({
  sortOption = '',
  searchQuery = '',
  selectedBrand = '',
  selectedCategory = '',
  selectedCountry = '',
}: {
  sortOption?: string;
  searchQuery?: string;
  selectedBrand?: string;
  selectedCategory?: string;
  selectedCountry?: string;
}) => {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/products.json');
        const data = await res.json();
        let updatedProducts = [...data];

        if (searchQuery) {
          updatedProducts = updatedProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
        if (selectedBrand) {
          updatedProducts = updatedProducts.filter(product => product.brand === selectedBrand);
        }
        if (selectedCategory) {
          updatedProducts = updatedProducts.filter(
            product => product.category === selectedCategory
          );
        }
        if (selectedCountry) {
          updatedProducts = updatedProducts.filter(product => product.country === selectedCountry);
        }

        if (sortOption === 'price-asc') {
          updatedProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-desc') {
          updatedProducts.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'name') {
          updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === 'country') {
          updatedProducts.sort((a, b) => a.country.localeCompare(b.country));
        }

        setProducts(updatedProducts);
        setIsLoading(false);
      } catch (error) {
        console.error('Помилка завантаження продуктів:', error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [sortOption, searchQuery, selectedBrand, selectedCategory, selectedCountry]);

  if (isLoading) {
    return <p className="text-center text-gray-600 text-lg">⏳ Завантаження...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-16 gap-x-6 relative">
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className="relative group">
            <ProductCard product={product} />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-50px] opacity-0 group-hover:opacity-100 group-hover:bottom-[-40px] transition-all duration-300">
              <button className="bg-pink-500 text-white py-2 px-16 rounded-lg shadow-md hover:bg-pink-600 transition">
                Купити
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center col-span-4 text-gray-600 text-lg">❌ Нічого не знайдено</p>
      )}
    </div>
  );
};

export default ProductList;
