import { useState } from 'react';
import ProductList from '../features/products/ProductList';

const ProductsPage = () => {
  const [sortOption, setSortOption] = useState('default');

  return (
    <div className="max-w-6xl mx-auto py-20">
      <h1 className="text-3xl font-bold text-center mb-6">Наші Товари</h1>

      {/* Сортування */}
      <div className="flex justify-end items-center mb-6">
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

      {/* Список товарів */}
      <ProductList sortOption={sortOption} />
    </div>
  );
};

export default ProductsPage;
