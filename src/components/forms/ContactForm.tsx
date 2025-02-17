import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Обробка відправки форми
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '1d66f389-60f0-4e32-80d1-3aa0b82f0b32', // Встав свій API ключ
          ...data,
        }),
      });

      if (response.ok) {
        setResponseMessage('✅ Ваше повідомлення успішно відправлено!');
        reset(); // Очистити форму після відправки
      } else {
        setResponseMessage('❌ Помилка. Спробуйте ще раз.');
      }
    } catch (error) {
      setResponseMessage('❌ Помилка. Перевірте інтернет-з’єднання.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Записатись на прийом</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        {/* Ім'я */}
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Ім'я
          </label>
          <input
            id="name"
            type="text"
            placeholder="Ваше ім'я"
            {...register('name', { required: 'Ім’я обов’язкове' })}
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-500  focus:outline-none focus:ring-2 ${
              errors.name ? 'border-red-500 focus:ring-red-400' : 'focus:ring-pink-400'
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
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Телефон
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+38 096 456 789"
            {...register('phone', {
              required: 'Телефон обов’язковий',
              pattern: {
                value: /^\+?3?8?(0\d{9})$/,
                message: 'Введіть коректний номер телефону',
              },
            })}
            className={`w-full px-4 py-2  mb-5 border border-gray-300 rounded-lg placeholder-gray-500  focus:outline-none focus:ring-2 ${
              errors.phone ? 'border-red-500 focus:ring-red-400' : 'focus:ring-pink-400'
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
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg hover:from-pink-600 hover:to-purple-600 shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          {isSubmitting ? 'Надсилання...' : 'Записатись'}
        </button>

        {/* Повідомлення про статус */}
        {responseMessage && <p className="mt-4 text-gray-800">{responseMessage}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
