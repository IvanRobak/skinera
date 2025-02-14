import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FloatingButton from './components/FloatingButton';
import FloatingSocialButtons from './components/FloatingSocialButtons';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ReviewsSlider from './components/ReviewsSlider';
import ServicesSection from './components/ServicesSection';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow p-6 bg-gray-300">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ReviewsSlider />
        <ContactSection />
      </main>

      <Footer />
      <FloatingButton />
      <FloatingSocialButtons />
    </div>
  );
};

export default App;
