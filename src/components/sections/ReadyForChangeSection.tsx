import Image, { StaticImageData } from 'next/image';
import ModalButton from '@/components/common/ModalButton';
import ContactForm from '@/components/forms/ContactForm';

export default function ReadyForChangeSection({ imgUrl }: { imgUrl: StaticImageData }) {
  return (
    <section className=" w-full  h-[367px] relative mx-auto ">
      <Image
        src={imgUrl}
        alt="Лазерна епіляція у салоні Skinera"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 px-4 pt-[70px] flex flex-col items-center">
        <h2 className="text-3xl text-white font-semibold mb-4">Готова до перетвореня?</h2>
        <p className="text-xl text-white mb-6">
          Запишіться на безкоштовну консультацію та першу процедуру
        </p>
        <ModalButton
          buttonText="Записатись на епіляцію"
          modalContent={<ContactForm />}
          className="px-8 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
        />
      </div>
    </section>
  );
}
