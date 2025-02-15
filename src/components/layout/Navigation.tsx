const Navigation = () => {
  return (
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
  );
};

export default Navigation;
