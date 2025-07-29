'use client';

import StructuredData from '@/components/seo/StructuredData';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import PricesSection from '@/components/sections/PricesSection';
import LaserFaqSection from '@/components/sections/LaserFaqSection';
import ReadyForChangeSection from '@/components/sections/ReadyForChangeSection';

import readyForChangeImg from '../../../../public/images/ready-for-change.png';
import HeroSection from '@/components/sections/HeroSection';
import { heroSectionData, pricesData, whyChooseUsData } from '@/mockData/laser-hair-removal-mock';

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
        <HeroSection data={heroSectionData} />
        <div className="flex flex-col gap-32 py-20 max-w-6xl mx-auto">
          <WhyChooseUsSection data={whyChooseUsData} />
          <PricesSection data={pricesData} />
          <LaserFaqSection />
        </div>
        <ReadyForChangeSection imgUrl={readyForChangeImg} />
      </div>
    </>
  );
}
