'use client';
import React, { useState } from 'react';
import OrderSection from '@/components/sections/OrderSection';
import PermanentClientForm from '@/components/forms/PermanentClientForm';
import TabsSlider from '@/components/slider/TabsSlider';
import NewClientInfoTab from '@/components/tabs/NewClientInfoTab';

const Checkout = () => {
  const [activeTab, setActiveTab] = useState<'new' | 'permanent'>('new');

  return (
    <div className="flex flex-col gap-8 md:gap-16 lg:gap-32 max-w-6xl mx-auto py-20  lg:py-32 px-4 md:px-6 lg:px-0">
      <section className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-3 px-4">
        {/* <ClientInfoForm /> */}
        <div className="flex-1 lg:pr-9 w-full">
          <h1 id="tabs-title" className="text-2xl md:text-3xl font-semibold mb-6 md:mb-11">
            Оформлення замовлення
          </h1>

          <div className="tabs-container flex-1">
            <TabsSlider activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="tabs-panels mt-5">
              {activeTab === 'new' && <NewClientInfoTab />}
              {activeTab === 'permanent' && <PermanentClientForm />}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-auto">
          <OrderSection />
        </div>
      </section>
    </div>
  );
};

export default Checkout;
