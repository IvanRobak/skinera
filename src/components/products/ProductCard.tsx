'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

interface Product {
  id: number;
  image_url: string;
  name: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div
      className="bg-white rounded-lg shadow-lg flex flex-col h-full cursor-pointer max-w-xs"
      onClick={() => router.push(`/products/${product.id}`)}
    >
      {/* Контейнер для зображення з підложкою */}
      <div className="w-full h-[350px] sm:h-48 md:h-64 bg-gray-100 p-2 sm:p-4 flex items-center justify-center rounded-lg overflow-hidden shadow-md relative">
        {imageLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 border-t-4 border-pink-500 border-solid rounded-full animate-spin"></div>
          </div>
        )}
        <Image
          src={product.image_url}
          alt={product.name}
          width={200}
          height={200}
          className={`object-contain h-full w-full transition-opacity duration-300 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
          onLoadingComplete={() => setImageLoading(false)}
        />
      </div>

      {/* Контейнер для назви та ціни */}
      <div className="flex-grow p-4 text-center">
        <h2 className="text-gray-600 text-sm font-medium line-clamp-2 mb-2">{product.name}</h2>
        <p className="text-gray-600 font-bold">{product.price} ₴</p>
      </div>
    </div>
  );
};

export default ProductCard;
