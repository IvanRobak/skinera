import { useState, useEffect } from 'react';
import products from '../../assets/products.json';
import ProductCard from './ProductCard';

const ProductList = ({ sortOption, searchQuery }: { sortOption: string; searchQuery: string }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let updatedProducts = [...products];

    // Фільтрація за назвою
    if (searchQuery) {
      updatedProducts = updatedProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Сортування
    if (sortOption === 'price-asc') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'name') {
      updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(updatedProducts);
  }, [sortOption, searchQuery]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-16 gap-x-6 relative">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <div key={product.id} className="relative group">
            {/* Картка товару */}
            <ProductCard product={product} />

            {/* Кнопка "Купити" в просторі між рядами */}
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
