import { Metadata } from 'next';
import Image from 'next/image';
import ModalButton from '@/components/common/ModalButton';
import ContactForm from '@/components/forms/ContactForm';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Лазерна епіляція - Безболісне видалення небажаного волосся',
  description:
    'Професійна лазерна епіляція в салоні Skinera: безпечне та ефективне видалення волосся на всіх ділянках тіла. Сучасне обладнання та досвідчені спеціалісти у Львові.',
  keywords: [
    'лазерна епіляція Львів',
    'видалення волосся лазером',
    'епіляція ніг',
    'епіляція підпахв',
    'епіляція зони бікіні',
    'епіляція обличчя',
    'лазерна депіляція',
    'безболісна епіляція',
    'салон лазерної епіляції',
  ],
  openGraph: {
    title: 'Лазерна епіляція - Skinera',
    description: 'Безболісне та ефективне видалення небажаного волосся',
    images: [
      {
        url: '/images/laser-hair-removal.png',
        width: 1200,
        height: 630,
        alt: 'Лазерна епіляція у салоні Skinera',
      },
    ],
  },
};

export default function LaserHairRemovalPage() {
  const treatmentAreas = [
    {
      name: 'Ноги повністю',
      description: 'Епіляція всієї поверхні ніг від стегон до щиколоток',
      duration: '60-90 хв',
      benefits: [
        'Гладкість на тривалий період',
        'Поступове зменшення волосся',
        'Без врослих волосків',
        'Економія часу на гоління',
      ],
    },
    {
      name: 'Зона підпахв',
      description: 'Делікатна епіляція пахвової зони з мінімальним дискомфортом',
      duration: '15-20 хв',
      benefits: [
        'Відсутність подразнення',
        'Довготривалий результат',
        'Зменшення потовиділення',
        'Гігієнічність',
      ],
    },
    {
      name: 'Глибоке бікіні',
      description: 'Професійна епіляція інтимної зони з дотриманням гігієни',
      duration: '30-45 хв',
      benefits: [
        'Максимальна гігієна',
        'Комфорт щодня',
        'Відсутність врослих волосків',
        'Впевненість',
      ],
    },
    {
      name: 'Обличчя',
      description: 'Видалення небажаного волосся на обличчі (вуса, підборіддя)',
      duration: '15-30 хв',
      benefits: [
        'Делікатний догляд',
        'Без подразнення шкіри',
        'Точність процедури',
        'Природній вигляд',
      ],
    },
  ];

  return (
    <>
      <StructuredData
        type="services"
        pageTitle="Лазерна епіляція - Skinera"
        pageDescription="Безболісне та ефективне видалення небажаного волосся"
        pageUrl="https://skinera.com.ua/services/laser-hair-removal"
      />
      <div>
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 mt-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Лазерна епіляція у Львові</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Безболісне та ефективне видалення небажаного волосся. Сучасне обладнання, досвідчені
              спеціалісти та індивідуальний підхід до кожного клієнта в салоні Skinera.
            </p>
            <div className="relative w-full max-w-4xl mx-auto h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/laser-hair-removal.png"
                alt="Лазерна епіляція у салоні Skinera"
                width={1024}
                height={384}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Treatment Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Зони епіляції</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {treatmentAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800">{area.name}</h3>
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                      {area.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Переваги:</h4>
                    <ul className="text-gray-600 space-y-1">
                      {area.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Як проходить процедура
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Консультація</h3>
                <p className="text-gray-600 text-sm">Оцінка типу шкіри та волосся</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-grey-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Підготовка</h3>
                <p className="text-gray-600 text-sm">Очищення та дезінфекція зони</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Епіляція</h3>
                <p className="text-gray-600 text-sm">Обробка лазером з охолодженням</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Догляд</h3>
                <p className="text-gray-600 text-sm">Заспокійливий крем та рекомендації</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Чому обирають нас</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Сучасне обладнання</h3>
                <p className="text-gray-600">Новітні лазерні системи з охолодженням</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Безпека</h3>
                <p className="text-gray-600">Сертифіковані спеціалісти та стерильність</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Комфорт</h3>
                <p className="text-gray-600">Мінімальний біль та приємна атмосфера</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Часті питання</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Скільки процедур потрібно?
                </h3>
                <p className="text-gray-600">Зазвичай 6-8 сеансів з інтервалом 4-6 тижнів</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Чи болюча процедура?</h3>
                <p className="text-gray-600">Мінімальний дискомфорт завдяки системі охолодження</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Коли видно результат?</h3>
                <p className="text-gray-600">
                  Перші результати через 2-3 тижні після першої процедури
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Є протипоказання?</h3>
                <p className="text-gray-600">
                  Консультація визначить можливість проведення процедури
                </p>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="text-center bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Готові позбутися небажаного волосся?</h2>
            <p className="text-xl mb-6">
              Запишіться на безкоштовну консультацію та першу процедуру
            </p>
            <ModalButton
              buttonText="Записатись на епіляцію"
              modalContent={<ContactForm />}
              className="px-8 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
