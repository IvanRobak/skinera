import React from 'react';
import ModalButton from '../common/ModalButton';
import ContactForm from '../forms/ContactForm';
import CardPrice from '../common/CardPrice';
import WavyBottomBorder from '../common/WavyBottomBorder';
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

      <WavyBottomBorder />
    </section>
  );
};

export default ProceduresTypesSection;
