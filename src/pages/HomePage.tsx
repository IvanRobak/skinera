import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';
import HeroSection from '../sections/HeroSection';
import ReviewsSection from '../sections/ReviewsSection';
import ServicesSection from '../sections/ServicesSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
