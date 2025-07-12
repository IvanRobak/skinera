'use client';

import StructuredData from '@/components/seo/StructuredData';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import LaserPricesSection from '@/components/sections/LaserPricesSection';
import LaserFaqSection from '@/components/sections/LaserFaqSection';
import ReadyForChangeSection from '@/components/sections/ReadyForChangeSection';

import readyForChangeImg from '../../../../public/images/ready-for-change.png'
import HeroSection from '@/components/sections/HeroSection';
import { heroSectionData, whyChooseUsData } from '@/mockData/laser-hair-removal-mock';

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
        <div className="max-w-6xl mx-auto">
          <WhyChooseUsSection data={whyChooseUsData} />
          <LaserPricesSection />
          <LaserFaqSection />
        </div>

        <ReadyForChangeSection imgUrl={readyForChangeImg} />
      </div>
    </>
  );
}
