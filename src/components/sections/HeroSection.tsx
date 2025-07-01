import ContactForm from '../forms/ContactForm';
import ModalButton from '../common/ModalButton';

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden w-full"
      style={{
        paddingTop: '380px',
        marginTop: '64px',
        height: '761px',
        maxWidth: '1440px',
        backgroundImage:
          'url(/images/woman-visiting-cosmetologist-making-rejuvenation-procedures.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />

      <div className="max-w-6xl mx-auto px-4 relative h-full flex">
        <div className="w-full">
          <h1 className="text-6xl font-extrabold mb-6 text-white animate-fade-in ">
            Ласкаво просимо до Skinera!
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto " style={{ marginLeft: '0' }}>
            Відкрийте для себе професійний догляд за шкірою та красою. Наші експерти допоможуть вам
            виглядати та почуватися неперевершено.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 ">
            <ModalButton
              buttonText="Записатись на прийом"
              modalContent={<ContactForm />}
              className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl"
            />
            <a
              href="/services"
              className="px-8 py-3 rounded-full text-lg font-semibold text-white hover:text-gray-200 transition duration-300 border-2 border-white hover:border-gray-200"
            >
              Наші послуги
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
