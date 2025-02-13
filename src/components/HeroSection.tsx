// const HeroSection = () => {
//   return (
//     <section className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-20 mt-16">
//       <div className="max-w-6xl mx-auto text-center px-4">
//         <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
//           Ласкаво просимо до нашого салону!
//         </h1>
//         <p className="text-lg mb-8">
//           Ми допоможемо вам доглядати за собою та виглядати краще щодня.
//         </p>
//         <button className="px-8 py-3 bg-white text-pink-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300">
//           Записатись на прийом
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { useState } from 'react';
import Modal from './Modal';
import ContactForm from './ContactForm';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <button
          onClick={openModal}
          className="px-8 py-3 bg-white text-pink-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300"
        >
          Записатись на прийом
        </button>
      </div>

      {/* Модальне вікно */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm />
      </Modal>
    </section>
  );
};

export default HeroSection;
