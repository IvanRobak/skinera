import ModalButton from '@/components/common/ModalButton';
import ContactForm from '@/components/forms/ContactForm';
import ServicesSection from '@/components/sections/ServicesSection';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-white">
      <ServicesSection />
      <div className="text-center bg-gray-50">
        <ModalButton
          buttonText="Записатись на прийом"
          modalContent={<ContactForm />}
          className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl w-full md:w-auto"
        />
      </div>
    </main>
  );
}
