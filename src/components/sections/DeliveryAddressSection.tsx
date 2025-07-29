import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const DeliveryAddressSection = () => {
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [building, setBuilding] = useState('');
  const [flat, setFlat] = useState('');

  return (
    <div className="flex flex-col gap-8">
      <div className="relative">
        <label
          htmlFor="telephone"
          className="block text-gray-400 pointer-events-none transition-all duration-200
                        peer-focus:-top-6 peer-focus:text-[13px]
                        -top-6 left-0 text-[13px]"
        >
          Місто*
        </label>
        <input
          type="text"
          id="telephone"
          placeholder="Введіть ваше місто"
          value={city}
          onChange={e => setCity(e.target.value)}
          className="peer w-full border-0 border-b border-[#ebebeb] pl-5 focus:outline-none focus:border-b focus:border-[#ebebeb] focus:ring-0 focus:shadow-none
            focus:placeholder-transparent 
            "
        />
        <CiSearch className="absolute top-[30px] left-0 w-4 h-4" />
        <span
          className="absolute left-0 bottom-0 h-[1px] w-0 bg-purple-600 
            transition-all duration-500 ease-in-out 
            origin-left peer-focus-within:w-full z-10"
        ></span>
      </div>
      <div className="border-b border-[#ebebeb] border-0">
        <label
          htmlFor="telephone"
          className="block text-gray-400 pointer-events-none transition-all duration-200
                        peer-focus:-top-6 peer-focus:text-[13px]
                        -top-6 left-0 text-[13px]"
        >
          Варіанти доставки*
        </label>
        <select name="delivery-option" className="border-none focus:ring-0">
          <option value="ukr-post">Укрпошта</option>
          <option value="meest-post">Meest Пошта (Самовивіз)</option>
          <option value="newpost-pickUp">Нова пошта (Самовивіз)</option>
          <option value="newpost-postMachine">Нова пошта (Поштомат)</option>
        </select>
      </div>

      <div>
        <div className="relative mb-8">
          <label
            htmlFor="telephone"
            className="block text-gray-400 pointer-events-none transition-all duration-200
                        peer-focus:-top-6 peer-focus:text-[13px]
                        -top-6 left-0 text-[13px]"
          >
            Вулиця*
          </label>
          <input
            type="text"
            id="telephone"
            placeholder="Введіть вашу валицю"
            value={street}
            onChange={e => setStreet(e.target.value)}
            className="peer w-full border-0 border-b border-[#ebebeb] pl-5 focus:outline-none focus:border-b focus:border-[#ebebeb] focus:ring-0 focus:shadow-none
            focus:placeholder-transparent 
            "
          />
          <CiSearch className="absolute top-[30px] left-0 w-4 h-4" />
          <span
            className="absolute left-0 bottom-0 h-[1px] w-0 bg-purple-600 
            transition-all duration-500 ease-in-out 
            origin-left peer-focus-within:w-full z-10"
          ></span>
        </div>
        <div className="flex gap-5">
          <div className="relative">
            <input
              type="text"
              id="building"
              placeholder=" "
              value={building}
              onChange={e => setBuilding(e.target.value)}
              className="peer w-full border-0 border-b border-[#ebebeb] p-0 focus:outline-none focus:border-b focus:border-[#ebebeb] focus:ring-0 focus:shadow-none
                    autofill:outline-none
                    "
            />
            <label
              htmlFor="building"
              className={`absolute text-gray-400 pointer-events-none transition-all duration-200
                    peer-focus:-top-6 peer-focus:text-[13px] ${
                      building ? '-top-6 left-0 text-[13px]' : ' top-0 left-0 text-sm'
                    }`}
            >
              Будинок*
            </label>
            <span
              className="absolute left-0 bottom-0 h-[1px] w-0 bg-purple-600 
                    transition-all duration-500 ease-in-out 
                    origin-left peer-focus-within:w-full z-10"
            ></span>
          </div>
          <div className="relative">
            <input
              type="text"
              id="flat"
              placeholder=" "
              value={flat}
              onChange={e => setFlat(e.target.value)}
              className="peer w-full border-0 border-b border-[#ebebeb] p-0 focus:outline-none focus:border-b focus:border-[#ebebeb] focus:ring-0 focus:shadow-none
                    autofill:outline-none
                    "
            />
            <label
              htmlFor="flat"
              className={`absolute text-gray-400 pointer-events-none transition-all duration-200
                    peer-focus:-top-6 peer-focus:text-[13px] ${
                      flat ? '-top-6 left-0 text-[13px]' : ' top-0 left-0 text-sm'
                    }`}
            >
              Кв*
            </label>
            <span
              className="absolute left-0 bottom-0 h-[1px] w-0 bg-purple-600 
                    transition-all duration-500 ease-in-out 
                    origin-left peer-focus-within:w-full z-10"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddressSection;
