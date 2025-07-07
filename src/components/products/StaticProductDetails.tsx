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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className=" max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Product image and details tabs */}
        <div className="flex p-8">
          <div className="flex flex-col  gap-8 p-8">
            {/* Product image */}
            {/* <div className="w-full md:w-1/2 flex justify-center"> */}
            <div className="relative w-full  h-[800px] group  bg-gray-50 ">
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain transition-transform duration-300 group-hover:scale-110 p-16"
                priority
              />
            </div>
            {/* </div> */}
            {/* Product details tabs */}
            <ProductDetailsTabs product={product} />
          </div>
          {/* Product info and purchase buttons */}
          <div className="flex flex-col items-start md:flex-row gap-8 p-8">
            {/* Product info and purchase buttons */}
            <div className="w-full  flex flex-col justify-center items-start space-y-6">
              {/* Product header */}
              <div className="text-center py-8 ">
                <h1 className="text-2xl  font-bold text-gray-900">{product.name}</h1>
                <p className="text-sm text-gray-500 mt-2">
                  {product.brand} | {product.country}
                </p>
              </div>
              <p className="text-3xl font-bold text-purple-600">{product.price} ₴</p>
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

function ProductDetailsTabs({ product }: { product: Product }) {
  return (
    <div className="p-8 ">
      <div className="space-y-8">
        {/* Description */}
        {product.description && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-D4D4D4 pb-2 inline-block w-full">
              Опис
            </h3>
            <div className="text-gray-600">
              <DescriptionRenderer description={product.description} />
            </div>
          </div>
        )}

        {/* Characteristics */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-D4D4D4 pb-2 inline-block w-full">
            Характеристики
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
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
        </div>

        {/* Instructions */}
        {product.instructions && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-D4D4D4 pb-2 inline-block w-full">
              Як використовувати
            </h3>
            <p className="leading-relaxed text-gray-600">{product.instructions}</p>
          </div>
        )}

        {/* Ingredients */}
        {product.ingredients && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-D4D4D4 pb-2 inline-block w-full">
              Склад
            </h3>
            <ul className="list-disc pl-5 text-gray-600">
              {product.ingredients.split(',').map((ingredient, index) => (
                <li key={index} className="leading-relaxed">
                  {ingredient.trim()}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
