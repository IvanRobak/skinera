import Image from 'next/image';
import Link from 'next/link';
import WavyBottomBorder from '../common/WavyBottomBorder';

const ServicesSection = () => {
  return (
    <section
      data-section="services"
      className="relative w-full pt-16 pb-24"
      style={{
        backgroundColor: '#EAD2D7',
        borderTopLeftRadius: '50% 20px',
        borderTopRightRadius: '50% 20px',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Обирайте найкращі послуги</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Ми надаємо повний спектр послуг для вашої краси та здоровʼя, використовуючи найсучасніші
            технології та методики
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Догляд за обличчям */}
          <Link href="/services/face-care" className="block">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="relative h-48 flex items-center justify-center">
                <Image
                  src="/images/cosmetologist-doing-face-treatment-applying-face-mask.jpg"
                  alt="Догляд за обличчям"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Догляд за обличчям</h3>
                <p className="text-gray-600 mb-4 font-semibold">
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
                  src="/images/laser-epilation-hair-removal-therapy.jpg"
                  alt="Лазерна епіляція"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Лазерна епіляція</h3>
                <p className="text-gray-600 mb-4 font-semibold">
                  Сучасний метод позбавлення від небажаного волосся
                </p>
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
                  src="/images/woman-getting-back-massage-from-masseur.jpg"
                  alt="Масаж"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Масаж</h3>
                <p className="text-gray-600 mb-4 font-semibold">
                  Розслаблюючий та лікувальний масаж для вашого тіла
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
      </div>
      <WavyBottomBorder />
    </section>
  );
};

export default ServicesSection;
