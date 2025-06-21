import { Metadata } from 'next';
import Image from 'next/image';
import ModalButton from '@/components/common/ModalButton';
import ContactForm from '@/components/forms/ContactForm';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Масаж - Розслаблюючі та лікувальні масажі у Львові',
  description:
    'Професійні масажні послуги в салоні Skinera: класичний масаж, антицелюлітний масаж, лімфодренажний масаж, спортивний масаж. Досвідчені масажисти у Львові.',
  keywords: [
    'масаж Львів',
    'класичний масаж',
    'антицелюлітний масаж',
    'лімфодренажний масаж',
    'спортивний масаж',
    'розслаблюючий масаж',
    'лікувальний масаж',
    'масажист Львів',
    'салон масажу',
  ],
  openGraph: {
    title: 'Масаж - Skinera',
    description: 'Розслаблюючі та лікувальні масажі для вашого тіла',
    images: [
      {
        url: '/images/massage.png',
        width: 1200,
        height: 630,
        alt: 'Масаж у салоні Skinera',
      },
    ],
  },
};

export default function MassagePage() {
  const massageTypes = [
    {
      name: 'Класичний масаж',
      description: 'Традиційний розслаблюючий масаж для зняття напруги та відновлення сил',
      duration: '60 хв',
      benefits: [
        'Покращує кровообіг',
        "Знімає м'язову напругу",
        'Розслабляє нервову систему',
        'Покращує сон',
      ],
    },
    {
      name: 'Антицелюлітний масаж',
      description: 'Спеціальний масаж для боротьби з целюлітом та покращення тонусу шкіри',
      duration: '45 хв',
      benefits: [
        'Зменшує прояви целюліту',
        'Покращує еластичність шкіри',
        'Активізує обмін речовин',
        'Підтягує контури тіла',
      ],
    },
    {
      name: 'Лімфодренажний масаж',
      description: 'Легкий масаж для стимуляції лімфатичної системи та виведення токсинів',
      duration: '50 хв',
      benefits: ['Виводить токсини', 'Зменшує набряки', 'Покращує імунітет', 'Очищає організм'],
    },
    {
      name: 'Спортивний масаж',
      description: 'Інтенсивний масаж для спортсменів та активних людей',
      duration: '60 хв',
      benefits: [
        'Відновлює після тренувань',
        'Попереджає травми',
        'Покращує витривалість',
        "Знімає м'язову втому",
      ],
    },
  ];

  return (
    <>
      <StructuredData
        type="services"
        pageTitle="Масаж - Skinera"
        pageDescription="Розслаблюючі та лікувальні масажі для вашого тіла"
        pageUrl="https://skinera.com.ua/services/massage"
      />
      <div>
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 mt-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Професійний масаж у Львові</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Розслаблюючі та лікувальні масажі для вашого тіла. Досвідчені масажисти,
              індивідуальний підхід та комфортна атмосфера в салоні Skinera.
            </p>
            <div className="relative w-full max-w-4xl mx-auto h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/massage.png"
                alt="Масаж у салоні Skinera"
                width={1024}
                height={384}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Types of Massage */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Види масажу</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {massageTypes.map((massage, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800">{massage.name}</h3>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {massage.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{massage.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Переваги:</h4>
                    <ul className="text-gray-600 space-y-1">
                      {massage.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Досвідчені масажисти</h3>
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
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Індивідуальний підхід</h3>
                <p className="text-gray-600">Програма масажу підбирається індивідуально</p>
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
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Комфортна атмосфера</h3>
                <p className="text-gray-600">Розслаблююча обстановка та приємна музика</p>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Готові розслабитися?</h2>
            <p className="text-xl mb-6">Запишіться на масаж та відчуйте справжню насолоду</p>
            <ModalButton
              buttonText="Записатись на масаж"
              modalContent={<ContactForm />}
              className="px-8 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
