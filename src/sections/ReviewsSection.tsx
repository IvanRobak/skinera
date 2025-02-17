import ReviewsSlider from '../components/widgets/ReviewsSlider';

const ReviewsSection = () => {
  return (
    <section className="bg-white py-30">
      <div className="max-w-6xl mx-auto px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Відгуки клієнтів</h2>
        <ReviewsSlider />
      </div>
    </section>
  );
};

export default ReviewsSection;
