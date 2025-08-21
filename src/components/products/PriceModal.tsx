'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import PriceSlider from './PriceSlider';

interface PriceModalProps {
  isOpen: boolean;
  onClose: () => void;
  minPrice: number;
  maxPrice: number;
  currentMin: number;
  currentMax: number;
  onPriceChange: (min: number, max: number) => void;
}

const PriceModal = memo(
  ({
    isOpen,
    onClose,
    minPrice,
    maxPrice,
    currentMin,
    currentMax,
    onPriceChange,
  }: PriceModalProps) => {
    const [localMinPrice, setLocalMinPrice] = useState(currentMin);
    const [localMaxPrice, setLocalMaxPrice] = useState(currentMax);

    // Синхронізуємо локальний стан з пропсами
    useEffect(() => {
      setLocalMinPrice(currentMin);
      setLocalMaxPrice(currentMax);
    }, [currentMin, currentMax]);

    const handlePriceChange = useCallback((min: number, max: number) => {
      console.log('PriceModal: handlePriceChange called', { min, max });
      setLocalMinPrice(min);
      setLocalMaxPrice(max);
    }, []);

    const handleApply = useCallback(() => {
      console.log('PriceModal: Applying price changes', { localMinPrice, localMaxPrice });
      onPriceChange(localMinPrice, localMaxPrice);
      onClose();
    }, [localMinPrice, localMaxPrice, onPriceChange, onClose]);

    const handleReset = useCallback(() => {
      setLocalMinPrice(minPrice);
      setLocalMaxPrice(maxPrice);
    }, [minPrice, maxPrice]);

    const hasChanges = localMinPrice !== currentMin || localMaxPrice !== currentMax;

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="flex min-h-full items-center justify-center p-4 text-center ">
          <div className="relative transform overflow-hidden rounded-2xl sm:rounded-2xl bg-white text-left shadow-xl transition-all my-8 w-full max-w-lg">
            {/* Header */}
            <div className="px-6 py-4 sm:px-6">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Active filters indicator */}
              {hasChanges && (
                <div className="mt-3 flex items-center text-sm">
                  <svg
                    className="w-4 h-4 mr-2 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Активний фільтр ціни
                </div>
              )}
            </div>

            {/* Content */}
            <div className="px-6 py-4 max-h-96 overflow-y-auto">
              <div className="space-y-4">
                <PriceSlider
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  currentMin={localMinPrice}
                  currentMax={localMaxPrice}
                  onPriceChange={handlePriceChange}
                  hideButtons={true}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={handleApply}
                className="w-full inline-flex justify-center rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:from-pink-600 hover:to-pink-700 transition-all duration-300 sm:ml-3 sm:w-auto"
              >
                Застосувати
              </button>
              <button
                onClick={handleReset}
                className="mt-3 w-full inline-flex justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all duration-300 sm:mt-0 sm:w-auto"
              >
                Скинути
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

PriceModal.displayName = 'PriceModal';

export default PriceModal;
