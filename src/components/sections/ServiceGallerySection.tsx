'use client';

import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
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
  showTitles = true,
  className = '',
}) => {
  const [visibleCounts, setVisibleCounts] = useState(3);
  const [slideWidthPx, setSlideWidthPx] = useState(370);
  const [slideGap, setSlideGap] = useState(20);

  const prependSlides = images.slice(-visibleCounts);
  const appendSlides = images.slice(0, visibleCounts);
  const slidesRef = useRef([...prependSlides, ...images, ...appendSlides]);

  const [currentIndex, setCurrentIndex] = useState(3);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isJumping, setIsJumping] = useState(false);

  const sliderTrackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const updateResponsiveSettings = () => {
      const width = window.innerWidth;

      if (width < 542) {
        setVisibleCounts(1);
        setSlideWidthPx(300);
      } else if (width < 820) {
        setVisibleCounts(1);
        setSlideWidthPx(500);
      } else if (width < 1188) {
        setVisibleCounts(2);
        setSlideWidthPx(370);
        setSlideGap(40);
      } else {
        setVisibleCounts(3);
        setSlideWidthPx(370);
        setSlideGap(20);
      }
    };

    updateResponsiveSettings();
    window.addEventListener('resize', updateResponsiveSettings);
    return () => window.removeEventListener('resize', updateResponsiveSettings);
  }, []);

  useEffect(() => {
    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.transition = transitionEnabled ? 'transform 0.3s ease' : 'none';
      sliderTrackRef.current.style.transform = `translateX(-${
        currentIndex * (slideWidthPx + slideGap)
      }px)`;
    }
  }, [transitionEnabled, currentIndex, slideWidthPx, slideGap]);

  function handleTransitionEnd() {
    if (currentIndex <= visibleCounts - 1) {
      // Disable transitions for an instant, jump to the mirrored real index without animating
      setTransitionEnabled(false);
      setIsJumping(true);
      setCurrentIndex(images.length + visibleCounts - 1);

      // Re-enable transitions on the next frame to keep forward motion smooth
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
          setIsJumping(false);
        });
      });
    } else if (currentIndex >= images.length + visibleCounts) {
      setTransitionEnabled(false);
      setIsJumping(true);
      setCurrentIndex(visibleCounts);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
          setIsJumping(false);
        });
      });
    }
  }

  function prevSlide() {
    setTransitionEnabled(true);
    setCurrentIndex(prev => prev - 1);
  }

  function nextSlide() {
    setTransitionEnabled(true);
    setCurrentIndex(prev => prev + 1);
  }

  return (
    <section className={`w-full py-16 relative ${className}`}>
      <div className="absolute inset-0 bg-[#FCEFE7] top-[220px]" />

      <div className="relative z-10 min-[1188px]:max-w-6xl min-[820px]:max-w-[785px] min-[542px]:max-w-[505px] min-[350px]:max-w-[300px] mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-14 text-center">
          {title ?? 'Наші послуги в дії'}
        </h2>

        <div className="relative">
          {/* Slider viewport */}
          <div className="overflow-x-clip">
            {/* Slider track */}
            <div
              className={`flex relative ${
                transitionEnabled ? 'transition-transform duration-300 ease-out' : 'transition-none'
              }`}
              style={{ gap: `${slideGap}px` }}
              ref={sliderTrackRef}
              onTransitionEnd={handleTransitionEnd}
            >
              {slidesRef.current.map((image, index) => {
                const middleIndex = (currentIndex + 1) % slidesRef.current.length;
                const isMiddle = index === middleIndex;

                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-xl bg-white flex-shrink-0 ${
                      isJumping ? 'transition-none' : 'transition-transform duration-300 ease-out'
                    } ${isMiddle && visibleCounts === 3 ? 'z-20 shadow-xl' : 'shadow-md'}`}
                    style={{
                      transform: isMiddle && visibleCounts === 3 ? 'translateY(-20px)' : '',
                      width: `${slideWidthPx}px`,
                    }}
                  >
                    {/* 1188 / 1003 */}
                    <div className="relative w-full" style={{ aspectRatio: '37 / 35' }}>
                      <Image
                        fill
                        src={image.src}
                        alt={image.alt}
                        className="object-cover"
                        sizes="(max-width: 542px) 200px, (max-width: 820px) 500px, (max-width: 1188px) 370px, 370px"
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
