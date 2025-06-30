import './global.css';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), {
  loading: () => <div className="w-full h-screen bg-gray-100 animate-pulse" />,
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

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
}
