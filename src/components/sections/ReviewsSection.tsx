import Image from 'next/image';

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
  // Function to calculate staircase positions
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
    <section
      className="relative overflow-hidden"
      style={{
        // backgroundColor: '#F5F5F5',
        height: '882px',
        width: '1440px',
        margin: '0 auto',
        marginTop: '64px',
      }}
    >
      {/* Background with Rectangle */}
      <div className="absolute left-0 top-0 h-full">
        <Image
          src="/images/Rectangle.png"
          alt="Background"
          width={1400}
          height={882}
          className="object-cover"
          style={{ width: '100%', height: '100%' }}
          priority
        />
      </div>

      {/* Content Container - 1152px centered */}
      <div className="relative z-10 mx-auto" style={{ width: '1152px', height: '100%' }}>
        {/* Header positioned on the right */}
        <div className="absolute right-0 top-20 max-w-md">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Нам довіряють</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Думка кожного клієнта важлива для нас. Ми цінуємо ваш відгук та постійно працюємо над
            покращенням якості послуг
          </p>
        </div>

        {/* Reviews Cards - Staircase Layout */}
        <div className="relative h-full">
          {reviews.map((review, index) => {
            const position = getStaircasePosition(index);
            return (
              <div
                key={review.id}
                className="absolute bg-white rounded-2xl shadow-xl py-6 px-4 hover:scale-105 transition-transform duration-300"
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
