// import ContactForm from '../components/forms/ContactForm';
// import ModalButton from '../components/common/ModalButton';

// const ContactSection = () => {
//   return (
//     <section className="bg-gray-100 py-10">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row  justify-center gap-8">
//         {/* Ліва частина: текстова інформація */}
//         <div
//           className="md:w-1/2 text-center md:text-left animate-fade-in flex flex-col a
//         items-center "
//         >
//           <h2 className="text-3xl font-bold mb-6">Контакти</h2>
//           <p className="text-lg text-gray-700 mb-4">Ми знаходимось за адресою:</p>
//           <p className="text-lg font-medium text-gray-900 mb-4">
//             м. Львів, пр. Червоної калини, 36в
//           </p>
//           <p className="text-lg text-gray-700 mb-15">
//             Телефон для запису:{' '}
//             <a href="tel:+380965180956" className="text-pink-500 hover:underline">
//               +38 096 518 0956
//             </a>
//           </p>
//           {/* Використання ModalButton */}
//           <ModalButton
//             buttonText="Записатись на прийом"
//             modalContent={<ContactForm />}
//             className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600"
//           />
//         </div>

//         {/* Права частина: Google Map */}
//         <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
//           <div className="max-w-6xl mx-auto text-center w-full">
//             <h2 className="text-3xl font-bold mb-6">Ми на мапі</h2>
//             <div
//               className="relative overflow-hidden"
//               style={{ paddingBottom: '56.25%', height: 0 }}
//             >
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.2623841269046!2d24.045562377439794!3d49.79993463398742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f0b187dc478a32d%3A0x829982e0bf3aca43!2sSkinera!5e0!3m2!1suk!2sua!4v1739518590779!5m2!1suk!2sua"
//                 className="absolute top-0 left-0 w-full h-full"
//                 allowFullScreen={true}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
