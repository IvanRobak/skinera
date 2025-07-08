'use client';

import StructuredData from '@/components/seo/StructuredData';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import LaserPricesSection from '@/components/sections/LaserPricesSection';
import LaserFaqSection from '@/components/sections/LaserFaqSection';
import ReadyForChangeSection from '@/components/sections/ReadyForChangeSection';
import Image from 'next/image';

export default function LaserHairRemovalPage() {
  return (
    <>
      <StructuredData
        type="services"
        pageTitle="Лазерна епіляція - Skinera"
        pageDescription="Безболісне та ефективне видалення небажаного волосся"
        pageUrl="https://skinera.com.ua/services/laser-hair-removal"
      />
      <div>
        <section className="relative mt-16 max-w-[1440px] mx-auto h-[709px]">
          <Image
            src="/images/laser-hair-remove.png"
            alt="Лазерна епіляція у салоні Skinera"
            fill
            className="object-cover"
            priority
          />
          <div className="relative max-w-6xl px-4 pt-44 m-auto text-white">
            <h1 className="font-bold mb-8 text-6xl text-center">Лазерна епіляція у Львові</h1>
            <p className="font-bold text-2xl text-center">
              Безболісне та ефективне видалення небажаного волосся. Сучасне обладнання, досвідчені
              спеціалісти та індивідуальний підхід до кожного клієнта в салоні Skinera.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto">
          <WhyChooseUsSection />
          <LaserPricesSection />
          <LaserFaqSection />
        </div>

        <ReadyForChangeSection />
      </div>
    </>
  );
}
