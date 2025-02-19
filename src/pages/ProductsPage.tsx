import { useState } from 'react';
import ProductList from '../features/products/ProductList';
import products from '../assets/products.json';

const ProductsPage = () => {
  const [sortOption, setSortOption] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  // Отримуємо унікальні значення для фільтрів
  const uniqueBrands = Array.from(new Set(products.map(product => product.brand)));
  const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
  const uniqueCountries = Array.from(new Set(products.map(product => product.country)));

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Наші Товари</h1>

      {/* Пошук та сортування */}
      <div className="mb-6 flex flex-col md:flex-row justify-end items-center gap-4">
        <input
          type="text"
          placeholder="🔍 Пошук товарів..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full md:w-1/3 focus:ring-pink-500"
        />
        <select
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full md:w-1/4 focus:ring-pink-500"
        >
          <option value="default">За замовчуванням</option>
          <option value="price-asc">Від дешевших до дорогих</option>
          <option value="price-desc">Від дорогих до дешевших</option>
          <option value="name">За назвою</option>
          <option value="country">За країною</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Блок фільтрів (ліворуч) */}
        <aside className="md:w-1/4 border-r pr-4 space-y-4">
          <h2 className="text-xl font-semibold mb-2">Фільтри</h2>

          {/* Фільтр за брендом */}
          <div>
            <label className="text-gray-700 font-medium">Бренд:</label>
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
          </div>

          {/* Фільтр за категорією */}
          <div>
            <label className="text-gray-700 font-medium">Категорія:</label>
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
          </div>

          {/* Фільтр за країною */}
          <div>
            <label className="text-gray-700 font-medium">Країна:</label>
            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full focus:ring-pink-500"
            >
              <option value="">Усі країни</option>
              {uniqueCountries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Список товарів (праворуч) */}
        <div className="md:w-3/4">
          <ProductList
            sortOption={sortOption}
            searchQuery={searchQuery}
            selectedBrand={selectedBrand}
            selectedCategory={selectedCategory}
            selectedCountry={selectedCountry}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
