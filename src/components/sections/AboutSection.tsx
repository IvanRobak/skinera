import Image from 'next/image';
import ModalButton from '../common/ModalButton';
import ContactForm from '../forms/ContactForm';

const AboutSection = () => {
  return (
    <section className="pb-10 mt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 ">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Наші цінності та філософія роботи
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Ми прагнемо створити простір, де краса та здоровʼя поєднуються з професіоналізмом та
            турботою про кожного клієнта
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/face-care.png"
                alt="Догляд за обличчям"
                width={128}
                height={128}
                className="w-32 h-32 object-cover rounded-full shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Догляд за обличчям</h3>
            <p className="text-gray-600">Професійні процедури для здоровʼя та краси вашої шкіри</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/laser-epilation.png"
                alt="Лазерна епіляція"
                width={128}
                height={128}
                className="w-32 h-32 object-cover rounded-full shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Лазерна епіляція</h3>
            <p className="text-gray-600">Безпечне та ефективне видалення небажаного волосся</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/massage.png"
                alt="Масаж"
                width={128}
                height={128}
                className="w-32 h-32 object-cover rounded-full shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Масаж</h3>
            <p className="text-gray-600">Розслаблюючі та лікувальні масажні процедури</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Наші цінності</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Якість</h4>
              <p className="text-gray-600">
                Використовуємо тільки перевірені методики та професійну косметику
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Професіоналізм</h4>
              <p className="text-gray-600">
                Наші спеціалісти постійно підвищують свою кваліфікацію
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Турбота</h4>
              <p className="text-gray-600">Індивідуальний підхід до кожного клієнта</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <ModalButton
            buttonText="Записатись на прийом"
            modalContent={<ContactForm />}
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
