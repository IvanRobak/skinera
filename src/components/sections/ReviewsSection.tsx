import Image from 'next/image';
import { motion, useInView } from 'framer-motion'
import { CounterStat } from '../common/CounterStat';
import { useRef } from 'react';

const reviews = [
  {
    id: 1,
    text: 'Чудовий сервіс! Дуже задоволена результатом процедур. Професійний підхід та затишна атмосфера. Рекомендую всім!',
    author: 'Ольга',
    service: 'Догляд за обличчям',
    rating: 5,
    size: '256px',
  },
  {
    id: 2,
    text: 'Професійний підхід і приємна атмосфера. Відвідую салон регулярно і завжди отримую відмінний результат. Дякую за вашу роботу!',
    author: 'Марина',
    service: 'Лазерна епіляція',
    rating: 5,
    size: '256px',
  },
  {
    id: 3,
    text: 'Результат перевершив очікування! Дуже вдячна за професіоналізм та індивідуальний підхід. Тепер тільки до вас!',
    author: 'Ірина',
    service: 'Масаж',
    rating: 5,
    size: '256px',
  },
  {
    id: 4,
    text: 'Обслуговування на вищому рівні! Приємний персонал, комфортна атмосфера та чудовий результат. Дякую за вашу роботу!',
    author: 'Світлана',
    service: 'Догляд за обличчям',
    rating: 5,
    size: '256px',
  },
];

// Statistics data
const statistics = [
  {
    id: 1,
    number: 500,
    symb: '+',
    description: 'Задоволених клієнтів',
  },
  {
    id: 2,
    number: 98,
    symb: '%',
    description: 'Позитивних відгуків',
  },
  {
    id: 3,
    number: 5.0,
    symb: '',
    description: 'Середня оцінка',
  },
];

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
}
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-3 mb-4 items-center justify-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          width="32"
          height="29"
          viewBox="0 0 32 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z"
            fill={index < rating ? '#FFC500' : '#E5E7EB'}
          />
        </svg>
      ))}
    </div>
  );
};

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });
  // Function to calculate staircase positions for desktop
  const getStaircasePosition = (index: number) => {
    const baseTop = 160; // Starting from top
    const baseLeft = 0; // Starting from left
    const verticalStep = 60; // How much to move down each step
    const horizontalStep = 300; // How much to move right each step

    const top = baseTop + index * verticalStep;
    const left = baseLeft + index * horizontalStep;

    return {
      top: `${top}px`,
      left: `${left}px`,
    };
  };

  return (
    <div className="w-full">
      <section className="relative overflow-hidden w-full max-w-[1440px] mx-auto mt-16 lg:h-[882px] h-auto">
        <div className="absolute left-0 top-0 h-full w-full">
          <Image
            src="/images/Rectangle4.png"
            alt="Background"
            width={1400}
            height={882}
            className="object-cover object-right"
            style={{ width: '54%', height: '100%' }}
            priority
          />

          <div className="hidden lg:block absolute left-0 top-0 h-full w-32 pointer-events-none z-20"
            style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.8) 60%, transparent 100%)', filter: 'blur(24px)' }} />

          <div className="hidden lg:block absolute right-0 top-0 h-full w-32 pointer-events-none z-20"
            style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.8) 60%, transparent 100%)', filter: 'blur(24px)' }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1152px] px-4 lg:px-0 lg:h-full">
          <div className="lg:absolute lg:right-0 lg:top-20 lg:max-w-md mb-8 lg:mb-0 pt-8 lg:pt-0">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
              Нам довіряють
            </h2>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              Думка кожного клієнта важлива для нас. Ми цінуємо ваш відгук та постійно працюємо над
              покращенням якості послуг
            </p>
          </div>


          <motion.div initial='hidden' animate={isInView ? 'visible' : 'hidden'} className="hidden lg:block relative h-full">
            {reviews.map((review, index) => {
              const position = getStaircasePosition(index);
              return (
                <motion.div
                  key={review.id}
                  ref={ref}
                  className="absolute bg-white rounded-2xl shadow-xl py-6 px-4 hover:scale-105 transition-transform duration-300"
                  variants={defaultAnimations}
                  transition={{ duration: 0.7, delay: index * 0.3, ease: 'easeInOut' }}
                  style={{
                    width: review.size,
                    top: position.top,
                    left: position.left,
                    zIndex: 10 + index,
                  }}
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">{review.author}</h3>
                  <StarRating rating={review.rating} />
                  <p className="text-gray-700 text-base leading-relaxed mb-6">{review.text}</p>
                  <p className="text-purple-600 font-medium text-lg">{review.service}</p>
                </motion.div>
              );
            })}
          </motion.div>


          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 pb-8">
            {reviews.map(review => (
              <div
                key={review.id}
                className="bg-white rounded-2xl shadow-xl py-6 px-4 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{review.author}</h3>
                <StarRating rating={review.rating} />
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{review.text}</p>
                <p className="text-purple-600 font-medium text-base">{review.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="py-10 mt-6">
        <div className="max-w-6xl mx-auto px-4 lg:px-0 bg-white rounded-2xl py-10 mt-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {statistics.map(stat => (
              <CounterStat number={stat.number} symb={stat.symb} description={stat.description} key={stat.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsSection;
