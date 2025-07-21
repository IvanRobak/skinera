// components/Cart.tsx
'use client';

import { useRouter } from 'next/navigation';
import { CartItem } from './store/cartStore';

interface CartProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onClose: () => void;
}

const Cart = ({ cart, onUpdateQuantity, onRemoveFromCart, onClose }: CartProps) => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push('/cart');
    onClose();
  };

  if (!cart.length) {
    return (
      <div
        className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[100] pointer-events-auto"
        onClick={onClose}
      >
        <div
          className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full mx-4"
          onClick={e => e.stopPropagation()}
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Ваш кошик порожній</h3>
            <p className="text-gray-600 mb-6">Додайте товари до кошика, щоб зробити замовлення</p>
            <button
              className="w-full bg-brand-600 text-white px-6 py-3 rounded-full hover:bg-brand-700 transition-colors shadow-md hover:shadow-lg"
              onClick={onClose}
            >
              Продовжити покупки
            </button>
          </div>
        </div>
      </div>
    );
  }
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[100] pointer-events-auto"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-2xl shadow-xl max-w-lg w-full mx-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">
            Кошик <span className="text-brand-600">({totalItems})</span>
          </h3>
          <button
            className="text-gray-400 hover:text-gray-600 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto pr-2">
          <ul className="space-y-4">
            {cart.map(item => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{item.name.en}</h4>
                  <p className="text-brand-600 font-medium">{item.price} ₴</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-white rounded-full shadow-sm border border-gray-200">
                    <button
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-brand-600 transition-colors"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-gray-800">{item.quantity}</span>
                    <button
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-brand-600 transition-colors"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-gray-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
                    onClick={() => onRemoveFromCart(item.id)}
                  >
                    ×
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600">Загальна сума:</span>
            <span className="text-xl font-bold text-brand-600">
              {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)} ₴
            </span>
          </div>
          <button
            className="w-full bg-brand-600 text-white px-6 py-3 rounded-full hover:bg-brand-700 transition-colors shadow-md hover:shadow-lg"
            onClick={handleButtonClick}
          >
            Оформити замовлення
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
