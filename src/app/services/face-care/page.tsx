import { Metadata } from 'next';
import Image from 'next/image';
import ModalButton from '@/components/common/ModalButton';
import ContactForm from '@/components/forms/ContactForm';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Догляд за обличчям - Професійні процедури у Львові',
  description:
    'Професійний догляд за обличчям в салоні Skinera: чистка обличчя, пілінг, маски, масаж обличчя. Досвідчені косметологи та сучасні технології у Львові.',
  keywords: [
    'догляд за обличчям Львів',
    'чистка обличчя',
    'пілінг обличчя',
    'маски для обличчя',
    'масаж обличчя',
    'косметолог Львів',
    'процедури для обличчя',
    'професійний догляд',
    'салон краси',
  ],
  openGraph: {
    title: 'Догляд за обличчям - Skinera',
    description: 'Професійні процедури для чистоти та здоровʼя вашої шкіри',
    images: [
      {
        url: '/images/face-care.png',
        width: 1200,
        height: 630,
        alt: 'Догляд за обличчям у салоні Skinera',
      },
    ],
  },
};

export default function FaceCarePage() {
  const faceCareTypes = [
    {
      name: 'Чистка обличчя',
      description: 'Глибоке очищення шкіри від забруднень та чорних крапок',
      duration: '60 хв',
      benefits: [
        'Очищує пори',
        'Видаляє чорні крапки',
        'Покращує текстуру шкіри',
        'Запобігає запаленням',
      ],
    },
    {
      name: 'Хімічний пілінг',
      description: 'Процедура для оновлення шкіри та поліпшення її стану',
      duration: '45 хв',
      benefits: [
        'Оновлює клітини шкіри',
        'Зменшує пігментацію',
        'Згладжує дрібні зморшки',
        'Покращує тон шкіри',
      ],
    },
    {
      name: 'Зволожуючі маски',
      description: 'Інтенсивне зволоження та живлення шкіри обличчя',
      duration: '30 хв',
      benefits: ['Глибоко зволожує', 'Живить шкіру', 'Відновлює еластичність', 'Заспокоює'],
    },
    {
      name: 'Масаж обличчя',
      description: 'Розслаблюючий масаж для покращення кровообігу та тонусу шкіри',
      duration: '40 хв',
      benefits: [
        'Покращує кровообіг',
        'Підтягує овал обличчя',
        'Зменшує набряки',
        'Розслабляє міміку',
      ],
    },
  ];

  return (
    <>
      <StructuredData
        type="services"
        pageTitle="Догляд за обличчям - Skinera"
        pageDescription="Професійні процедури для чистоти та здоровʼя вашої шкіри"
        pageUrl="https://skinera.com.ua/services/face-care"
      />
      <div>
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 mt-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Професійний догляд за обличчям
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Комплексний догляд за вашою шкірою з використанням сучасних технологій та професійних
              засобів. Досвідчені косметологи та індивідуальний підхід в салоні Skinera.
            </p>
            <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/face-care.png"
                alt="Догляд за обличчям у салоні Skinera"
                width={1024}
                height={384}
                className="object-cover w-full"
                style={{ height: '384px' }}
              />
            </div>
          </div>

          {/* Types of Face Care */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Види процедур</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faceCareTypes.map((treatment, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800">{treatment.name}</h3>
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                      {treatment.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Переваги:</h4>
                    <ul className="text-gray-600 space-y-1">
                      {treatment.benefits.map((benefit, benefitIndex) => (
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Етапи процедури</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Консультація</h3>
                <p className="text-gray-600 text-sm">Аналіз типу шкіри та її стану</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Очищення</h3>
                <p className="text-gray-600 text-sm">Демакіяж та підготовка шкіри</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Процедура</h3>
                <p className="text-gray-600 text-sm">Виконання обраної процедури</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Догляд</h3>
                <p className="text-gray-600 text-sm">Заспокійливі засоби та рекомендації</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Чому обирають нас</h2>
            <div className="grid md:grid-cols-3 gap-8">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Досвідчені косметологи</h3>
                <p className="text-gray-600">Сертифіковані спеціалісти з багаторічним досвідом</p>
              </div>
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Якісні засоби</h3>
                <p className="text-gray-600">Професійна косметика відомих брендів</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
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
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Індивідуальний підхід</h3>
                <p className="text-gray-600">Підбір процедур під ваш тип шкіри</p>
              </div>
            </div>
          </div>

          {/* Skin Types */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Працюємо з усіма типами шкіри
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-blue-600"
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
                <h4 className="font-semibold text-gray-800 mb-2">Суха шкіра</h4>
                <p className="text-gray-600 text-sm">Зволожуючі та живильні процедури</p>
              </div>
              <div className="text-center bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Жирна шкіра</h4>
                <p className="text-gray-600 text-sm">Очищення та контроль жирності</p>
              </div>
              <div className="text-center bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Комбінована</h4>
                <p className="text-gray-600 text-sm">Комплексний догляд за різними зонами</p>
              </div>
              <div className="text-center bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Чутлива шкіра</h4>
                <p className="text-gray-600 text-sm">Делікатний догляд без подразнень</p>
              </div>
            </div>
          </div>

          {/* Pricing Info */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Інформація про ціни
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Базові процедури</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Консультація косметолога</span>
                    <span className="font-semibold text-purple-600">Безкоштовно</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Чистка обличчя</span>
                    <span className="font-semibold text-purple-600">від 800 грн</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Зволожуюча маска</span>
                    <span className="font-semibold text-purple-600">від 500 грн</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Спеціальні процедури</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Хімічний пілінг</span>
                    <span className="font-semibold text-purple-600">від 1200 грн</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Масаж обличчя</span>
                    <span className="font-semibold text-purple-600">від 600 грн</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Комплексний догляд</span>
                    <span className="font-semibold text-purple-600">від 1500 грн</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
              <p className="text-center text-gray-700">
                <span className="font-semibold">Акція!</span> При записі на комплексний догляд
                знижка 15%
              </p>
            </div>
          </div>

          {/* Booking Section */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Готові до перетворення?</h2>
            <p className="text-lg mb-6 opacity-90">
              Записуйтесь на консультацію та отримайте індивідуальну програму догляду
            </p>
            <ModalButton
              buttonText="Записатись на прийом"
              modalContent={<ContactForm />}
              className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
