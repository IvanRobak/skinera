'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@/lib/products';
import ProductCard from '@/components/products/ProductCard';
import DescriptionRenderer from '@/components/common/DescriptionRenderer';
import AddToCartButton from '@/components/products/AddToCartButton';
import Modal from '@/components/common/Modal';
// import ModalButton from '@/components/common/ModalButton';
import ProductConsultationForm from '@/components/forms/ProductConsultationForm';

interface StaticProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

export default function StaticProductDetails({
  product,
  relatedProducts,
}: StaticProductDetailsProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const openConsultationModal = () => {
    setIsConsultationModalOpen(true);
  };

  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-8 p-8">
          {/* Left side - Image and Details */}
          <div className="w-full md:w-3/5 flex flex-col">
            {/* Product image */}
            <div className="flex justify-center mb-6">
              <div
                className="relative w-full max-w-sm h-[500px] group cursor-pointer"
                onClick={handleImageClick}
              >
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
            <div className="flex flex-col gap-2 mb-10">
              <h2 className="text-3xl font-bold">{product.name.en}</h2>
              <p className="text-gray-600">{product.name.ua}</p>
            </div>
            <div className="flex justify-between items-center w-full border-b border-gray-400 pb-2">
              <span className="text-lg text-gray-600 border border-gray-300 rounded-md px-2 py-1">
                {product.volume} мл
              </span>
              <p className="text-3xl font-bold text-brand-600">
                {product.price} <span className="text-xl text-brand-600">грн</span>
              </p>
            </div>
            <AddToCartButton product={product} />
            <div className="mt-8 text-gray-600 flex flex-col gap-2 ">
              <p className="flex items-center gap-2">
                <span className="text-pink-500">🚚</span> Доставка: Нова пошта, Укрпошта
              </p>
              <p className="flex items-center gap-2">
                <span className="text-pink-500">✔️</span> Наявність: В наявності
              </p>
            </div>

            {/* Product Highlights */}
            <div className="w-full bg-gray-50 rounded-lg p-4 space-y-3">
              <h4 className="font-semibold text-gray-800">Ключові переваги</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>100% оригінальна продукція</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Сертифікована косметика</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Швидка доставка</span>
                </div>
              </div>
            </div>

            {/* Customer Support */}
            <div
              className="w-full rounded-lg p-4 text-center"
              style={{ backgroundColor: '#FCEFE7' }}
            >
              <div className="text-brand-600 mb-2">💬</div>
              <p className="text-sm text-gray-900 font-medium mb-1">Потрібна консультація?</p>
              <p className="text-xs text-gray-700">Наші експерти готові допомогти</p>
              <button
                onClick={openConsultationModal}
                className="text-xs text-brand-600 underline hover:text-brand-700 cursor-pointer"
              >
                Замовити консультацію
              </button>
              <div></div>
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

      {/* Image Modal */}
      <Modal isOpen={isImageModalOpen} onClose={closeImageModal}>
        <div className="text-center p-4">
          <div className="relative w-full min-h-[800px]">
            <Image
              src={product.image_url}
              alt={product.name.en}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </Modal>

      {/* Consultation Modal */}
      <Modal isOpen={isConsultationModalOpen} onClose={closeConsultationModal}>
        <ProductConsultationForm productName={product.name.ua} productBrand={product.brand} />
      </Modal>
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
