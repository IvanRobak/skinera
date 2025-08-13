import Image from 'next/image';
import React from 'react';
import { useCartStore } from '../store/cartStore';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import { formatPriceWithCurrency } from '@/lib/utils';

const OrderSection = () => {
  const router = useRouter();

  const cart = useCartStore(state => state.cart);
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const updateQuantity = useCartStore(state => state.updateQuantity);

  const deleteProduct = (id: number) => {
    router.push('/');
    setTimeout(() => {
      removeFromCart(id);
    }, 5000);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 min-w-[540px] border-[#ebebeb] border-[1px] h-auto">
      <div className="border-b border-[#ebebeb] pb-4">
        <h2 className="text-[#212121] text-xl font-bold">Ваше замовлення</h2>{' '}
      </div>
      <div
        className="orders-container max-h-[440px] overflow-y-auto overflow-x-hidden pr-5 -mr-5"
        style={{ scrollbarGutter: 'stable' }}
      >
        <ul>
          {cart.map((item, index) => {
            return (
              <li className="flex flex-1 py-3  border-b border-[#ebebeb]" key={index}>
                <div className="relative w-24 h-28">
                  <Image
                    alt="Appereance of how looking cream for face care"
                    fill
                    src={item.image_url ?? ''}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#212121] text-sm font-normal mb-1">{item.name.ua}</h3>
                  <p className="text-[#A6A2A2] text-sm">{item.name.en}</p>
                  <span className="text-[#A6A2A2] text-sm">
                    {formatPriceWithCurrency(item.price, '$')}
                  </span>
                  <div className="flex justify-between items-center mt-3">
                    <div className="relative flex items-center">
                      <button
                        className="w-10 h-10 border-[#ebebeb] border-[1px] relative
                  before:content-[''] before:absolute before:w-[16px] before:border-t-[1px] before:border-black before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      ></button>
                      <span className="w-10 h-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                      <button
                        className="w-10 h-10 border-[#ebebeb] border-[1px] relative
                  before:content-[''] before:absolute before:w-[16px] before:border-t-[1px] before:border-black before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
                  after:content-[''] after:absolute after:h-[16px] after:border-l-[1px] after:border-black after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      ></button>
                    </div>
                    <RiDeleteBin6Line
                      width={32}
                      height={32}
                      className="cursor-pointer"
                      onClick={() => deleteProduct(item.id)}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pt-3">
        <div className="flex justify-between mb-3">
          <span className="text-sm">Підсумок</span>
          <span className="text-sm font-medium">{formatPriceWithCurrency(total, '$')}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Доставка(Кур&quot;єром Makeup)</span>
          <span className="text-sm font-medium">0$</span>
        </div>
        <div className="flex justify-between mt-6">
          <h2 className="text-xl font-semibold">Разом</h2>
          <span className="text-sm font-semibold">{formatPriceWithCurrency(total, '$')}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
