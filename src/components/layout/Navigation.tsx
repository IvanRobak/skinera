import { Link } from 'react-router-dom';

const Navigation = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <nav
      className={`${
        isMobile ? 'flex flex-col bg-pink-600 w-full text-center' : 'hidden md:flex space-x-6'
      }`}
    >
      <Link to="/about" className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}>
        Про нас
      </Link>
      <Link to="/services" className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}>
        Послуги
      </Link>
      <Link to="/reviews" className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}>
        Відгуки
      </Link>
      <Link to="/contact" className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}>
        Контакти
      </Link>
    </nav>
  );
};

export default Navigation;
