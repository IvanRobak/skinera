import './global.css';

import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import HeroSection from '@/components/sections/HeroSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ContactSection from '@/components/sections/ContactsSection';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
}
