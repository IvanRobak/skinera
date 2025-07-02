import ContactForm from '../forms/ContactForm';
import ModalButton from '../common/ModalButton';

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden w-full hero-bg"
      style={{
        paddingTop: '380px',
        marginTop: '64px',
        height: '761px',
        maxWidth: '1440px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />

      <div className="max-w-6xl mx-auto px-4 relative h-full flex">
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-white animate-fade-in">
            Ласкаво просимо до Skinera!
          </h1>
          <p
            className="text-sm md:text-lg lg:text-xl text-white mb-6 md:mb-8 max-w-3xl mx-auto"
            style={{ marginLeft: '0' }}
          >
            Відкрийте для себе професійний догляд за шкірою та красою. Наші експерти допоможуть вам
            виглядати та почуватися неперевершено.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <ModalButton
              buttonText="Записатись на прийом"
              modalContent={<ContactForm />}
              className="bg-purple-600 text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-full text-sm md:text-base lg:text-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl"
            />
            <a
              href="/services"
              className="px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-full text-sm md:text-base lg:text-lg font-semibold text-white hover:text-gray-200 transition duration-300 border-2 border-white hover:border-gray-200"
            >
              Наші послуги
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-bg {
          background-image: url(/images/woman-visiting-cosmetologist-making-rejuvenation-procedures.jpg);
        }

        @media (max-width: 1023px) {
          .hero-bg {
            background-image: url(/images/woman-visiting-cosmetologist-making-rejuvenation-procedures1024.jpg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
