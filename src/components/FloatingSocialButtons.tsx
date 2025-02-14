import { FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const FloatingSocialButtons = () => {
  return (
    <div className="fixed bottom-30 right-4 flex flex-col space-y-3 z-50">
      <a
        href="tel:+380965180956"
        className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300"
        aria-label="Phone"
      >
        <FaPhoneAlt className="w-5 h-5" />
      </a>
      <a
        href="https://www.instagram.com/skinera.lviv/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300"
        aria-label="Instagram"
      >
        <FaInstagram className="w-5 h-5" />
      </a>
      <a
        href="https://www.facebook.com/EpiLadies/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        aria-label="Facebook"
      >
        <FaFacebook className="w-5 h-5" />
      </a>
    </div>
  );
};

export default FloatingSocialButtons;
