'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface ServicesDropdownProps {
  isMobile?: boolean;
  onNavigate?: () => void;
}

const ServicesDropdown = ({ isMobile, onNavigate }: ServicesDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const services = [
    {
      path: '/services/face-care',
      label: 'Догляд за обличчям',
      description: 'Професійний догляд за шкірою обличчя',
    },
    {
      path: '/services/laser-hair-removal',
      label: 'Лазерна епіляція',
      description: 'Безболісне видалення небажаного волосся',
    },
    {
      path: '/services/massage',
      label: 'Масаж',
      description: 'Розслаблюючі та оздоровчі процедури',
    },
  ];

  // Перевіряємо, чи поточна сторінка є однією з послуг
  const isServicesActive = services.some(service => pathname === service.path);

  // Закриваємо меню при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleServiceClick = () => {
    setIsOpen(false);
    if (isMobile && onNavigate) {
      onNavigate();
    }
  };

  if (isMobile) {
    return (
      <div className="flex flex-col ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`py-2 px-4 rounded-full transition-colors flex items-center justify-between ${
            isServicesActive
              ? 'text-brand-600 bg-brand-50 font-medium'
              : 'text-gray-700 hover:text-brand-600 hover:bg-gray-50'
          }`}
        >
          <span>Послуги</span>
          <ChevronDownIcon
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="ml-4 mt-2 space-y-2">
            {services.map(service => (
              <Link
                key={service.path}
                href={service.path}
                className={`block py-2 px-4 rounded-lg transition-colors text-sm ${
                  pathname === service.path
                    ? 'text-brand-600 bg-brand-50 font-medium'
                    : 'text-gray-600 hover:text-brand-600 hover:bg-gray-50'
                }`}
                onClick={handleServiceClick}
              >
                <div className="font-medium">{service.label}</div>
                <div className="text-xs text-gray-500 mt-1">{service.description}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`py-2 px-4 rounded-full transition-colors flex items-center gap-1 ${
          isServicesActive
            ? 'text-brand-600 bg-brand-50 font-medium'
            : 'text-gray-700 hover:text-brand-600 hover:bg-gray-50'
        }`}
      >
        <span>Послуги</span>
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
          {services.map(service => (
            <Link
              key={service.path}
              href={service.path}
              className={`block px-4 py-3 hover:bg-gray-50 transition-colors ${
                pathname === service.path ? 'bg-brand-50' : ''
              }`}
              onClick={handleServiceClick}
            >
              <div
                className={`font-medium ${
                  pathname === service.path ? 'text-brand-600' : 'text-gray-900'
                }`}
              >
                {service.label}
              </div>
              <div className="text-sm text-gray-500 mt-1">{service.description}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
