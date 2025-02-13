import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FloatingButton from './components/FloatingButton';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ReviewsSection from './components/ReviewsSection';
import ServicesSection from './components/ServicesSection';

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
    </div>
  );
};

export default App;
