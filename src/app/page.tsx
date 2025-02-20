import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import './globals.css';

export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen">
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
