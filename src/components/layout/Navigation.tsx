import Link from 'next/link';

const Navigation = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <nav
      className={`${
        isMobile ? 'flex flex-col bg-pink-600 w-full text-center' : 'hidden md:flex space-x-6'
      }`}
    >
      <Link href="/about" className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}>
        Про нас
      </Link>
      <Link
        href="/products"
        className="{`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}"
      >
        Товари
      </Link>
      <Link
        href="/services"
        className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}
      >
        Послуги
      </Link>
      <Link
        href="/reviews"
        className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}
      >
        Відгуки
      </Link>
      <Link
        href="/contact"
        className={`hover:text-yellow-300 transition ${isMobile ? 'py-2' : ''}`}
      >
        Контакти
      </Link>
    </nav>
  );
};

export default Navigation;
