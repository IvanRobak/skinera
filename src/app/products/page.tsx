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

interface PaginationData {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
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
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    page: 1,
    limit: 12,
    totalPages: 0,
  });

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const url = new URL('/api/products', window.location.origin);
      if (searchQuery) url.searchParams.append('search', searchQuery);
      if (selectedBrand) url.searchParams.append('brand', selectedBrand);
      if (selectedCategory) url.searchParams.append('category', selectedCategory);
      if (selectedCountry) url.searchParams.append('country', selectedCountry);
      if (sortOption && sortOption !== 'default') url.searchParams.append('sort', sortOption);
      url.searchParams.append('page', pagination.page.toString());
      url.searchParams.append('limit', pagination.limit.toString());

      const res = await fetch(url.toString());
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setProducts(data.products);
      setPagination(data.pagination);

      // Update filters only on first load
      if (allCategories.length === 0) {
        const initialData = await fetch('/api/products').then(res => res.json());
        setAllCategories(
          Array.from(new Set(initialData.products.map((product: Product) => product.category)))
        );
        setAllBrands(
          Array.from(new Set(initialData.products.map((product: Product) => product.brand)))
        );
        setAllCountries(
          Array.from(new Set(initialData.products.map((product: Product) => product.country)))
        );
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
    pagination.page,
    pagination.limit,
    allCategories.length,
  ]);

  const handlePageChange = (newPage: number) => {
    setPagination(prev => ({ ...prev, page: newPage }));
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= pagination.totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 mx-1 rounded ${
            pagination.page === i
              ? 'bg-pink-500 text-white'
              : 'bg-white text-gray-700 hover:bg-pink-100'
          } transition-colors duration-200`}
        >
          {i}
        </button>
      );
    }
    return (
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(pagination.page - 1)}
          disabled={pagination.page === 1}
          className="px-4 py-2 rounded bg-white text-gray-700 hover:bg-pink-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ←
        </button>
        {pages}
        <button
          onClick={() => handlePageChange(pagination.page + 1)}
          disabled={pagination.page === pagination.totalPages}
          className="px-4 py-2 rounded bg-white text-gray-700 hover:bg-pink-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          →
        </button>
      </div>
    );
  };

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
          className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 outline-none hover:border-pink-400"
        />
        <select
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 outline-none hover:border-pink-400"
        >
          <option value="default">За замовчуванням</option>
          <option value="price-asc">Від дешевших до дорогих</option>
          <option value="price-desc">Від дорогих до дешевших</option>
          <option value="name">За назвою</option>
          <option value="country">За країною</option>
        </select>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-1/4 p-6 bg-white rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-pink-500 pb-2">
            Фільтри
          </h2>

          {/* Фільтр за брендом */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium block">Бренд:</label>
            <select
              value={selectedBrand}
              onChange={e => setSelectedBrand(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 outline-none hover:border-pink-400"
            >
              <option value="">Усі бренди</option>
              {allBrands.map(brand => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Фільтр за категорією */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium block">Категорія:</label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 outline-none hover:border-pink-400"
            >
              <option value="">Усі категорії</option>
              {allCategories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Фільтр за країною */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium block">Країна:</label>
            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 outline-none hover:border-pink-400"
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
        <div className="md:w-3/4 flex flex-col">
          <ProductList
            products={products}
            sortOption={sortOption}
            searchQuery={searchQuery}
            selectedBrand={selectedBrand}
            selectedCategory={selectedCategory}
            selectedCountry={selectedCountry}
            page={pagination.page}
            limit={pagination.limit}
          />
          {renderPagination()}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
