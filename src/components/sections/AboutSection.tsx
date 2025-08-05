import AnimatedText from '../common/AnimatedText';
import ModalButton from '../common/ModalButton';
import ContactForm from '../forms/ContactForm';
import {motion} from 'framer-motion'

const AboutSection = () => {
  return (
    <section className="py-20">
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

        {/* Values Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 ">
          <AnimatedText className={'text-2xl font-bold text-gray-800 mb-6 text-center'} text='Наші цінності'/>
          {/* <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Наші цінності</h3> */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-brand-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                  initial={{ pathLength : 0 }}
                  animate={{ pathLength : 1 }}
                  transition={{ duration : 3, ease: 'easeInOut'}}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></motion.path>
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
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                  initial={{ pathLength : 0 }}
                  animate={{ pathLength : 1 }}
                  transition={{ duration : 3, ease: 'easeInOut'}}
                    d="M19.0294 13.9267L24.0001 2.66666M12.4214 14.176L6.66675 2.66666M17.0161 13.3973L11.7801 2.66666M19.1467 2.66666L17.7601 5.99999M8.00008 21.3333C8.00008 23.4551 8.84294 25.4899 10.3432 26.9902C11.8435 28.4905 13.8783 29.3333 16.0001 29.3333C18.1218 29.3333 20.1566 28.4905 21.6569 26.9902C23.1572 25.4899 24.0001 23.4551 24.0001 21.3333C24.0001 19.2116 23.1572 17.1768 21.6569 15.6765C20.1566 14.1762 18.1218 13.3333 16.0001 13.3333C13.8783 13.3333 11.8435 14.1762 10.3432 15.6765C8.84294 17.1768 8.00008 19.2116 8.00008 21.3333Z"
                    stroke="#005FFF"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <motion.path
                  initial={{ pathLength : 0 }}
                  animate={{ pathLength : 1 }}
                  transition={{ duration : 3, ease: 'easeInOut'}}
                    d="M14 20L16.6667 18V24.6667"
                    stroke="#005FFF"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
                  <motion.path
                  initial={{ pathLength : 0 }}
                  animate={{ pathLength : 1 }}
                  transition={{ duration : 3, ease: 'easeInOut'}}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></motion.path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Турбота</h4>
              <p className="text-gray-600">Індивідуальний підхід до кожного клієнта</p>
            </div>
          </div>
          <div className="text-center">
            <ModalButton
              buttonText="Записатись на прийом"
              modalContent={<ContactForm />}
              className="bg-brand-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-brand-700 transition duration-300 shadow-lg hover:shadow-xl mt-12"
            />
          </div>
        </div>

        {/* Call to Action */}
      </div>
    </section>
  );
};

export default AboutSection;
