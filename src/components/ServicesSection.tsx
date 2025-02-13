const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-100" id="services">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Наші послуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Картка послуги */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-pink-600 mb-2">Догляд за обличчям</h3>
            <p className="text-gray-600">
              Професійні процедури для чистоти та здоров'я вашої шкіри.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-pink-600 mb-2">Лазерна епіляція</h3>
            <p className="text-gray-600">Сучасний метод позбавлення небажаного волосся.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-pink-600 mb-2">Масаж</h3>
            <p className="text-gray-600">Розслаблюючі та лікувальні масажі для вашого тіла.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
