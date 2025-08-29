'use client';
import { useState } from 'react';

import ClientInfoForm from '../forms/ClientInfoForm';
import ClientDeliveryInfoForm from '../forms/ClientDeliveryInfoForm';

const NewClientInfoTab = () => {
  const [firstCurrentStep, setFirstCurrentStep] = useState<boolean>(true);

  return (
    <div id="new-customer" aria-labelledby="tab-1">
      <div className="flex mb-12">
        <h3
          className={`font-semibold text-xl mr-11 cursor-pointer transition-colors duration-200 ${
            firstCurrentStep ? 'text-brand-600' : 'text-[#a6a2a2]'
          }`}
          onClick={() => setFirstCurrentStep(true)}
        >
          1 Особисті дані
        </h3>
        <h3
          className={`font-semibold text-xl transition-colors duration-200 ${
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
