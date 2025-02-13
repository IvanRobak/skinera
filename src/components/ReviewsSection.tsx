import faceCareImg from '../assets/images/face-care.png';
import laserEpilationImg from '../assets/images/laser-epilation.png';
import massageImg from '../assets/images/massage.png';

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="reviews">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 animate-fade-in">Відгуки клієнтів</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Відгук 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform hover:scale-105 transition duration-300">
            <img
              src={faceCareImg}
              alt="Анна"
              className="w-24 h-24 rounded-full mb-4 border-4 border-pink-500 shadow-md"
            />
            <p className="text-gray-600 mb-4 text-center italic">
              "Чудове обслуговування! Моя шкіра виглядає набагато краще."
            </p>
            <h3 className="text-lg font-bold text-gray-800">Анна</h3>
            <p className="text-sm text-gray-500">Київ</p>
          </div>
          {/* Відгук 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform hover:scale-105 transition duration-300">
            <img
              src={laserEpilationImg}
              alt="Олег"
              className="w-24 h-24 rounded-full mb-4 border-4 border-pink-500 shadow-md"
            />
            <p className="text-gray-600 mb-4 text-center italic">
              "Професійний підхід і доброзичливий персонал. Рекомендую!"
            </p>
            <h3 className="text-lg font-bold text-gray-800">Олег</h3>
            <p className="text-sm text-gray-500">Львів</p>
          </div>
          {/* Відгук 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform hover:scale-105 transition duration-300">
            <img
              src={massageImg}
              alt="Ірина"
              className="w-24 h-24 rounded-full mb-4 border-4 border-pink-500 shadow-md"
            />
            <p className="text-gray-600 mb-4 text-center italic">
              "Масаж просто супер! Після процедури відчуваю себе чудово."
            </p>
            <h3 className="text-lg font-bold text-gray-800">Ірина</h3>
            <p className="text-sm text-gray-500">Одеса</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
