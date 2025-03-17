'use client';

import { useState } from 'react';
import Modal from './Modal';

interface ModalButtonProps {
  buttonText: React.ReactNode;
  modalContent: React.ReactNode;
  className?: string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ buttonText, modalContent, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        className={`bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${className}`}
        onClick={openModal}
      >
        {buttonText}
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Modal>
    </>
  );
};

export default ModalButton;
