'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface PriceSliderProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
  currentMin?: number;
  currentMax?: number;
}

const PriceSlider = ({
  minPrice,
  maxPrice,
  onPriceChange,
  currentMin = minPrice,
  currentMax = maxPrice,
}: PriceSliderProps) => {
  const [minValue, setMinValue] = useState(currentMin);
  const [maxValue, setMaxValue] = useState(currentMax);
  const [appliedMin, setAppliedMin] = useState(currentMin);
  const [appliedMax, setAppliedMax] = useState(currentMax);

  useEffect(() => {
    setMinValue(currentMin);
    setMaxValue(currentMax);
    setAppliedMin(currentMin);
    setAppliedMax(currentMax);
  }, [currentMin, currentMax]);

  // Cleanup event listeners on unmount
  useEffect(() => {
    return () => {
      // Cleanup any remaining event listeners
      document.removeEventListener('mousemove', () => {});
      document.removeEventListener('mouseup', () => {});
    };
  }, []);

  // Надійний обробник перетягування для мінімального повзунка
  const createMinDragHandler = useCallback(() => {
    let isDragging = false;
    let startX = 0;
    let startValue = 0;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isDragging || !sliderContainerRef.current) return;

      try {
        const deltaX = moveEvent.clientX - startX;
        const containerWidth = sliderContainerRef.current.getBoundingClientRect().width;
        if (containerWidth === 0) return;

        const deltaPercent = deltaX / containerWidth;
        const deltaValue = (maxPrice - minPrice) * deltaPercent;
        const newValue = Math.max(minPrice, Math.min(startValue + deltaValue, maxValue - 1));
        setMinValue(newValue);
      } catch (error) {
        console.warn('Error in min slider drag:', error);
      }
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      setActiveSlider(null);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    return (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      isDragging = true;
      startX = e.clientX;
      startValue = minValue;
      setActiveSlider('min');

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };
  }, [minPrice, maxPrice, minValue, maxValue]);

  // Надійний обробник перетягування для максимального повзунка
  const createMaxDragHandler = useCallback(() => {
    let isDragging = false;
    let startX = 0;
    let startValue = 0;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isDragging || !sliderContainerRef.current) return;

      try {
        const deltaX = moveEvent.clientX - startX;
        const containerWidth = sliderContainerRef.current.getBoundingClientRect().width;
        if (containerWidth === 0) return;

        const deltaPercent = deltaX / containerWidth;
        const deltaValue = (maxPrice - minPrice) * deltaPercent;
        const newValue = Math.min(maxPrice, Math.max(startValue + deltaValue, minValue + 1));
        setMaxValue(newValue);
      } catch (error) {
        console.warn('Error in max slider drag:', error);
      }
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      setActiveSlider(null);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    return (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      isDragging = true;
      startX = e.clientX;
      startValue = maxValue;
      setActiveSlider('max');

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };
  }, [minPrice, maxPrice, minValue, maxValue]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  const handleSliderMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleSliderMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  // Обробники для активного стану повзунків
  const handleMinMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setActiveSlider('min');
  };

  const handleMinMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setActiveSlider(null);
  };

  const handleMaxMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setActiveSlider('max');
  };

  const handleMaxMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setActiveSlider(null);
  };

  const handleMinFocus = () => {
    setActiveSlider('min');
  };

  const handleMinBlur = () => {
    setActiveSlider(null);
  };

  const handleMaxFocus = () => {
    setActiveSlider('max');
  };

  const handleMaxBlur = () => {
    setActiveSlider(null);
  };

  // Обробник кліку по треку для визначення найближчого повзунка
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickPercent = clickX / rect.width;
    const clickValue = minPrice + (maxPrice - minPrice) * clickPercent;

    // Визначаємо, який повзунок ближче до кліку
    const distanceToMin = Math.abs(clickValue - minValue);
    const distanceToMax = Math.abs(clickValue - maxValue);

    if (distanceToMin < distanceToMax) {
      setActiveSlider('min');
      const newMinValue = Math.min(clickValue, maxValue - 1);
      setMinValue(newMinValue);
    } else {
      setActiveSlider('max');
      const newMaxValue = Math.max(clickValue, minValue + 1);
      setMaxValue(newMaxValue);
    }

    // Скидаємо активний стан через невеликий час
    setTimeout(() => setActiveSlider(null), 100);
  };

  const applyFilter = () => {
    setAppliedMin(minValue);
    setAppliedMax(maxValue);
    onPriceChange(minValue, maxValue);
  };

  const resetFilter = () => {
    setMinValue(minPrice);
    setMaxValue(maxPrice);
    setAppliedMin(minPrice);
    setAppliedMax(maxPrice);
    onPriceChange(minPrice, maxPrice);
  };

  const hasChanges = minValue !== appliedMin || maxValue !== appliedMax;

  const getLeftPosition = () => ((minValue - minPrice) / (maxPrice - minPrice)) * 100;
  const getRightPosition = () => ((maxValue - minPrice) / (maxPrice - minPrice)) * 100;

  // Стан для відстеження активного повзунка
  const [activeSlider, setActiveSlider] = useState<'min' | 'max' | null>(null);

  // Ref для контейнера слайдера
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Динамічний z-index на основі активного повзунка та позиції
  const getMinSliderZIndex = () => {
    if (activeSlider === 'min') return 5;
    // Якщо повзунки близько, лівий має приоритет на лівій половині
    const midPoint = (minPrice + maxPrice) / 2;
    if (minValue < midPoint && Math.abs(maxValue - minValue) < (maxPrice - minPrice) * 0.1) {
      return 3;
    }
    return 1;
  };

  const getMaxSliderZIndex = () => {
    if (activeSlider === 'max') return 5;
    // Якщо повзунки близько, правий має приоритет на правій половині
    const midPoint = (minPrice + maxPrice) / 2;
    if (maxValue > midPoint && Math.abs(maxValue - minValue) < (maxPrice - minPrice) * 0.1) {
      return 3;
    }
    return 2;
  };

  return (
    <div className="space-y-4">
      <label className="text-gray-700 font-medium block">Ціна (грн):</label>

      {/* Поля введення цін */}
      <div className="flex items-center space-x-2">
        <input
          type="number"
          min={minPrice}
          max={maxPrice}
          value={minValue}
          onChange={handleMinChange}
          className="w-20 p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none"
        />
        <span className="text-gray-500">—</span>
        <input
          type="number"
          min={minPrice}
          max={maxPrice}
          value={maxValue}
          onChange={handleMaxChange}
          className="w-20 p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none"
        />
      </div>

      {/* Двойной слайдер */}
      <div className="relative" ref={sliderContainerRef}>
        {/* Трек слайдера */}
        <div
          className="relative h-2 bg-gray-200 rounded-lg shadow-inner cursor-pointer"
          onClick={handleTrackClick}
        >
          {/* Активная область */}
          <div
            className="absolute h-2 bg-gradient-to-r from-pink-400 to-pink-600 rounded-lg shadow-sm transition-all duration-200 pointer-events-none"
            style={{
              left: `${getLeftPosition()}%`,
              width: `${getRightPosition() - getLeftPosition()}%`,
            }}
          />
        </div>

        {/* Области кліку для кожного повзунка */}
        <div
          className="absolute top-0 left-0 h-2 bg-transparent cursor-pointer"
          style={{
            width: `${50 + (getLeftPosition() - getRightPosition()) / 2}%`,
            zIndex: 10,
          }}
          onClick={e => {
            e.stopPropagation();
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const parentRect = e.currentTarget.parentElement!.getBoundingClientRect();
            const fullClickPercent = clickX / parentRect.width;
            const clickValue = minPrice + (maxPrice - minPrice) * fullClickPercent;
            const newMinValue = Math.min(clickValue, maxValue - 1);
            setMinValue(newMinValue);
            setActiveSlider('min');
            setTimeout(() => setActiveSlider(null), 100);
          }}
        />

        <div
          className="absolute top-0 right-0 h-2 bg-transparent cursor-pointer"
          style={{
            width: `${50 - (getLeftPosition() - getRightPosition()) / 2}%`,
            zIndex: 10,
          }}
          onClick={e => {
            e.stopPropagation();
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const parentRect = e.currentTarget.parentElement!.getBoundingClientRect();
            const fullClickX = parentRect.width - rect.width + clickX;
            const fullClickPercent = fullClickX / parentRect.width;
            const clickValue = minPrice + (maxPrice - minPrice) * fullClickPercent;
            const newMaxValue = Math.max(clickValue, minValue + 1);
            setMaxValue(newMaxValue);
            setActiveSlider('max');
            setTimeout(() => setActiveSlider(null), 100);
          }}
        />

        {/* Минимальный слайдер */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={minValue}
          onChange={handleSliderMinChange}
          onMouseDown={handleMinMouseDown}
          onMouseUp={handleMinMouseUp}
          onFocus={handleMinFocus}
          onBlur={handleMinBlur}
          className="absolute top-0 left-0 w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb min-slider"
          style={{
            zIndex: getMinSliderZIndex(),
            pointerEvents: 'none',
          }}
        />

        {/* Максимальный слайдер */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={maxValue}
          onChange={handleSliderMaxChange}
          onMouseDown={handleMaxMouseDown}
          onMouseUp={handleMaxMouseUp}
          onFocus={handleMaxFocus}
          onBlur={handleMaxBlur}
          className="absolute top-0 left-0 w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb max-slider"
          style={{
            zIndex: getMaxSliderZIndex(),
            pointerEvents: 'none',
          }}
        />

        {/* Thumb контроли з pointer events */}
        <div className="absolute top-0 left-0 w-full h-2" style={{ pointerEvents: 'none' }}>
          <div
            className="absolute w-6 h-6 -mt-2 -ml-3 bg-transparent cursor-pointer"
            style={{
              left: `${getLeftPosition()}%`,
              pointerEvents: 'auto',
              zIndex: 20,
            }}
            onMouseDown={createMinDragHandler()}
          />

          <div
            className="absolute w-6 h-6 -mt-2 -ml-3 bg-transparent cursor-pointer"
            style={{
              left: `${getRightPosition()}%`,
              pointerEvents: 'auto',
              zIndex: 20,
            }}
            onMouseDown={createMaxDragHandler()}
          />
        </div>
      </div>

      {/* Отображение текущих значений */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>{minValue} грн</span>
        <span>{maxValue} грн</span>
      </div>

      {/* Кнопки управления */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={applyFilter}
          disabled={!hasChanges}
          className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
            hasChanges
              ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-md hover:shadow-lg'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Застосувати
        </button>
        <button
          onClick={resetFilter}
          className="px-4 py-2 rounded-lg font-medium text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-200"
        >
          Скинути
        </button>
      </div>

      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ec4899;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 6px rgba(236, 72, 153, 0.3);
          transition: all 0.2s ease;
        }

        .slider-thumb::-webkit-slider-thumb:hover {
          background: #db2777;
          box-shadow: 0 4px 12px rgba(236, 72, 153, 0.4);
          transform: scale(1.1);
        }

        .slider-thumb::-webkit-slider-thumb:active {
          background: #be185d;
          transform: scale(1.15);
          box-shadow: 0 6px 16px rgba(236, 72, 153, 0.5);
        }

        .min-slider::-webkit-slider-thumb {
          background: #ec4899;
          border: 3px solid #ffffff;
          ${activeSlider === 'min'
            ? 'box-shadow: 0 0 0 4px rgba(236, 72, 153, 0.3) !important;'
            : ''}
        }

        .max-slider::-webkit-slider-thumb {
          background: #db2777;
          border: 3px solid #ffffff;
          ${activeSlider === 'max'
            ? 'box-shadow: 0 0 0 4px rgba(219, 39, 119, 0.3) !important;'
            : ''}
        }

        .slider-thumb::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ec4899;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 6px rgba(236, 72, 153, 0.3);
          transition: all 0.2s ease;
        }

        .slider-thumb::-moz-range-thumb:hover {
          background: #db2777;
          box-shadow: 0 4px 12px rgba(236, 72, 153, 0.4);
          transform: scale(1.1);
        }

        .slider-thumb::-moz-range-thumb:active {
          background: #be185d;
          transform: scale(1.15);
          box-shadow: 0 6px 16px rgba(236, 72, 153, 0.5);
        }

        .slider-thumb::-webkit-slider-track {
          background: transparent;
        }

        .slider-thumb::-moz-range-track {
          background: transparent;
        }

        /* Додаткові стилі для кращої взаємодії */
        .min-slider {
          pointer-events: auto;
        }

        .max-slider {
          pointer-events: auto;
        }
      `}</style>
    </div>
  );
};

export default PriceSlider;
