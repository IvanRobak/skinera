'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Product {
  id: number;
  image_url: string;
  name: {
    en: string;
    ua: string;
  };
  price: number;
  brand: string;
  category: string;
  country: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();

  // Функція для очищення назви від бренду та категорії
  const cleanProductName = (name: string, brand: string, category: string): string => {
    let cleanName = name;

    // Видаляємо бренд з початку назви (якщо є)
    if (cleanName.toLowerCase().startsWith(brand.toLowerCase())) {
      cleanName = cleanName.substring(brand.length).trim();
    }

    // Видаляємо категорію з назви (якщо є)
    cleanName = cleanName.replace(new RegExp(category, 'gi'), '').trim();

    // Очищаємо зайві пробіли та розділювачі
    cleanName = cleanName.replace(/^[-\s]+|[-\s]+$/g, '').trim();

    return cleanName || name; // Повертаємо оригінальну назву, якщо після очищення нічого не залишилося
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg flex flex-col h-auto cursor-pointer w-full"
      onClick={() => router.push(`/products/${product.id}`)}
    >
      {/* Контейнер для зображення з підложкою */}
      <div className="w-full h-64 bg-gray-100 p-2 sm:p-4 flex items-center justify-center rounded-lg overflow-hidden shadow-md relative">
        <Image
          src={product.image_url}
          alt={product.name.en}
          width={200}
          height={200}
          className="object-contain h-full w-full"
          loading="lazy"
        />
      </div>

      {/* Контейнер для назви та ціни */}
      <div className="flex-grow p-2 text-center flex flex-col justify-center">
        <div className="mb-2 h-24 flex flex-col items-center justify-center">
          {/* Бренд */}
          <p className="text-gray-500 text-xs font-normal">{product.brand}</p>

          {/* Очищена назва англійською (жирним) */}
          <h2 className="text-gray-700 text-base font-bold line-clamp-2 text-center">
            {cleanProductName(product.name.en, product.brand, product.category)}
          </h2>

          {/* Назва українською */}
          <p className="text-gray-600 text-sm font-normal line-clamp-2 text-center">
            {product.name.ua}
          </p>
        </div>
        <p className="text-gray-600 font-bold">{product.price} грн</p>
      </div>
    </div>
  );
};

export default ProductCard;
