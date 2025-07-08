'use client';

import StructuredData from '@/components/seo/StructuredData';
import ReadyForChangeSection from '@/components/sections/ReadyForChangeSection';
import Image from 'next/image';
import ModalButton from '@/components/common/ModalButton';
import ContactForm from '@/components/forms/ContactForm';
import MassagePricesSection from '@/components/sections/MassagePricesSection';

export default function MassagePage() {
  return (
    <>
      <StructuredData
        type="services"
        pageTitle="Масаж - Skinera"
        pageDescription="Масаж - це не просто фізичний вплив, це відчуття здоров'я та гармонії"
        pageUrl="https://skinera.com.ua/services/massage"
      />
      <div>
        <section className="relative mt-16 max-w-[1440px] mx-auto h-[709px]">
          <Image
            src="/images/massage.jpg"
            alt="Масаж у салоні Skinera"
            fill
            className="object-cover"
            priority
          />
          <div className="relative max-w-6xl px-4 pt-44 m-auto text-white">
            <h1 className="font-bold mb-8 text-6xl text-center">Масаж у Львові</h1>
            <p className="font-bold text-2xl text-center">
              Масаж - це не просто фізичний вплив, це відчуття здоровʼя та гармонії
            </p>
          </div>
        </section>

        {/* Massage Types Section */}
        <section className="py-20">
          <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">Види масажу</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 items-stretch">
            {/* Classic Massage */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Класичний</h3>
              <p className="text-gray-500 text-sm mb-4 h-16">
                Традиційний масаж для розслаблення мʼязів та покращення кровообігу
              </p>
              <div className="flex items-baseline justify-between mb-8">
                <span className="text-2xl font-bold text-gray-800">600 грн</span>
                <span className="text-purple-600 bg-purple-100 px-3 py-1 rounded-full text-sm">
                  45хв
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Зняття мʼязової напруги</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Покращення кровообігу та лімфотоку</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Глибоке розслаблення</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Зменшення болю в спині</span>
                </li>
              </ul>
            </div>

            {/* Anti-cellulite Massage */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Антицелюлітний</h3>
              <p className="text-gray-500 text-sm mb-4 h-16">
                Інтенсивний масаж для боротьби з целюлітом та покращення контурів тіла
              </p>
              <div className="flex items-baseline justify-between mb-8">
                <span className="text-2xl font-bold text-gray-800">800 грн</span>
                <span className="text-purple-600 bg-purple-100 px-3 py-1 rounded-full text-sm">
                  60хв
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Боротьба з целюлітом</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Покращення контурів тіла</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Підтяжка шкіри</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Активізація обміну речовин</span>
                </li>
              </ul>
            </div>

            {/* Lymphatic Drainage Massage */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Лімфодренажний</h3>
              <p className="text-gray-500 text-sm mb-4 h-16">
                М&rsquo;який масаж для виведення токсинів та зменшення набряклості
              </p>
              <div className="flex items-baseline justify-between mb-8">
                <span className="text-2xl font-bold text-gray-800">700 грн</span>
                <span className="text-purple-600 bg-purple-100 px-3 py-1 rounded-full text-sm">
                  50хв
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Виведення токсинів</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Зменшення набряклості</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Покращення імунітету</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Підвищення тонусу шкіри</span>
                </li>
              </ul>
            </div>

            {/* Relaxing Massage */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Розслаблюючий</h3>
              <p className="text-gray-500 text-sm mb-4 h-16">
                Ніжний масаж для зняття стресу та досягнення повного розслаблення
              </p>
              <div className="flex items-baseline justify-between mb-8">
                <span className="text-2xl font-bold text-gray-800">650 грн</span>
                <span className="text-purple-600 bg-purple-100 px-3 py-1 rounded-full text-sm">
                  45хв
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Зняття стресу</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Поновлення душевної рівноваги</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Покращення сну</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Загальне оздоровлення</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <ModalButton
              buttonText="Записатись на масаж"
              modalContent={<ContactForm />}
              className="px-8 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
            />
          </div>
        </section>

        <div className="max-w-6xl mx-auto">
          <MassagePricesSection />
        </div>

        <ReadyForChangeSection />
      </div>
    </>
  );
}
