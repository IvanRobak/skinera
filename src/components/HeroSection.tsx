import ContactForm from './ContactForm';
import ModalButton from './ModalButton';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-20 mt-16"
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
          Ласкаво просимо до Skinera!
        </h1>
        <p className="text-lg mb-8">
          Ми допоможемо вам доглядати за собою та виглядати краще щодня.
        </p>
        <ModalButton
          buttonText="Записатись на прийом"
          modalContent={<ContactForm />}
          className="bg-white text-pink-500 hover:bg-gray-100"
        />
      </div>
    </section>
  );
};

export default HeroSection;
