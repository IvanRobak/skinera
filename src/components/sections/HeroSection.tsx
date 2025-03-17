import ContactForm from '../forms/ContactForm';
import ModalButton from '../common/ModalButton';

const HeroSection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      {/* Декоративні елементи */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-3xl" />
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 animate-fade-in">
            Ласкаво просимо до Skinera!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Відкрийте для себе професійний догляд за шкірою та красою. Наші експерти допоможуть вам
            виглядати та почуватися неперевершено.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ModalButton
              buttonText="Записатись на прийом"
              modalContent={<ContactForm />}
              className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl"
            />
            <a
              href="/services"
              className="px-8 py-3 rounded-full text-lg font-semibold text-purple-600 hover:text-purple-700 transition duration-300 border-2 border-purple-600 hover:border-purple-700"
            >
              Наші послуги
            </a>
          </div>

          {/* Переваги */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Професійний підхід</h3>
              <p className="text-gray-600">Досвідчені спеціалісти та сучасне обладнання</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Зручний графік</h3>
              <p className="text-gray-600">Працюємо без вихідних за записом</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Комфортна атмосфера</h3>
              <p className="text-gray-600">Затишний салон та привітний персонал</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
