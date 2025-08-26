import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';

const DeliveryAddressSection = ({
  cityName,
  setCityName,
  setCityError,
  error,
  cities,
  isLoading,
  onCitySelect,
}: {
  cities: string[];
  getCity: (cityName: string) => void;
  setCityError: React.Dispatch<React.SetStateAction<boolean>>;
  cityName: string;
  setCityName: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
  isLoading: boolean;
  onCitySelect: (city: string) => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleItemSelect = (city: string) => {
    onCitySelect(city);
    setIsDropdownOpen(false);
  };

  const handleInputFocus = () => {
    setCityName('');
    setIsDropdownOpen(true);
  };

  const handleInputBlur = () => {
    setIsDropdownOpen(false);
    if (error || !cities.length) {
      setCityName('');
      setCityError(false);
    }
  };

  return (
    <div className="relative">
      <label
        htmlFor="city"
        className="block text-gray-400 pointer-events-none transition-all duration-200
                    peer-focus:-top-6 peer-focus:text-[13px]
                    -top-6 left-0 text-[13px]"
      >
        Місто*
      </label>
      <input
        type="text"
        id="city"
        placeholder="Введіть ваше місто"
        value={cityName}
        onChange={e => setCityName(e.target.value)}
        onFocus={() => handleInputFocus()}
        onBlur={() => handleInputBlur()}
        className="peer w-full border-0 border-b border-[#ebebeb] px-5 py-3
            focus:outline-none focus:border-b focus:border-[#ebebeb] focus:ring-0 focus:shadow-none
            focus:placeholder-transparent"
      />
      <CiSearch className="absolute top-[35px] left-0 w-4 h-4" />
      {cityName && (
        <AiOutlineClose
          className="absolute top-[33px] right-0 w-4 h-4 cursor-pointer"
          onClick={() => {
            setCityName('');
            setCityError(false);
          }}
        />
      )}

      <ul
        className={`border-x border-b w-full overflow-y-scroll absolute top-full left-0 bg-white shadow-lg
              transition-all duration-300 ease-in-out max-h-[250px] cities-container z-50
              ${isDropdownOpen ? 'block' : 'hidden'}`}
      >
        {isLoading && (
          <li className="p-4 text-sm text-gray-500 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              <span>Пошук міст...</span>
            </div>
          </li>
        )}

        {!isLoading &&
          cities.length > 0 &&
          !error &&
          cities.map((city, index) => (
            <li
              key={index}
              className="p-4 hover:bg-slate-50 break-words whitespace-normal text-sm cursor-pointer"
              onMouseDown={() => handleItemSelect(city)}
            >
              {city}
            </li>
          ))}

        {!isLoading && (error || !cities.length) && cityName && (
          <li className="p-4 text-sm whitespace-pre-line text-gray-500">
            Доставка в це місто наразі неможлива. Будь ласка, перевірте назву і виберіть найближчий
            населений пункт.
          </li>
        )}
      </ul>
    </div>
  );
};

export default DeliveryAddressSection;
