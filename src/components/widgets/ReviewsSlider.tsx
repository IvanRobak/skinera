import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ReviewsSlider = () => {
  const reviews = [
    {
      id: 1,
      text: 'Чудове обслуговування! Моя шкіра виглядає набагато краще.',
      author: 'Олена',
    },
    {
      id: 2,
      text: 'Професійний підхід і доброзичливий персонал. Рекомендую!',
      author: 'Ірина',
    },
    {
      id: 3,
      text: 'Масаж просто супер! Після процедури відчуваю себе чудово.',
      author: 'Анна',
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation
      spaceBetween={30}
      slidesPerView={1}
      className="py-6"
    >
      {reviews.map(review => (
        <SwiperSlide key={review.id} className="p-10 bg-gray-100 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 italic mb-4">"{review.text}"</p>
          <p className="text-sm text-gray-500 font-semibold mb-4">- {review.author}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsSlider;
