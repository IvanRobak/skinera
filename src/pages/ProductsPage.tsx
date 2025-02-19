import { useState } from 'react';
import ProductList from '../features/products/ProductList';

const ProductsPage = () => {
  const [sortOption, setSortOption] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Наші Товари</h1>

      {/* Поле пошуку і сортування */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Пошук */}
        <input
          type="text"
          placeholder="🔍 Пошук товарів..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full md:w-1/3 focus:ring-pink-500"
        />

        {/* Сортування */}
        <div className="mt-4 md:mt-0">
          <label className="text-gray-700 mr-2">Сортувати:</label>
          <select
            value={sortOption}
            onChange={e => setSortOption(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:ring-pink-500"
          >
            <option value="default">За замовчуванням</option>
            <option value="price-asc">Від дешевших до дорогих</option>
            <option value="price-desc">Від дорогих до дешевших</option>
            <option value="name">За назвою</option>
          </select>
        </div>
      </div>

      {/* Список товарів */}
      <ProductList sortOption={sortOption} searchQuery={searchQuery} />
    </div>
  );
};

export default ProductsPage;
