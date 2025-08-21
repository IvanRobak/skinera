'use client';

import { useState, useEffect, useCallback, memo } from 'react';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

const CategoryModal = memo(
  ({ isOpen, onClose, categories, selectedCategories, onCategoryChange }: CategoryModalProps) => {
    const [localSelectedCategories, setLocalSelectedCategories] =
      useState<string[]>(selectedCategories);

    // Синхронізуємо локальний стан з пропсами
    useEffect(() => {
      setLocalSelectedCategories(selectedCategories);
    }, [selectedCategories]);

    const handleCategoryClick = useCallback(
      (category: string) => {
        if (localSelectedCategories.includes(category)) {
          setLocalSelectedCategories(prev => prev.filter(c => c !== category));
        } else {
          setLocalSelectedCategories(prev => [...prev, category]);
        }
      },
      [localSelectedCategories]
    );

    const handleApply = useCallback(() => {
      onCategoryChange(localSelectedCategories);
      onClose();
    }, [localSelectedCategories, onCategoryChange, onClose]);

    const handleClearAll = useCallback(() => {
      setLocalSelectedCategories([]);
    }, []);

    const handleReset = useCallback(() => {
      setLocalSelectedCategories(selectedCategories);
    }, [selectedCategories]);

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-t-2xl sm:rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            {/* Header */}
            <div className=" px-6 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Категорії товарів</h3>
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
              {localSelectedCategories.length > 0 && (
                <div className="mt-3 flex items-center text-sm ">
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
                  Активних фільтрів: {localSelectedCategories.length}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="px-6 py-4 max-h-96 overflow-y-auto">
              {/* Clear all button */}
              <div className="mb-4">
                <button
                  onClick={handleClearAll}
                  className={`
                    w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-sm font-medium
                    transition-all duration-300 border-2
                    ${
                      localSelectedCategories.length === 0
                        ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-500 shadow-lg'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-pink-300 hover:bg-pink-50'
                    }
                  `}
                >
                  <span className="mr-2">🏷️</span>
                  {localSelectedCategories.length === 0 ? 'Усі категорії' : 'Очистити всі'}
                  {localSelectedCategories.length > 0 && (
                    <span className="ml-2 bg-pink-200 text-pink-800 text-xs px-2 py-1 rounded-full font-semibold">
                      {localSelectedCategories.length}
                    </span>
                  )}
                </button>
              </div>

              {/* Categories grid */}
              <div className="grid grid-cols-2 gap-3">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`
                      p-3 rounded-xl text-sm font-medium transition-all duration-300 border-2
                      ${
                        localSelectedCategories.includes(category)
                          ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-500 shadow-lg scale-105'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-pink-300 hover:bg-pink-50 hover:scale-105'
                      }
                    `}
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <span className="text-lg">{getCategoryIcon(category)}</span>
                      <span className="text-xs leading-tight">{category}</span>
                      {localSelectedCategories.includes(category) && (
                        <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-pink-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                  </button>
                ))}
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

CategoryModal.displayName = 'CategoryModal';

// Функція для отримання іконки категорії
const getCategoryIcon = (category: string): string => {
  const iconMap: { [key: string]: string } = {
    'Догляд за обличчям': '🧴',
    'Догляд за тілом': '🧴',
    Макіяж: '💄',
    Парфуми: '🌸',
    'Догляд за волоссям': '💇‍♀️',
    'Сонцезахисні засоби': '☀️',
    'Дитяча косметика': '🍼',
    'Чоловіча косметика': '👨',
    Інструменти: '🔧',
    Аксесуари: '✨',
  };

  return iconMap[category] || '📦';
};

export default CategoryModal;
