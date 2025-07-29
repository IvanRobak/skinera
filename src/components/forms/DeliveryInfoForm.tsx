import React from 'react';
import DeliveryAddressSection from '../sections/DeliveryAddressSection';
import PaymentSection from '../sections/PaymentSection';

const DeliveryInfoForm = () => {
  return (
    <div className="flex gap-8">
      <DeliveryAddressSection />
      <PaymentSection />
    </div>
  );
};

export default DeliveryInfoForm;
