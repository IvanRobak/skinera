// components/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = ({ isMobile, onNavigate }: { isMobile?: boolean; onNavigate?: () => void }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { path: '/services', label: 'Послуги' },
    { path: '/products', label: 'Товари' },
    { path: '/contacts', label: 'Контакти' },
  ];

  return (
    <nav className={`${isMobile ? 'flex flex-col gap-4' : 'hidden md:flex items-center gap-6'}`}>
      {navItems.map(({ path, label }) => (
        <Link
          key={path}
          href={path}
          className={`py-2 rounded-full transition-colors ${
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
