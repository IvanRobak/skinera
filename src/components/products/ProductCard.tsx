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
      className="bg-white rounded-lg shadow-lg flex flex-col h-full cursor-pointer"
      onClick={() => router.push(`/products/${product.id}`)}
    >
      {/* Контейнер для зображення з підложкою */}
      <div className="w-full h-64 bg-gray-100 p-6 flex items-center justify-center rounded-lg overflow-hidden shadow-md">
        <Image
          src={product.image_url}
          alt={product.name}
          width={300} // Встановіть оптимальні розміри
          height={300}
          className="object-contain"
        />
      </div>

      {/* Контейнер для назви та ціни */}
      <div className="flex-grow p-4 text-center">
        <h2 className="text-gray-600 text-sm md:text-base font-medium line-clamp-2 min-h-[3rem]">
          {product.name}
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          <span className="font-bold">{product.price} ₴</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
