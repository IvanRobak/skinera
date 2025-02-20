import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white ">
      <div className="max-w-6xl mx-auto text-center px-4 ">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in">Про нас</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Ми професіонали з багаторічним досвідом, готові допомогти вам доглядати за шкірою. Наша
          місія — зробити вас впевненішими та щасливішими. Довіртесь нашим фахівцям, і ви відчуєте
          результат.
        </p>
        <div className="mt-10 flex justify-center gap-6">
          <Image
            src="/images/face-care.png"
            alt="Процедура 1"
            width={128}
            height={128}
            className="w-32 h-32 object-cover rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          />
          <Image
            src="/images/laser-epilation.png"
            alt="Процедура 2"
            width={128}
            height={128}
            className="w-32 h-32 object-cover rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          />
          <Image
            src="/images/massage.png"
            alt="Процедура 3"
            width={128}
            height={128}
            className="w-32 h-32 object-cover rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
