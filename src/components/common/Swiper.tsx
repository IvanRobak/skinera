'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const SwiperComponent = ({
  images,
}: {
  images: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Автоматичне перемикання
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 3000); // 3 секунди на слайд

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);

    // Відновлюємо автопрогравання через 5 секунд
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const slideWidth = 620;
  const gap = 20;
  const totalSlideWidth = slideWidth + gap;

  return (
    <div className="max-w-[637px] overflow-hidden relative">
      <div
        className="flex gap-5 transition-transform duration-700 ease-in-out"
        style={{
          width: `${(images.length + 1) * totalSlideWidth}px`,
          transform: `translateX(-${currentSlide * totalSlideWidth}px)`,
        }}
      >
        {/* Дублюємо слайди для безкінечного ефекту + додаємо перший слайд в кінець */}
        {[...images, ...images, images[0]].map((image, index) => (
          <div
            key={index}
            className="relative w-[620px] h-[440px] flex-shrink-0 rounded-[2rem] overflow-hidden"
          >
            {/* Зображення */}
            <Image src={image.src} alt={image.alt} fill className="object-cover" />

            {/* Тінь */}
            <div className="absolute inset-0 rounded-[2rem] shadow-lg"></div>
          </div>
        ))}
      </div>

      {/* Індикатори слайдів */}
      <div className="flex justify-center gap-2 my-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide ? 'scale-125' : 'hover:bg-gray-400'
            }`}
            style={{
              backgroundColor: index === currentSlide ? '#bf4475' : '#d1d5db',
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SwiperComponent;
