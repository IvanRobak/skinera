import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useCallback } from 'react';
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isHovered) {
  //       onSetCurrentSlide();
  //     }
  //   }, 4500);

  //   return () => clearInterval(interval);
  // }, [currentSlide, isHovered, onSetCurrentSlide]);

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
                  priority={index === 0}
                />

                <div className="absolute inset-0 z-5 pointer-events-none bg-black/35" />

                {isActive && (
                  <div className="absolute inset-0 flex items-center z-11">
                    <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-9"
                      >
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl min-[1770px]:text-6xl font-black leading-tight">
                          {item.title}
                        </h1>
                        <div className="flex justify-center min-[360px]:justify-start">
                          <ModalButton
                            buttonText="Записатись на прийом"
                            modalContent={<ContactForm />}
                            className="bg-brand-600 text-white px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3.5 xl:px-8 xl:py-4 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:bg-brand-700 transition duration-300 shadow-lg hover:shadow-xl"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Кнопки навігації слайдера */}
        <div className="absolute bottom-2  sm:bottom-6 md:bottom-8 left-0 right-0 pointer-events-none z-20">
          <div className="hidden min-[360px]:flex w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-full  items-center justify-between ">
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.2, ease: 'linear' }}
              onClick={onSetPreviousSlide}
              className="flex pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 items-center justify-center rounded-full bg-white hover:bg-pink-600 active:bg-pink-700 text-gray-800 hover:text-white shadow-xl transition-colors duration-300 ease-in-out"
              aria-label="Попередній слайд"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
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
              className="flex pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 items-center justify-center rounded-full bg-white hover:bg-pink-600 active:bg-pink-700 text-gray-800 hover:text-white shadow-xl transition-colors duration-300 ease-in-out"
              aria-label="Наступний слайд"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rotate-180"
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
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPrimary;
