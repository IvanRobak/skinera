import ContactForm from '../forms/ContactForm';
import ModalButton from '../common/ModalButton';

const ContactSection = () => {
  return (
    <section className="pb-20 pt-20 w-full">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center ">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Де ми знаходимось</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Завітайте до нашого салону краси, де ми створили комфортну атмосферу для вашого
            відпочинку та догляду за собою
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 w-[90%]">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Контактна інформація */}
            <div className="md:w-1/2 flex flex-col items-start justify-between">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Контактна інформація</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-1">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Адреса</p>
                      <p className="text-gray-600">м.Львів, пр.Червоної калини 36в</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-1">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Телефон</p>
                      <a
                        href="tel:+380965180956"
                        className="text-purple-600 hover:text-purple-700 transition-colors"
                      >
                        +38 096 518 0956
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-1">
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
                    <div>
                      <p className="font-medium text-gray-900">Графік роботи</p>
                      <p className="text-gray-600">Пн-Сб: 10:00 - 20:00</p>
                      <p className="text-gray-600">Нд: За попереднім записом</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center ">
                <ModalButton
                  buttonText="Записатись на прийом"
                  modalContent={<ContactForm />}
                  className="bg-brand-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-brand-700 transition duration-300 shadow-lg hover:shadow-xl "
                />
              </div>
            </div>

            {/* Карта */}
            <div className="md:w-1/2 w-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Ми на мапі</h2>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="relative" style={{ paddingBottom: '75%', height: 0 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.2623841269046!2d24.045562377439794!3d49.79993463398742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f0b187dc478a32d%3A0x829982e0bf3aca43!2sSkinera!5e0!3m2!1suk!2sua!4v1739518590779!5m2!1suk!2sua"
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
