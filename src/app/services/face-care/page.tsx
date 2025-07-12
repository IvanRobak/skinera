import LaserPricesSection from '@/components/sections/LaserPricesSection';
import ReadyForChangeSection from '@/components/sections/ReadyForChangeSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import StructuredData from '@/components/seo/StructuredData';

import spaCompositionImg from '../../../../public/images/spa-composition.png'


import SkinCareSection from '@/components/sections/SkinCareSection';
import { heroSectionData, proceduresTypesData, whyChooseUsData, skinCareData } from '@/mockData/face-care-mock';
import ProceduresTypesSection from '@/components/sections/ProceduresTypesSection';
import HeroSection from '@/components/sections/HeroSection';


export default function FaceCarePage() {

  return (
    <>
      <StructuredData
        type="services"
        pageTitle="Догляд за обличчям - Skinera"
        pageDescription="Професійний догляд за обличчями"
        pageUrl="https://skinera.com.ua/services/face-care"
      />
      <div>
       <HeroSection data={heroSectionData} />
        <div className='max-w-6xl mx-auto py-20'>
          <ProceduresTypesSection data={proceduresTypesData} />
          <WhyChooseUsSection data={whyChooseUsData} />
          <LaserPricesSection />
          <SkinCareSection data={skinCareData}/>
        </div>
          <ReadyForChangeSection imgUrl={spaCompositionImg}/>
        </div>
    </>
  );
}
