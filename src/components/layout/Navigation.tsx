const Navigation = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <nav
      className={`${
        isMobile ? 'flex flex-col bg-pink-600 w-full text-center' : 'hidden md:flex space-x-6'
      }`}
    >
      <a href="#about" className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}>
        Про нас
      </a>
      <a href="#services" className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}>
        Послуги
      </a>
      <a href="#reviews" className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}>
        Відгуки
      </a>
      <a href="#contact" className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}>
        Контакти
      </a>
    </nav>
  );
};

export default Navigation;
