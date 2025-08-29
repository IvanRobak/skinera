'use client';
import React, { useState } from 'react';
import OrderSection from '@/components/sections/OrderSection';
import PermanentClientForm from '@/components/forms/PermanentClientForm';
import TabsSlider from '@/components/slider/TabsSlider';
import NewClientInfoTab from '@/components/tabs/NewClientInfoTab';

const Checkout = () => {
  const [activeTab, setActiveTab] = useState<'new' | 'permanent'>('new');

  return (
    <div className="flex flex-col gap-32 max-w-6xl mx-auto py-32">
      <section className="flex justify-between items-start gap-3">
        {/* <ClientInfoForm /> */}
        <div className="flex-1 pr-9">
          <h1 id="tabs-title" className="text-3xl font-semibold mb-11">
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
        <OrderSection />
      </section>
    </div>
  );
};

export default Checkout;
