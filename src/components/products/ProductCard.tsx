'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Product {
  id: number;
  image_url: string;
  name: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();

  return (
    <div
      className="bg-white rounded-lg shadow-lg flex flex-col h-full cursor-pointer max-w-xs"
      onClick={() => router.push(`/products/${product.id}`)}
    >
      {/* Контейнер для зображення з підложкою */}
      <div className="w-full h-[350px] sm:h-48 md:h-64 bg-gray-100 p-2 sm:p-4 flex items-center justify-center rounded-lg overflow-hidden shadow-md">
        <Image
          src={product.image_url}
          alt={product.name}
          width={200} // Зменшив базову ширину
          height={200} // Зменшив базову висоту
          className="object-contain w-full h-auto max-h-[300px] sm:max-h-[150px] md:max-h-[340px]" // Додав адаптивні max-h
          priority={true}
        />
      </div>

      {/* Контейнер для назви та ціни */}
      <div className="flex-grow p-2 sm:p-4 text-center">
        <h2 className="text-gray-600 text-base  font-medium line-clamp-2 min-h-[2rem] sm:min-h-[3rem]">
          {product.name}
        </h2>
        <p className="text-gray-600 mt-1 sm:mt-2 text-lg">
          <span className="font-bold">{product.price} ₴</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
