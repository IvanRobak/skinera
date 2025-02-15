import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import FloatingButton from './components/common/FloatingButton';
import FloatingSocialButtons from './components/widgets/FloatingSocialButtons';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import ReviewsSection from './components/sections/ReviewsSection';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow p-6 bg-gray-300">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingButton />
      <FloatingSocialButtons />
    </div>
  );
};

export default App;
