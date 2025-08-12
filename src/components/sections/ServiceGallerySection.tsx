'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface ServiceGalleryProps {
  images: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
  title?: string;
  subtitle?: string;
  columns?: number; // reserved for future grid variant
  showTitles?: boolean;
  className?: string;
}
const ServiceGallerySection: React.FC<ServiceGalleryProps> = ({
  images,
  title,
  subtitle,
  columns,
  showTitles = true,
  className = '',
}) => {
  const visibleCounts = 3;
  const slideWidthPx = 370;

  const prependSlides = images.slice(-visibleCounts);
  const appendSlides = images.slice(0, visibleCounts);
  const slidesRef = useRef([...prependSlides, ...images, ...appendSlides]);

  const [currentIndex, setCurrentIndex] = useState(3);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const sliderTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.transition = transitionEnabled ? 'transform 0.3s ease' : 'none';
      sliderTrackRef.current.style.transform = `translateX(-${
        currentIndex * (slideWidthPx + 20)
      }px)`;
    }
  }, [transitionEnabled, currentIndex]);

  function handleTransitionEnd() {
    if (currentIndex <= visibleCounts - 1) {
      setTransitionEnabled(false);
      setCurrentIndex(images.length + visibleCounts - 1);

      // Відновлюємо анімацію тільки на наступному кадрі
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    } else if (currentIndex >= images.length + visibleCounts) {
      setTransitionEnabled(false);
      setCurrentIndex(visibleCounts);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  }

  function nextSlide() {
    setTransitionEnabled(true);
    setCurrentIndex(prev => prev + 1);
  }

  function prevSlide() {
    setTransitionEnabled(true);
    setCurrentIndex(prev => prev - 1);
  }

  return (
    <section className={`w-full py-16 relative ${className}`}>
      <div className="absolute inset-0 bg-[#FCEFE7] top-[220px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-14 text-center">
          {title ?? 'Наші послуги в дії'}
        </h2>

        <div className="relative">
          {/* Slider viewport */}
          <div className="overflow-x-clip">
            {/* Slider track */}
            <div
              className="flex relative gap-5  transition-transform duration-500 ease-out will-change-transform"
              ref={sliderTrackRef}
              onTransitionEnd={handleTransitionEnd}
            >
              {slidesRef.current.map((image, index) => {
                const middleIndex = (currentIndex + 1) % slidesRef.current.length;
                const leftIndex = currentIndex % slidesRef.current.length;
                const rightIndex = (currentIndex + 2) % slidesRef.current.length;
                const isMiddle = index === middleIndex;
                const isAdjacent = index === leftIndex || index === rightIndex;

                return (
                  <div
                    key={index}
                    className={`w-[370px] overflow-hidden rounded-xl bg-white origin-center flex-shrink-0 transition-transform duration-500 ease-out will-change-transform ${
                      isMiddle ? 'z-20 shadow-xl' : 'shadow-md'
                    } }`}
                    style={{
                      transform: isMiddle
                        ? 'translateY(-20px) scale(1)'
                        : isAdjacent
                        ? 'translateY(0) scale(0.95)'
                        : 'translateY(0) scale(0.9)',
                    }}
                  >
                    <div className="relative w-full h-[350px]">
                      <Image
                        fill
                        src={image.src}
                        alt={image.alt}
                        className="object-cover"
                        sizes="(max-width: 768px) 80vw, 370px"
                      />
                    </div>
                    {showTitles && image.title && (
                      <div className="px-8 py-6 ">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-brand-600 hover:transition-all hover:duration-500">
                          {image.title}
                        </h3>
                        {image.description && (
                          <p className="text-gray-600 text-sm leading-relaxed max-w-[280px]">
                            {image.description}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Попередній слайд"
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-gray-800 rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:scale-105 transition"
              >
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Наступний слайд"
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white text-gray-800 rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:scale-105 transition"
              >
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceGallerySection;
