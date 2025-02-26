// components/Cart.tsx
'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image_url?: string;
}

interface CartProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onClose: () => void;
}

const Cart = ({ cart, onUpdateQuantity, onRemoveFromCart, onClose }: CartProps) => {
  if (!cart.length) {
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 pointer-events-auto"
        onClick={onClose}
      >
        <div
          className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full z-50 pointer-events-auto"
          onClick={e => e.stopPropagation()}
        >
          <h3 className="text-lg font-bold mb-2">Кошик</h3>
          <p className="text-gray-600">Кошик порожній</p>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            onClick={onClose}
          >
            Закрити
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60 pointer-events-auto"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full z-60 pointer-events-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-600">Кошик ({cart.length} товарів)</h3>
          <button className="text-gray-600 hover:text-gray-800 text-xl" onClick={onClose}>
            ×
          </button>
        </div>
        <ul>
          {cart.map(item => (
            <li key={item.id} className="flex justify-between items-center mb-2 text-gray-600">
              <span>
                {item.name} - {item.price} ₴
              </span>
              <div className="flex items-center gap-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition text-xs"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition text-xs"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition text-xs ml-2"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Видалити
                </button>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-bold text-gray-600 flex justify-end">
          Загальна сума: {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)} ₴
        </p>
      </div>
    </div>
  );
};

export default Cart;
