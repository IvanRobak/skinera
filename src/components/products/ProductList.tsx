'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useCartStore } from '../store/cartStore'; // Імпортуй зі свого шляху
import { toast } from 'react-toastify';

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
  const { addToCart, cart } = useCartStore(); // Використовуємо Zustand для кошика

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

  // Обробник для додавання товару до кошика
  const handleAddToCart = (product: any) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      quantity: 1, // Початкова кількість
    };
    addToCart(cartItem);
    toast.success('Товар додано до кошика!', {
      position: 'top-right',
      autoClose: 1000,
    });
  };

  if (isLoading) {
    return <p className="text-center text-gray-600 text-lg">⏳ Завантаження...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-6 p-4 sm:p-6">
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className="relative group">
            <ProductCard product={product} />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] opacity-0 group-hover:opacity-100 group-hover:bottom-[-20px] transition-all duration-300 z-10">
              <button
                className="bg-red-500 text-white py-1 px-12 rounded-lg shadow-md hover:bg-red-600 transition text-xs sm:text-sm"
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
