// components/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = ({ isMobile, onNavigate }: { isMobile?: boolean; onNavigate?: () => void }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { path: '/products', label: 'Товари' },
    { path: '/contacts', label: 'Контакти' },
  ];

  return (
    <nav
      className={`${
        isMobile ? 'flex flex-col space-y-1 py-3' : 'hidden md:flex items-center space-x-1'
      }`}
    >
      {navItems.map(({ path, label }) => (
        <Link
          key={path}
          href={path}
          className={`px-4 py-2 rounded-full transition-colors ${
            isActive(path)
              ? 'text-brand-600 bg-brand-50 font-medium'
              : 'text-gray-700 hover:text-brand-600 hover:bg-gray-50'
          }`}
          onClick={() => isMobile && onNavigate?.()}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
