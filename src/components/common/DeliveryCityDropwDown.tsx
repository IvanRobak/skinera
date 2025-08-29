'use client';

import React, { useEffect, useState, useCallback } from 'react';
import DeliveryAddressSection from '../sections/DeliveryAddressSection';
import { parseNovaPoshtaCities } from '@/lib/utils';
import { favCities } from '@/mockData/nova-postha-mock';
import { useDebounce } from '@/hooks/useDebounce';
import {
  Addresses,
  NovaPoshtaAddressesData,
  NovaPoshtaResponse,
} from '@/interfaces/NovaPoshtaResponse';

const NOVAPOSHTA_CITY_DEFAULTS = {
  modelName: 'AddressGeneral',
  calledMethod: 'searchSettlements',
  limit: '50',
  page: '1',
} as const;

interface DeliveryCityDropwDownProps {
  city: Addresses | null;
  cityName: string;
  onCityChange: (city: Addresses | null, name: string) => void;
}

const DeliveryCityDropwDown = ({ cityName, onCityChange }: DeliveryCityDropwDownProps) => {
  const [isError, setIsError] = useState(false);
  const [cities, setCities] = useState<Addresses[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [localCityName, setLocalCityName] = useState(cityName);

  const debouncedCityName = useDebounce(localCityName, 500);

  const handleCitySearch = useCallback(async (cityName: string) => {
    if (!cityName.trim()) {
      setCities([]);
      return;
    }

    try {
      setIsLoading(true);
      setIsError(false);

      const body = JSON.stringify({
        apiKey: process.env.NEXT_PUBLIC_NOVAPOSHTA_API_KEY,
        modelName: NOVAPOSHTA_CITY_DEFAULTS.modelName,
        calledMethod: NOVAPOSHTA_CITY_DEFAULTS.calledMethod,
        methodProperties: {
          CityName: cityName,
          Limit: NOVAPOSHTA_CITY_DEFAULTS.limit,
          Page: NOVAPOSHTA_CITY_DEFAULTS.page,
        },
      });

      const response = await fetch(process.env.NEXT_PUBLIC_NOVAPOSHTA_API_URL || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });

      const result: NovaPoshtaResponse<NovaPoshtaAddressesData> = await response.json();

      if (result?.success !== true) {
        setIsError(true);
        setCities([]);
        return;
      }

      const parsedCities = parseNovaPoshtaCities(result.data[0]);
      setCities(parsedCities);
      setIsError(false);
    } catch (err) {
      console.error('Error searching cities:', err);
      setIsError(true);
      setCities([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchPopularCities = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const result = await Promise.all(
        favCities.map(async name => {
          const res = await fetch(process.env.NEXT_PUBLIC_NOVAPOSHTA_API_URL!, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              apiKey: process.env.NEXT_PUBLIC_NOVAPOSHTA_API_KEY,
              modelName: 'AddressGeneral',
              calledMethod: 'searchSettlements',
              methodProperties: { CityName: name, Limit: 10 },
            }),
          });
          return res.json();
        })
      );

      const addresses = result
        .filter(res => res.success)
        .map(res => parseNovaPoshtaCities(res.data[0])[0])
        .filter(Boolean);

      setCities(addresses);
    } catch (err) {
      console.error('Error fetching popular cities:', err);
      setCities([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Пошук при зміні debounced значення
  useEffect(() => {
    if (debouncedCityName && debouncedCityName.trim()) {
      handleCitySearch(debouncedCityName);
    } else if (debouncedCityName === '') {
      setCities([]);
      setIsError(false);
    }
  }, [debouncedCityName, handleCitySearch]);

  // Завантаження популярних міст при порожньому пошуку
  useEffect(() => {
    if (localCityName === '') {
      fetchPopularCities();
    }
  }, [localCityName, fetchPopularCities]);

  // Синхронізація з зовнішнім станом
  useEffect(() => {
    setLocalCityName(cityName);
  }, [cityName]);

  const handleCitySelect = useCallback(
    (city: Addresses) => {
      onCityChange(city, city.Present);
      setLocalCityName(city.Present);
      setCities([]);
      setIsError(false);
    },
    [onCityChange]
  );

  const handleCityNameChange = useCallback(
    (name: string) => {
      setLocalCityName(name);
      if (name === '') {
        onCityChange(null, '');
        setCities([]);
        setIsError(false);
      }
    },
    [onCityChange]
  );

  const handleClearCity = useCallback(() => {
    setLocalCityName('');
    onCityChange(null, '');
    setCities([]);
    setIsError(false);
  }, [onCityChange]);

  return (
    <DeliveryAddressSection
      cities={cities}
      cityName={localCityName}
      setCityName={handleCityNameChange}
      error={isError}
      setCityError={setIsError}
      isLoading={isLoading}
      onCitySelect={handleCitySelect}
      onClear={handleClearCity}
    />
  );
};

export default DeliveryCityDropwDown;
