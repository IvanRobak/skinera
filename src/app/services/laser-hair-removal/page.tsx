'use client';

import StructuredData from '@/components/seo/StructuredData';
import LaserHairRemovalHero from '@/components/sections/LaserHairRemovalHero';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import LaserPricesSection from '@/components/sections/LaserPricesSection';
import LaserFaqSection from '@/components/sections/LaserFaqSection';
import ReadyForChangeSection from '@/components/sections/ReadyForChangeSection';

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
        <LaserHairRemovalHero />

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
