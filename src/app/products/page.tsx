'use client';

import { useState, useEffect, useCallback } from 'react';
import ProductList from '@/components/products/ProductList';

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  category: string;
  brand: string;
  country: string;
}

const ProductsPage = () => {
  const [sortOption, setSortOption] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [allBrands, setAllBrands] = useState<string[]>([]);
  const [allCountries, setAllCountries] = useState<string[]>([]);

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const url = new URL('/api/products', window.location.origin);
      if (searchQuery) url.searchParams.append('search', searchQuery);
      if (selectedBrand) url.searchParams.append('brand', selectedBrand);
      if (selectedCategory) url.searchParams.append('category', selectedCategory);
      if (selectedCountry) url.searchParams.append('country', selectedCountry);
      if (sortOption && sortOption !== 'default') url.searchParams.append('sort', sortOption);

      const res = await fetch(url.toString());
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = (await res.json()) as Product[];
      setProducts(data);

      // Update all available options only if they haven't been set yet
      if (allCategories.length === 0) {
        setAllCategories(Array.from(new Set(data.map(product => product.category))));
      }
      if (allBrands.length === 0) {
        setAllBrands(Array.from(new Set(data.map(product => product.brand))));
      }
      if (allCountries.length === 0) {
        setAllCountries(Array.from(new Set(data.map(product => product.country))));
      }
    } catch (error) {
      console.error('Помилка завантаження продуктів:', error);
    } finally {
      setIsLoading(false);
    }
  }, [
    sortOption,
    searchQuery,
    selectedBrand,
    selectedCategory,
    selectedCountry,
    allCategories.length,
    allBrands.length,
    allCountries.length,
  ]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading) {
    return <p className="text-center text-gray-600 text-lg">⏳ Завантаження...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center m-10">Наші Товари</h1>
      <div className="mb-6 flex flex-col md:flex-row justify-end items-center gap-4 px-15 sm:px-30 md:px-6">
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
        <aside className="md:w-1/4 border-r p-4 space-y-4 gap-4 px-15 sm:px-30 md:px-6">
          <h2 className="text-xl font-semibold mb-2">Фільтри</h2>
          <div>
            <label className="text-gray-700 font-medium">Бренд:</label>
            <select
              value={selectedBrand}
              onChange={e => setSelectedBrand(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full focus:ring-pink-500"
            >
              <option value="">Усі бренди</option>
              {allBrands.map(brand => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-gray-700 font-medium">Категорія:</label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full focus:ring-pink-500"
            >
              <option value="">Усі категорії</option>
              {allCategories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-gray-700 font-medium">Країна:</label>
            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full focus:ring-pink-500"
            >
              <option value="">Усі країни</option>
              {allCountries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </aside>
        <div className="md:w-3/4 flex justify-center">
          <ProductList
            products={products}
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
