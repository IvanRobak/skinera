import Image from 'next/image';

const reviews = [
  {
    id: 1,
    text: 'Чудовий сервіс! Дуже задоволена результатом процедур. Професійний підхід та затишна атмосфера. Рекомендую всім!',
    author: 'Ольга',
    service: 'Догляд за обличчям',
    rating: 5,
    image: '/images/avatar1.jpg',
  },
  {
    id: 2,
    text: 'Професійний підхід і приємна атмосфера. Відвідую салон регулярно і завжди отримую відмінний результат. Дякую за вашу роботу!',
    author: 'Марина',
    service: 'Лазерна епіляція',
    rating: 5,
    image: '/images/avatar2.jpg',
  },
  {
    id: 3,
    text: 'Результат перевершив очікування! Дуже вдячна за професіоналізм та індивідуальний підхід. Тепер тільки до вас!',
    author: 'Ірина',
    service: 'Масаж',
    rating: 5,
    image: '/images/avatar3.jpg',
  },
  {
    id: 4,
    text: 'Обслуговування на вищому рівні! Приємний персонал, комфортна атмосфера та чудовий результат. Дякую за вашу роботу!',
    author: 'Світлана',
    service: 'Догляд за обличчям',
    rating: 5,
    image: '/images/avatar4.jpg',
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Нам довіряють</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Думка кожного клієнта важлива для нас. Ми цінуємо ваш відгук та постійно працюємо над
            покращенням якості послуг
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reviews.map(review => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={review.image} alt={review.author} fill className="object-cover" />
                </div>
                <div className="flex-grow">
                  <StarRating rating={review.rating} />
                  <p className="text-gray-700 text-lg mb-4">{review.text}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-800">{review.author}</p>
                      <p className="text-purple-600 text-sm">{review.service}</p>
                    </div>
                    <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Статистика */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <p className="text-gray-600">Задоволених клієнтів</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <p className="text-gray-600">Позитивних відгуків</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5.0</div>
              <p className="text-gray-600">Середня оцінка</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl">
            Залишити відгук
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
