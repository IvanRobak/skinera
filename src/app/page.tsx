'use client';

import AdvantagesSection from '@/components/sections/AdvantagesSection';
import ServiceGallerySection from '@/components/sections/ServiceGallerySection';
import './global.css';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, Suspense } from 'react';
import { toast } from 'react-toastify';

const HeroSectionPrimary = dynamic(() => import('@/components/sections/HeroSectionPrimary'), {
  loading: () => <div className="w-full h-screen bg-gray-100 animate-pulse" />,
});

const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {
  loading: () => <div className="w-full h-[600px] bg-gray-100 animate-pulse" />,
});

const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), {
  loading: () => <div className="w-full h-[800px] bg-gray-100 animate-pulse" />,
});

const ReviewsSection = dynamic(() => import('@/components/sections/ReviewsSection'), {
  loading: () => <div className="w-full h-[600px] bg-gray-100 animate-pulse" />,
});

const ContactSection = dynamic(() => import('@/components/sections/ContactsSection'), {
  loading: () => <div className="w-full h-[600px] bg-gray-100 animate-pulse" />,
});

// Gallery data for main page showcasing all services
const mainPageGallery = [
  {
    src: '/images/cosmetologist-doing-face-treatment-applying-face-mask.jpg',
    alt: 'Професійний догляд за обличчям',
    title: 'Догляд за обличчям',
    description: 'Професійні процедури для здорової та сяючої шкіри',
  },
  {
    src: '/images/laser-epilation-hair-removal-therapy.jpg',
    alt: 'Лазерна епіляція',
    title: 'Лазерна епіляція',
    description: 'Безболісне та ефективне видалення небажаного волосся',
  },
  {
    src: '/images/woman-getting-back-massage-from-masseur.jpg',
    alt: 'Професійний масаж',
    title: 'Масажні процедури',
    description: 'Розслаблення та оздоровлення всього організму',
  },
  {
    src: '/images/woman-visiting-cosmetologist-making-rejuvenation-procedures.jpg',
    alt: 'Омолоджуючі процедури',
    title: 'Омолодження шкіри',
    description: 'Сучасні методи відновлення молодості шкіри',
  },
  {
    src: '/images/spa-composition.png',
    alt: 'SPA атмосфера центру',
    title: 'SPA атмосфера',
    description: 'Розслаблююча обстановка та професійний сервіс',
  },
  {
    src: '/images/ready-for-change.png',
    alt: 'Результати наших процедур',
    title: 'Видимі результати',
    description: "Досягнення ваших цілей краси та здоров'я",
  },
];

function LoginSuccessToast() {
  const searchParams = useSearchParams();
  const isLoginSuccess = searchParams.get('login') === 'success';
  const shownRef = useRef(false);

  useEffect(() => {
    if (isLoginSuccess && !shownRef.current) {
      toast.success('Ви успішно увійшли!', {
        position: 'top-right',
        autoClose: 2500,
      });
      shownRef.current = true;
    }
  }, [isLoginSuccess]);

  return null;
}

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <Suspense fallback={null}>
        <LoginSuccessToast />
      </Suspense>
      <HeroSectionPrimary />
      <AboutSection />
      <ServicesSection />
      <AdvantagesSection />
      <ReviewsSection />
      {/* Photo Gallery Section */}
      <ServiceGallerySection
        title="Наші послуги в дії"
        subtitle="Переглянуте фото наших процедур та результатів роботи. Кожна послуга виконується досвідченими спеціалістами з використанням сучасного обладнання в комфортній атмосфері."
        images={mainPageGallery}
        columns={3}
        showTitles={true}
        className="bg-gray-50"
      />
      <ContactSection />
    </div>
  );
}
