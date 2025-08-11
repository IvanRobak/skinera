'use client';
import Image from 'next/image';
import { Product } from '@/lib/products';
import ProductCard from '@/components/products/ProductCard';
import DescriptionRenderer from '@/components/common/DescriptionRenderer';
import AddToCartButton from '@/components/products/AddToCartButton';

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
          <div className="w-full md:w-3/5 flex flex-col">
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
          <div className="w-full md:w-2/5 flex flex-col items-start space-y-6 mt-12 md:sticky md:top-20 md:self-start md:max-h-screen">
            <h2 className="text-2xl font-bold">{product.name.en}</h2>
            <p className="text-3xl font-bold text-brand-600">{product.price} ₴</p>
            <AddToCartButton product={product} />
            <div className="space-y-3 text-gray-600">
              <p className="flex items-center gap-2">
                <span className="text-pink-500">🚚</span> Доставка: Нова пошта, Укрпошта
              </p>
              <p className="flex items-center gap-2">
                <span className="text-pink-500">✔️</span> Наявність: В наявності
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
  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="border-b border-gray-200 last:border-b-0">
      <div className="py-4 px-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Sections - Always Open */}
      <div>
        {/* Description */}
        {product.content?.description && (
          <Section title="Опис">
            <DescriptionRenderer description={product.content.description} />
          </Section>
        )}

        {/* Characteristics */}
        <Section title="Характеристики">
          <ul className="space-y-2">
            {product.characteristics?.cosmetic_classification && (
              <li>
                <strong>Класифікація:</strong> {product.characteristics.cosmetic_classification}
              </li>
            )}
            {product.characteristics?.skin_type && (
              <li>
                <strong>Тип шкіри:</strong> {product.characteristics.skin_type}
              </li>
            )}
            {product.characteristics?.purpose_and_result && (
              <li>
                <strong>Призначення:</strong> {product.characteristics.purpose_and_result}
              </li>
            )}
            {(product.characteristics?.volume || product.volume) && (
              <li>
                <strong>Обʼєм:</strong> {product.characteristics?.volume || product.volume} мл
              </li>
            )}
            {product.characteristics?.cleanser_type && (
              <li>
                <strong>Тип очищувача:</strong> {product.characteristics.cleanser_type}
              </li>
            )}
            {product.characteristics?.skin_problem && (
              <li>
                <strong>Проблеми шкіри:</strong> {product.characteristics.skin_problem}
              </li>
            )}
            {product.characteristics?.age && (
              <li>
                <strong>Вік:</strong> {product.characteristics.age}
              </li>
            )}
            {product.characteristics?.hypoallergenic && (
              <li>
                <strong>Гіпоалергенність:</strong> {product.characteristics.hypoallergenic}
              </li>
            )}
            <li>
              <strong>Бренд:</strong> {product.brand}
            </li>
            <li>
              <strong>Країна:</strong> {product.country}
            </li>
          </ul>
        </Section>

        {/* Instructions */}
        {product.content?.usage && (
          <Section title="Як використовувати">
            <p className="leading-relaxed">{product.content.usage}</p>
          </Section>
        )}

        {/* Ingredients */}
        {product.content?.activeComponents && (
          <Section title="Активні компоненти">
            <p className="leading-relaxed">{product.content.activeComponents}</p>
          </Section>
        )}
      </div>
    </div>
  );
}
