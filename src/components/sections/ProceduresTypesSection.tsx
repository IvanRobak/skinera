import React from 'react';
import ModalButton from '../common/ModalButton';
import ContactForm from '../forms/ContactForm';
import CardPrice from '../common/CardPrice';
import { ProceduresTypeDataInterface } from '@/interfaces/Section';

interface Props {
  data: ProceduresTypeDataInterface;
}

const ProceduresTypesSection = ({ data }: Props) => {
  const sectionTitle = data.sectionTitle;
  const advantagesArray = data.listAdvantages;

  return (
    <section
      className="relative w-screen left-1/2 -translate-x-1/2"
      style={{ backgroundColor: '#EAD2D7' }}
    >
      <div className="pt-16 pb-24">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">{sectionTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 items-stretch">
          {advantagesArray.map((item, index) => {
            return (
              <CardPrice
                title={item.title}
                description={item.description}
                price={item.price}
                time={item.time}
                list={item.list}
                key={index}
              />
            );
          })}
        </div>
        <div className="text-center mt-12">
          <ModalButton
            buttonText="Записатись на масаж"
            modalContent={<ContactForm />}
            className="px-8 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
          />
        </div>
      </div>

      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ProceduresTypesSection;
