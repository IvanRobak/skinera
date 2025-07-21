'use client';
import Image from 'next/image';
import { Product } from '@/lib/products';
import ProductCard from '@/components/products/ProductCard';
import DescriptionRenderer from '@/components/common/DescriptionRenderer';
import AddToCartButton from '@/components/products/AddToCartButton';
import { useState } from 'react';

interface StaticProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

export default function StaticProductDetails({
  product,
  relatedProducts,
}: StaticProductDetailsProps) {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-8 p-8">
          {/* Left side - Image and Details */}
          <div className="w-full md:w-1/2 flex flex-col">
            {/* Product image */}
            <div className="flex justify-center mb-6">
              <div className="relative w-full max-w-sm h-[500px] group">
                <Image
                  src={product.image_url}
                  alt={product.name.en}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-300 group-hover:scale-110 p-8"
                  priority
                />
              </div>
            </div>
            {/* Product details accordion */}
            <ProductDetailsAccordion product={product} />
          </div>
          {/* Right side - Product info and purchase buttons */}
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 mt-12 md:sticky md:top-20 md:self-start md:max-h-screen">
            <h2 className="text-3xl font-bold">{product.name.en}</h2>
            <p className="text-3xl font-bold text-brand-600">{product.price} ₴</p>
            <AddToCartButton product={product} />
            <div className="space-y-3 text-gray-600">
              <p className="flex items-center gap-2">
                <span className="text-pink-500">🚚</span> Доставка: {product.delivery}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-pink-500">✔️</span> Наявність: {product.availability}
              </p>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="p-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Схожі продукти</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <ProductCard product={relatedProduct} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProductDetailsAccordion({ product }: { product: Product }) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleAll = () => {
    const newState = !allExpanded;
    setAllExpanded(newState);
    setOpenSections({
      description: newState,
      characteristics: newState,
      instructions: newState,
      ingredients: newState,
    });
  };

  const AccordionItem = ({
    id,
    title,
    children,
    isOpen,
  }: {
    id: string;
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
  }) => (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between py-4 px-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={`${id}-content`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 pb-4 text-gray-600">{children}</div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Expand/Collapse All Button */}
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <button
          onClick={toggleAll}
          className="text-sm text-brand-600 hover:text-brand-700 font-medium flex items-center gap-2"
        >
          {allExpanded ? (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
              Згорнути все
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Розгорнути все
            </>
          )}
        </button>
      </div>

      {/* Accordion Items */}
      <div>
        {/* Description */}
        {product.description && (
          <AccordionItem id="description" title="Опис" isOpen={openSections.description || false}>
            <DescriptionRenderer description={product.description} />
          </AccordionItem>
        )}

        {/* Characteristics */}
        <AccordionItem
          id="characteristics"
          title="Характеристики"
          isOpen={openSections.characteristics || false}
        >
          <ul className="space-y-2">
            <li>
              <strong>Класифікація:</strong> {product.characteristics.cosmetic_classification}
            </li>
            <li>
              <strong>Тип шкіри:</strong> {product.characteristics.skin_type}
            </li>
            <li>
              <strong>Призначення:</strong> {product.characteristics.purpose_and_result}
            </li>
            <li>
              <strong>Обʼєм:</strong> {product.characteristics.volume} мл
            </li>
            <li>
              <strong>Тип очищувача:</strong> {product.characteristics.cleanser_type}
            </li>
            <li>
              <strong>Проблеми шкіри:</strong> {product.characteristics.skin_problem}
            </li>
            <li>
              <strong>Вік:</strong> {product.characteristics.age}
            </li>
            <li>
              <strong>Гіпоалергенність:</strong> {product.characteristics.hypoallergenic}
            </li>
          </ul>
        </AccordionItem>

        {/* Instructions */}
        {product.instructions && (
          <AccordionItem
            id="instructions"
            title="Як використовувати"
            isOpen={openSections.instructions || false}
          >
            <p className="leading-relaxed">{product.instructions}</p>
          </AccordionItem>
        )}

        {/* Ingredients */}
        {product.ingredients && (
          <AccordionItem id="ingredients" title="Склад" isOpen={openSections.ingredients || false}>
            <ul className="list-disc pl-5 space-y-1">
              {product.ingredients.split(',').map((ingredient, index) => (
                <li key={index} className="leading-relaxed">
                  {ingredient.trim()}
                </li>
              ))}
            </ul>
          </AccordionItem>
        )}
      </div>
    </div>
  );
}
