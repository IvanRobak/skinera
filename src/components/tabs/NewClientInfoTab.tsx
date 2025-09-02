'use client';
import { useState } from 'react';

import ClientInfoForm from '../forms/ClientInfoForm';
import ClientDeliveryInfoForm from '../forms/ClientDeliveryInfoForm';

const NewClientInfoTab = () => {
  const [firstCurrentStep, setFirstCurrentStep] = useState<boolean>(true);

  return (
    <div id="new-customer" aria-labelledby="tab-1">
      <div className="flex flex-col sm:flex-row mb-8 md:mb-12 gap-2 sm:gap-0">
        <h3
          className={`font-semibold text-lg md:text-xl sm:mr-11 cursor-pointer transition-colors duration-200 ${
            firstCurrentStep ? 'text-brand-600' : 'text-[#a6a2a2]'
          }`}
          onClick={() => setFirstCurrentStep(true)}
        >
          1 Особисті дані
        </h3>
        <h3
          className={`font-semibold text-lg md:text-xl transition-colors duration-200 ${
            !firstCurrentStep ? 'text-brand-600' : 'text-[#a6a2a2]'
          }`}
        >
          2 Інформація про доставку
        </h3>
      </div>
      {firstCurrentStep ? (
        <ClientInfoForm setFirstCurrentStep={setFirstCurrentStep} />
      ) : (
        <ClientDeliveryInfoForm />
      )}
    </div>
  );
};

export default NewClientInfoTab;
