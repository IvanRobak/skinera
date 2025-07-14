'use client';

import StructuredData from '@/components/seo/StructuredData';
import ReadyForChangeSection from '@/components/sections/ReadyForChangeSection';

import MassagePricesSection from '@/components/sections/MassagePricesSection';
import readyForChange from '../../../../public/images/ready-for-change.png'
import HeroSection from '@/components/sections/HeroSection';
import { heroSectionData, proceduresTypesData } from '@/mockData/massage-mock';
import ProceduresTypesSection from '@/components/sections/ProceduresTypesSection';

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
        <HeroSection data={heroSectionData} />
        <div className="flex flex-col gap-32 py-20 max-w-6xl mx-auto">
          <ProceduresTypesSection data={proceduresTypesData} />
          <MassagePricesSection />    {/* Need to replace */}
        </div>
        <ReadyForChangeSection imgUrl={readyForChange} />
      </div>
    </>
  );
}
