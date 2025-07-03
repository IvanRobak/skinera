'use client';

import AdvantagesSection from '@/components/sections/AdvantagesSection';
import './global.css';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, Suspense } from 'react';
import { toast } from 'react-toastify';

const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), {
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
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
}
