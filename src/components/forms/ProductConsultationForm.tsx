'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ProductConsultationFormData {
  name: string;
  phone: string;
  productInfo?: string;
}

interface ProductConsultationFormProps {
  productName?: string;
  productBrand?: string;
}

const ProductConsultationForm = ({ productName, productBrand }: ProductConsultationFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductConsultationFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Обробка відправки форми
  const onSubmit = async (data: ProductConsultationFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '1d66f389-60f0-4e32-80d1-3aa0b82f0b32',
          subject: 'Консультація щодо продукту',
          product_info:
            productName && productBrand
              ? `${productBrand} - ${productName}`
              : 'Загальна консультація',
          ...data,
        }),
      });

      if (response.ok) {
        setResponseMessage(
          "✅ Ваше запитання успішно відправлено! Ми зв'яжемося з вами найближчим часом."
        );
        reset();
      } else {
        setResponseMessage('❌ Помилка. Спробуйте ще раз.');
      }
    } catch {
      setResponseMessage('❌ Помилка. Перевірте інтернет-зʼєднання.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">Консультація щодо продукту</h2>
      {productName && productBrand && (
        <p className="text-sm text-brand-600 mb-2">
          Продукт:{' '}
          <strong>
            {productBrand} - {productName}
          </strong>
        </p>
      )}
      <p className="text-gray-700 mb-6">
        Наші експерти готові відповісти на ваші запитання та допомогти з вибором
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Ім'я */}
        <div>
          <label className="block text-gray-800 font-medium mb-2" htmlFor="name">
            Імʼя
          </label>
          <input
            id="name"
            type="text"
            placeholder="Ваше ім'я"
            {...register('name', { required: 'Імʼя обовʼязкове' })}
            className={`w-full px-4 py-3 border border-gray-200 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
              errors.name ? 'border-red-500 focus:ring-red-400' : ''
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-2">
              <svg
                className="h-5 w-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>
              {typeof errors.name.message === 'string' && errors.name.message}
            </p>
          )}
        </div>

        {/* Телефон */}
        <div>
          <label className="block text-gray-800 font-medium mb-2" htmlFor="phone">
            Телефон
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+38 096 456 789"
            {...register('phone', {
              required: 'Телефон обовʼязковий',
              pattern: {
                value: /^\+?3?8?(0\d{9})$/,
                message: 'Введіть коректний номер телефону',
              },
            })}
            className={`w-full px-4 py-3 border border-gray-200 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
              errors.phone ? 'border-red-500 focus:ring-red-400' : ''
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-2">
              <svg
                className="h-5 w-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>
              {typeof errors.phone.message === 'string' && errors.phone.message}
            </p>
          )}
        </div>

        {/* Кнопка відправки */}
        <button
          type="submit"
          disabled={isSubmitting}
          className=" bg-brand-600 text-white py-3 px-6 rounded-full hover:bg-brand-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Надсилання...' : 'Отримати консультацію'}
        </button>

        {/* Повідомлення про статус */}
        {responseMessage && (
          <p
            className={`mt-4 text-sm ${
              responseMessage.includes('✅') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {responseMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ProductConsultationForm;
