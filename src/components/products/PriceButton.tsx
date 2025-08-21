'use client';

import { memo } from 'react';

interface PriceButtonProps {
  onClick: () => void;
  currentMin: number;
  currentMax: number;
  defaultMin: number;
  defaultMax: number;
}

const PriceButton = memo(
  ({ onClick, currentMin, currentMax, defaultMin, defaultMax }: PriceButtonProps) => {
    const hasActiveFilter = currentMin > defaultMin || currentMax < defaultMax;
    const isDefaultRange = currentMin === defaultMin && currentMax === defaultMax;

    return (
      <button
        onClick={onClick}
        className={`
          md:hidden w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-sm font-medium
          transition-all duration-300 border-2
          ${
            hasActiveFilter
              ? 'bg-white text-gray-700 border-gray-200 hover:border-pink-300 hover:bg-pink-50'
              : ''
          }
        `}
      >
        <span className="mr-2">💰</span>
        {isDefaultRange ? 'Діапазон цін' : 'Ціна змінена'}
        {hasActiveFilter && (
          <span className="ml-2 bg-pink-200 text-pink-800 text-xs px-2 py-1 rounded-full font-semibold">
            {currentMin !== defaultMin || currentMax !== defaultMax ? '1' : '0'}
          </span>
        )}
      </button>
    );
  }
);

PriceButton.displayName = 'PriceButton';

export default PriceButton;
