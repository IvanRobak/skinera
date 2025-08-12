'use client';
import { useCartStore } from '@/components/store/cartStore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { formatPriceWithCurrency } from '@/lib/utils';

function Cart() {
  const router = useRouter();
  const cart = useCartStore(state => state.cart);
  // Optionally, add remove functionality if available
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const updateQuantity = useCartStore(state => state.updateQuantity);

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (!cart?.length) {
      router.push('/');
    }
  }, [cart?.length, router]);

  return (
    <section className="max-w-6xl pt-32 m-auto">
      <h1 className="text-center text-3xl font-semibold mb-4">Кошик</h1>
      {cart.map(item => {
        return (
          <div key={item.id} className="flex items-center gap-6 py-6 border-t">
            {/* Image */}
            <div className="w-20 h-20 flex-shrink-0 relative">
              <Image
                src={item.image_url ?? ''}
                alt={item.name.en}
                fill
                className="object-contain"
              />
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col justify-center gap-2">
                <span className="font-bold text-black">{item.name.en}</span>
                <span>{item.name.ua}</span>
              </div>
            </div>
            {/* Price block */}
            <div className="min-w-[120px]">
              <div className="text-purple-600 font-semibold text-lg">
                {formatPriceWithCurrency(item.price)}
              </div>
            </div>
            {/* Quantity */}
            <div>
              <select
                className="border rounded py-2 text-center font-medium"
                value={item.quantity}
                onChange={e => updateQuantity(item.id, Number(e.target.value))}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} шт.
                  </option>
                ))}
              </select>
            </div>
            {/* Total */}
            <div className="font-bold text-lg min-w-[90px] text-right">
              {formatPriceWithCurrency(item.price * item.quantity)}
            </div>
            {/* Remove */}
            <button
              className="text-gray-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
              onClick={() => removeFromCart(item.id)}
            >
              ×
            </button>
          </div>
        );
      })}
      <div>
        <div className="w-full bg-gray-100 min-h-14 flex items-center justify-end px-3">
          <h3 className="text-2xl font-semibold ">Всього {formatPriceWithCurrency(total)}</h3>
        </div>
        <div className="flex justify-between my-6">
          <Link
            href={'/'}
            className="max-w-64 bg-purple-500 text-white py-4 px-8 rounded-lg hover:bg-purple-600 transition duration-300 shadow-md"
          >
            Назад до магазину
          </Link>
          <Link
            href={'/checkout'}
            className=" bg-gray-200 text-gray-800 py-4 px-8 rounded-lg hover:bg-gray-300 transition duration-300 shadow-md"
          >
            Замовити
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;
