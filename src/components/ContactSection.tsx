import { useState } from 'react';
import ContactForm from './ContactForm';
import Modal from './Modal';

// ContactSection.tsx
const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
        {/* Кнопка до форми */}
        <button
          className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-600 shadow-lg transform hover:scale-105 transition-transform duration-300"
          onClick={openModal}
        >
          Записатись на прийом
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm />
      </Modal>
    </section>
  );
};

export default ContactSection;
