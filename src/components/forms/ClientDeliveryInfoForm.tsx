import React, { useState, useCallback } from 'react';
import DropDown from '../common/DropDown';
import { delivery_options, payment_options } from '@/mockData/nova-postha-mock';
import DeliveryCityDropwDown from '../common/DeliveryCityDropwDown';
import DeliveryDepartmentDropDown from '../common/DeliveryDepartmentDropwDown';
import { Addresses } from '@/interfaces/NovaPoshtaResponse';

const ClientDeliveryInfoForm = () => {
  const [currentCity, setCurrentCity] = useState<Addresses | null>(null);
  const [cityName, setCityName] = useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');

  // Скидаємо відділення при зміні міста
  const handleCityChange = useCallback((city: Addresses | null, name: string) => {
    setCurrentCity(city);
    setCityName(name);
    setSelectedDepartment(''); // Скидаємо вибране відділення
  }, []);

  const isSelectedCity = currentCity && cityName;

  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-6 flex-1">
        <DeliveryCityDropwDown
          city={currentCity}
          cityName={cityName}
          onCityChange={handleCityChange}
        />

        {isSelectedCity && (
          <>
            <DropDown labelName="Варіант доставки" arrOptions={delivery_options} />
            <DeliveryDepartmentDropDown
              city={currentCity}
              selectedDepartment={selectedDepartment}
              onDepartmentChange={setSelectedDepartment}
            />
          </>
        )}
      </div>

      <div className="flex flex-col flex-1">
        {isSelectedCity && <DropDown labelName="Варіант оплати" arrOptions={payment_options} />}
      </div>
    </div>
  );
};

export default ClientDeliveryInfoForm;
