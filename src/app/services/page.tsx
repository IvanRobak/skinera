import { Metadata } from 'next';
import ModalButton from '@/components/common/ModalButton';
import ContactForm from '@/components/forms/ContactForm';
import ServicesSection from '@/components/sections/ServicesSection';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Послуги - Догляд за обличчям, лазерна епіляція, масаж',
  description:
    'Повний спектр послуг салону краси Skinera: професійний догляд за обличчям, лазерна епіляція, розслаблюючий масаж. Сучасні технології та досвідчені спеціалісти.',
  keywords: [
    'послуги салону краси',
    'догляд за обличчям Львів',
    'лазерна епіляція Львів',
    'масаж Львів',
    'чистка обличчя',
    'пілінг обличчя',
    'антицелюлітний масаж',
    'класичний масаж',
  ],
  openGraph: {
    title: 'Послуги салону краси Skinera',
    description: "Повний спектр послуг для вашої краси та здоров'я",
    images: [
      {
        url: '/images/face-care.png',
        width: 1200,
        height: 630,
        alt: 'Послуги салону краси Skinera',
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        type="services"
        pageTitle="Послуги салону краси Skinera"
        pageDescription="Повний спектр послуг для вашої краси та здоров'я"
        pageUrl="https://skinera.com.ua/services"
      />
      <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-white">
        <ServicesSection />
        <div className="text-center bg-gray-50 py-8">
          <ModalButton
            buttonText="Записатись на прийом"
            modalContent={<ContactForm />}
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl w-full md:w-auto"
          />
        </div>
      </main>
    </>
  );
}
