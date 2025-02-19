import { useState } from 'react';
import ProductList from '../features/products/ProductList';
import products from '../assets/products.json'; // Імпортуємо дані, щоб отримати унікальні бренди та категорії

const ProductsPage = () => {
  const [sortOption, setSortOption] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Отримуємо унікальні бренди та категорії для випадаючих списків
  const uniqueBrands = Array.from(new Set(products.map(product => product.brand)));
  const uniqueCategories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Наші Товари</h1>

      {/* Панель пошуку, фільтрів та сортування */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Пошук */}
        <input
          type="text"
          placeholder="🔍 Пошук товарів..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full focus:ring-pink-500"
        />

        {/* Фільтр за брендом */}
        <select
          value={selectedBrand}
          onChange={e => setSelectedBrand(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full focus:ring-pink-500"
        >
          <option value="">Усі бренди</option>
          {uniqueBrands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        {/* Фільтр за категорією */}
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full focus:ring-pink-500"
        >
          <option value="">Усі категорії</option>
          {uniqueCategories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Сортування */}
        <select
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full focus:ring-pink-500"
        >
          <option value="default">За замовчуванням</option>
          <option value="price-asc">Від дешевших до дорогих</option>
          <option value="price-desc">Від дорогих до дешевших</option>
          <option value="name">За назвою</option>
        </select>
      </div>

      {/* Список товарів */}
      <ProductList
        sortOption={sortOption}
        searchQuery={searchQuery}
        selectedBrand={selectedBrand}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default ProductsPage;
