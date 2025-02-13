import ContactForm from './ContactForm';
import ModalButton from './ModalButton';

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Контакти</h2>
        <p className="text-lg text-gray-700 mb-4">Ми знаходимось за адресою:</p>
        <p className="text-lg font-medium text-gray-900 mb-4">м. Львів, пр. Червоної калини, 36в</p>
        <p className="text-lg text-gray-700 mb-4">
          Телефон для запису:{' '}
          <a href="tel:+380965180956" className="text-pink-500 hover:underline">
            +38 096 518 0956
          </a>
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Електронна пошта:{' '}
          <a href="mailto:info@skinera.com" className="text-pink-500 hover:underline">
            info@skinera.com
          </a>
        </p>
        {/* Використання ModalButton */}
        <ModalButton
          buttonText="Записатись на прийом"
          modalContent={<ContactForm />}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600"
        />
      </div>
    </section>
  );
};

export default ContactSection;
