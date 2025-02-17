import { useState } from 'react';
import ReactLogo from '../../assets/icon/icon.svg';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-pink-500 text-white py-4 shadow-md fixed top-0 w-full z-10">
      <div className="max-w-6xl mx-auto px-25 flex justify-between items-center">
        {/* Логотип */}
        <div className="flex items-center space-x-2">
          <img src={ReactLogo} alt="Skinera Logo" className="w-6 h-6" />
          <span className="text-2xl font-bold">Skinera</span>
        </div>

        {/* Меню для великих екранів */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-yellow-300 transition">
            Про нас
          </a>
          <a href="#services" className="hover:text-yellow-300 transition">
            Послуги
          </a>
          <a href="#reviews" className="hover:text-yellow-300 transition">
            Відгуки
          </a>
          <a href="#contact" className="hover:text-yellow-300 transition">
            Контакти
          </a>
        </nav>

        {/* Бургер-меню для мобільних екранів */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Меню для мобільних екранів */}
      {isMenuOpen && <Navigation />}
    </header>
  );
};

export default Header;
