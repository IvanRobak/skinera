import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import ModalButton from '../common/ModalButton';
import ContactForm from '../forms/ContactForm';

const mockSliderData = [
  {
    title: 'Вакуумно-роликовий массаж RF-ліфтинг',
    description: 'Вакумно-роликовий массаж RF-ліфтинг',
    action: 'Aкція',
    photo: {
      src: '/images/woman-getting-back-massage.jpg',
      alt: 'Процедура нанесення маски для обличчя для жінки',
      title: 'Маска для обличчя',
      description: 'Глибоке зволоження та живлення шкіри',
    },
  },
  {
    title: 'Індивідуальний підхід до вашої краси',
    description:
      'У Skinera ми створюємо персоналізовані програми догляду, що враховують саме ваш тип шкіри та потреби. Результат — помітне оновлення та впевненість у собі.',
    photo: {
      src: '/images/woman-visiting-cosmetologist.jpg',
      alt: 'Лазерна епіляція ніг у салоні краси',
      title: 'Лазерна епіляція',
      description: 'Безболісне видалення волосся з тривалим ефектом',
    },
  },
  {
    title: 'Сучасні методики та сертифіковані фахівці',
    description:
      'Ми використовуємо лише перевірені косметологічні технології та засоби. Довірте KTсвою шкіру професіоналам з досвідом та турботою.',
    photo: {
      src: '/images/cosmetologist-doing-face-treatment.jpg',
      alt: 'Ультразвукова чистка обличчя у косметолога',
      title: 'Ультразвукова чистка',
      description: 'Делікатне очищення пор та покращення текстури шкіри',
    },
  },
];

const HeroSectionPrimary = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const onSetCurrentSlide = useCallback(() => {
    const currentIndex = currentSlide === mockSliderData.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(currentIndex);
  }, [currentSlide]);

  const onSetPreviousSlide = () => {
    const currentIndex = currentSlide === 0 ? mockSliderData.length - 1 : currentSlide - 1;
    setCurrentSlide(currentIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        onSetCurrentSlide();
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [currentSlide, isHovered, onSetCurrentSlide]);

  return (
    <section className="w-full mt-[64px]">
      <div
        className="w-full overflow-hidden relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full aspect-[2.39/1] max-h-[650px]">
          {mockSliderData.map((item, index) => {
            const isActive = index === currentSlide;

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out  ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Image
                  fill
                  src={item.photo.src}
                  alt={item.photo.alt}
                  className="object-cover brightness-80"
                />

                <div className="absolute inset-0 z-5 pointer-events-none bg-black/35" />

                {isActive && (
                  <div className="min-[1770px]:m-auto min-[1770px]:mt-52 min-[1770px]:max-w-4xl  min-[1440px]:ml-52 xl:max-w-4xl mx-auto  xl:mt-56 xl:ml-52 lg:max-w-3xl lg:mt-32 lg:ml-16 md:mt-32  sm:mt-32 mt-24 relative z-11">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-white px-4 flex flex-col gap-9"
                    >
                      <h1 className="text-2xl text-center min-[1770px]:text-center min-[1770px]:text-7xl  xl:text-6xl xl:text-left lg:text-5xl lg:text-left md:text-4xl md:text-center sm:text-3xl font-black leading-tight">
                        {item.title}
                      </h1>
                      <div className="flex justify-center lg:justify-start xl:justify-start min-[1770px]:justify-center">
                        <ModalButton
                          buttonText="Записатись на прийом"
                          modalContent={<ContactForm />}
                          className="bg-brand-600 text-white px-4    sm:px-5 lg:px-8 py-2 sm:py-2.5  lg:py-4  rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:bg-brand-700 transition duration-300 shadow-lg hover:shadow-xl"
                        />
                      </div>
                    </motion.div>
                  </div>
                  // <div className='relative z-11'>
                  // </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Кнопки навігації слайдера */}
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 0.2, ease: 'linear' }}
          onClick={onSetPreviousSlide}
          className="absolute top-1/2 left-6 z-30 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-gray-300 hover:bg-pink-600 active:bg-pink-700 text-black shadow-xl transition-colors duration-300 ease-in-out"
          aria-label="Попередній слайд"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -50 }}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 0.2, ease: 'linear' }}
          onClick={onSetCurrentSlide}
          className="absolute top-1/2 right-6 z-30 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-gray-300 hover:bg-pink-600 active:bg-pink-700 text-black shadow-xl transition-colors duration-300 ease-in-out"
          aria-label="Попередній слайд"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSectionPrimary;
