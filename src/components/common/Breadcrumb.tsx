import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const allItems = [{ name: 'Головна', href: '/' }, ...items];

  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {allItems.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-1" aria-hidden="true" />
            )}
            {index === 0 ? (
              <Link
                href={item.href || '/'}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                <HomeIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                {item.name}
              </Link>
            ) : item.href ? (
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ) : (
              <span
                className="text-sm font-medium text-gray-500 cursor-default"
                aria-current="page"
              >
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
