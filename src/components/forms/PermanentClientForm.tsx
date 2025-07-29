import React, { useState } from 'react';

const PermanentClientForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div id="permanent-customer" aria-labelledby="tab-2">
      <p className="mb-11">
        Якщо ви зареєстрований клієнт, введіть ваш логін/email та пароль, якщо ви ще не є нашим
        клієнтом, то перейдіть у розділ Новий покупець і заповніть поля потрібною інформацією.{' '}
      </p>

      <div className="flex gap-20">
        <div className="relative flex-1">
          <input
            type="text"
            id="parmanent-email"
            placeholder=" "
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="peer w-full border-0 border-b border-[#ebebeb] p-0 focus:outline-none focus:border-b focus:border-[#ebebeb] focus:ring-0 focus:shadow-none"
          />
          <label
            htmlFor="parmanent-email"
            className={`absolute text-gray-400 pointer-events-none transition-all duration-200
        peer-focus:-top-6 peer-focus:text-[13px] ${
          email ? '-top-6 left-0 text-[13px]' : ' top-0 left-0 text-sm'
        }`}
          >
            E-mail
          </label>
          <span
            className="absolute left-0 bottom-0 h-[1px] w-0 bg-purple-600 
        transition-all duration-500 ease-in-out 
        origin-left peer-focus:w-full z-10"
          ></span>
        </div>

        <div className="relative flex-1">
          <input
            type="password"
            id="parmanent-password"
            placeholder=" "
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="peer w-full border-0 border-b border-[#ebebeb] p-0 focus:outline-none focus:border-b focus:border-[#ebebeb] focus:ring-0 focus:shadow-none"
          />
          <label
            htmlFor="parmanent-password"
            className={`absolute text-gray-400 pointer-events-none transition-all duration-200
        peer-focus:-top-6 peer-focus:text-[13px] ${
          password ? '-top-6 left-0 text-[13px]' : ' top-0 left-0 text-sm'
        }`}
          >
            Пароль
          </label>
          <span
            className="absolute left-0 bottom-0 h-[1px] w-0 bg-purple-600 
        transition-all duration-500 ease-in-out 
        origin-left peer-focus:w-full z-10"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default PermanentClientForm;
