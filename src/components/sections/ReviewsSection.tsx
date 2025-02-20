const reviews = [
  { id: 1, text: 'Чудовий сервіс! Дуже задоволена!', author: 'Ольга' },
  { id: 2, text: 'Професійний підхід і приємна атмосфера.', author: 'Марина' },
  { id: 3, text: 'Результат перевершив очікування!', author: 'Ірина' },
  { id: 4, text: 'Обслуговування на вищому рівні!', author: 'Світлана' },
];

const ReviewsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Відгуки клієнтів</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 p-6 rounded-lg shadow-lg">
          {reviews.map(review => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 text-lg italic">"{review.text}"</p>
              <p className="mt-4 text-pink-500 font-bold">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
