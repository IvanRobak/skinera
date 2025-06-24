import Image from 'next/image';
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <section className=" mt-20 bg-gradient-to-b from-white to-gray-50 ">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Обирайте найкращі послуги</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Ми надаємо повний спектр послуг для вашої краси та здоровʼя, використовуючи найсучасніші
            технології та методики
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Догляд за обличчям */}
          <Link href="/services/face-care" className="block">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="relative h-48 flex items-center justify-center">
                <Image
                  src="/images/face-care.png"
                  alt="Догляд за обличчям"
                  width={384}
                  height={192}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Догляд за обличчям</h3>
                <p className="text-gray-600 mb-4">
                  Професійні процедури для чистоти та здоровʼя вашої шкіри
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Чистка обличчя</li>
                  <li>• Пілінг</li>
                  <li>• Маски</li>
                  <li>• Масаж обличчя</li>
                </ul>
                <div className="mt-4 text-purple-600 font-medium flex items-center">
                  <span>Дізнатися більше</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Лазерна епіляція */}
          <Link href="/services/laser-hair-removal" className="block">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="relative h-48 flex items-center justify-center">
                <Image
                  src="/images/laser-epilation.png"
                  alt="Лазерна епіляція"
                  width={384}
                  height={192}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Лазерна епіляція</h3>
                <p className="text-gray-600 mb-4">Сучасний метод позбавлення небажаного волосся</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Обличчя</li>
                  <li>• Руки</li>
                  <li>• Ноги</li>
                  <li>• Зона бікіні</li>
                </ul>
                <div className="mt-4 text-purple-600 font-medium flex items-center">
                  <span>Дізнатися більше</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Масаж */}
          <Link href="/services/massage" className="block">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="relative h-48 flex items-center justify-center">
                <Image
                  src="/images/massage.png"
                  alt="Масаж"
                  width={384}
                  height={192}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Масаж</h3>
                <p className="text-gray-600 mb-4">
                  Розслаблюючі та лікувальні масажі для вашого тіла
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Класичний масаж</li>
                  <li>• Антицелюлітний масаж</li>
                  <li>• Лімфодренажний масаж</li>
                  <li>• Спортивний масаж</li>
                </ul>
                <div className="mt-4 text-purple-600 font-medium flex items-center">
                  <span>Дізнатися більше</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Додаткова інформація */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-16">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Гнучкий графік</h4>
              <p className="text-gray-600">Працюємо в зручний для вас час</p>
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
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Доступні ціни</h4>
              <p className="text-gray-600">Система знижок та бонусів</p>
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Комфортний салон</h4>
              <p className="text-gray-600">Затишна атмосфера</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
