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
        className={`py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ${className}`}
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
