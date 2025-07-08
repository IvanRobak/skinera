'use client';

import StructuredData from '@/components/seo/StructuredData';
import LaserPricesSection from '@/components/sections/LaserPricesSection';
import ReadyForChangeSection from '@/components/sections/ReadyForChangeSection';
import Image from 'next/image';

export default function MassagePage() {
  return (
    <>
      <StructuredData
        type="services"
        pageTitle="Масаж - Skinera"
        pageDescription="Масаж - це не просто фізичний вплив, це відчуття здоров'я та гармонії"
        pageUrl="https://skinera.com.ua/services/massage"
      />
      <div>
        <section className="relative mt-16 max-w-[1440px] mx-auto h-[709px]">
          <Image
            src="/images/massage.jpg"
            alt="Масаж у салоні Skinera"
            fill
            className="object-cover"
            priority
          />
          <div className="relative max-w-6xl px-4 pt-44 m-auto text-white">
            <h1 className="font-bold mb-8 text-6xl text-center">Масаж у Львові</h1>
            <p className="font-bold text-2xl text-center">
              Масаж - це не просто фізичний вплив, це відчуття здоровʼя та гармонії
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto">
          <LaserPricesSection />
        </div>

        <ReadyForChangeSection />
      </div>
    </>
  );
}
