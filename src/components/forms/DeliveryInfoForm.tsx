'use client';

import React, { useEffect, useState } from 'react';
import DeliveryAddressSection from '../sections/DeliveryAddressSection';
import { parseNovaPoshtaCities } from '@/lib/utils';
import { favCities } from '@/mockData/nova-postha-mock';
import { useDebounce } from '@/hooks/useDebounce';
import { NovaPoshtaResponse } from '@/interfaces/NovaPoshtaResponse';

const NOVAPOSHTA_DEFAULTS = {
  modelName: 'AddressGeneral',
  calledMethod: 'searchSettlements',
  limit: '50',
  page: '1',
} as const;

const DeliveryInfoForm = () => {
  const [cityName, setCityName] = useState('');
  const [isError, setIsError] = useState(false);
  const [cities, setCities] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedCityName = useDebounce(cityName, 500);

  const handleCitySearch = async (cityName: string) => {
    try {
      if (cityName) {
        setIsLoading(true);
        const body = JSON.stringify({
          apiKey: process.env.NEXT_PUBLIC_NOVAPOSHTA_API_KEY,
          modelName: NOVAPOSHTA_DEFAULTS.modelName,
          calledMethod: NOVAPOSHTA_DEFAULTS.calledMethod,
          methodProperties: {
            CityName: cityName,
            Limit: NOVAPOSHTA_DEFAULTS.limit,
            Page: NOVAPOSHTA_DEFAULTS.page,
          },
        });

        const response = await fetch(process.env.NEXT_PUBLIC_NOVAPOSHTA_API_URL || '', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body,
        });

        const result: NovaPoshtaResponse = await response.json();

        if (result?.success != true) {
          setIsError(true);
          return;
        }

        const parsedCities = parseNovaPoshtaCities(result.data[0]);
        setCities(parsedCities);
        setIsError(false);
      }
    } catch (err) {
      console.error(err);
      setIsError(true);
      setCities([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedCityName) {
      handleCitySearch(debouncedCityName);
    } else if (debouncedCityName === '') {
      setCities([]);
      setIsError(false);
    }
  }, [debouncedCityName]);

  useEffect(() => {
    async function fetchPopularCities() {
      try {
        setIsLoading(true);
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

        const addresses = result.map(res => parseNovaPoshtaCities(res.data[0])[0]);
        setCities(addresses);
      } catch (err) {
        console.error(err);
        setCities([]);
      } finally {
        setIsLoading(false);
      }
    }

    if (cityName === '') {
      setIsError(false);
      fetchPopularCities();
    }
  }, [cityName]);

  const handleCitySelect = (city: string) => {
    setCityName(city);
    setIsError(false);
  };

  return (
    <DeliveryAddressSection
      cities={cities}
      getCity={() => {}}
      cityName={cityName}
      setCityName={setCityName}
      error={isError}
      setCityError={setIsError}
      isLoading={isLoading}
      onCitySelect={handleCitySelect}
    />
  );
};

export default DeliveryInfoForm;
