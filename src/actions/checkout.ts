'use server';

import { NovaPoshtaResponse } from '@/interfaces/NovaPoshtaResponse';
import { favCities } from '@/mockData/nova-postha-fav-cities-mock';

const NOVAPOSHTA_DEFAULTS = {
  modelName: 'AddressGeneral',
  calledMethod: 'searchSettlements',
  limit: '50',
  page: '1',
} as const;

export const getCityByName = async (cityName: string): Promise<NovaPoshtaResponse> => {
  try {
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
    return result;
  } catch (err) {
    console.error(`Error getting city by name - ${err}`);
    throw err;
  }
};

export const fetchFavCities = async (): Promise<NovaPoshtaResponse[]> => {
  try {
    const response: NovaPoshtaResponse[] = await Promise.all(
      favCities.map(async name => {
        const response = await fetch(process.env.NEXT_PUBLIC_NOVAPOSHTA_API_URL || '', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            apiKey: process.env.NEXT_PUBLIC_NOVAPOSHTA_API_KEY,
            modelName: NOVAPOSHTA_DEFAULTS.modelName,
            calledMethod: NOVAPOSHTA_DEFAULTS.calledMethod,
            methodProperties: {
              CityName: name,
              Limit: '1',
            },
          }),
        });

        return response.json();
      })
    );
    return response;
  } catch (err) {
    console.error(`Error getting city by name - ${err}`);
    throw err;
  }
};
