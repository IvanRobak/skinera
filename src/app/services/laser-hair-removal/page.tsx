'use client'

import Image from 'next/image';
import ModalButton from '@/components/common/ModalButton';
import ContactForm from '@/components/forms/ContactForm';
import StructuredData from '@/components/seo/StructuredData';
import { useState } from 'react';

export default function LaserHairRemovalPage() {

  const [openFaq, setOpenFaq] = useState([false, false, false, false]);
  const faqData = [
    {
      question: 'Скільки процедур потрібно?',
      answer: 'Зазвичай 6-8 сеансів з інтервалом 4-6 тижнів',
    },
    {
      question: 'Чи болюча процедура?',
      answer: 'Мінімальний дискомфорт завдяки системі охолодження',
    },
    {
      question: 'Коли видно результат?',
      answer: 'Перші результати через 2-3 тижні після першої процедури',
    },
    {
      question: 'Є протипоказання?',
      answer: 'Консультація визначить можливість проведення процедури',
    },
  ];

  return (
    <>
      <StructuredData
        type="services"
        pageTitle="Лазерна епіляція - Skinera"
        pageDescription="Безболісне та ефективне видалення небажаного волосся"
        pageUrl="https://skinera.com.ua/services/laser-hair-removal"
      />
      <div>
        {/* Hero Section */}
        <section className="relative mt-16 max-w-[1440px] mx-auto h-[709px]">
          <Image
            src="/images/laser-hair-remove.png"
            alt="Лазерна епіляція у салоні Skinera"
            fill
            className="object-cover"
            priority
          />
          <div className="relative max-w-6xl px-4 pt-44 m-auto text-white">
            <h1 className="font-bold mb-8 text-6xl text-center">Лазерна епіляція у Львові</h1>
            <p className="font-bold text-2xl text-center">
              Безболісне та ефективне видалення небажаного волосся. Сучасне обладнання, досвідчені
              спеціалісти та індивідуальний підхід до кожного клієнта в салоні Skinera.
            </p>
          </div>
        </section>


        <div className="max-w-6xl mx-auto">
          {/* Why Choose Us */}
          <section className="bg-white rounded-2xl mt-32">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Чому обирають нас</h2>
            <div className='grid grid-cols-3 gap-5'>
              <div className="bg-white cursor-pointer px-8 py-6 rounded-3xl shadow-3xl">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mb-4">
                  <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.68457 12.3991C0.68457 5.97745 5.81393 0.740633 12.1762 0.739886L12.1776 0.738525V0.739886C12.7571 0.739329 13.3357 0.781436 13.908 0.86913L14.4781 0.971165L14.5815 0.998374C15.0867 1.15701 15.3993 1.67659 15.2902 2.20647C15.1809 2.73587 14.6889 3.08867 14.1624 3.03499L14.0563 3.01866L13.5911 2.93568C13.1239 2.86412 12.6519 2.82771 12.1789 2.8282H12.1776C7.0001 2.8282 2.7742 7.09946 2.7742 12.3991C2.77425 15.6236 4.24478 18.0748 6.64193 19.7143L7.06639 20.0054C7.19714 20.097 7.31609 20.183 7.4201 20.2639C7.62768 20.4254 7.8555 20.6266 8.02822 20.8965C8.19228 21.1531 8.27815 21.4169 8.33704 21.6611C8.39297 21.8932 8.43919 22.174 8.48941 22.4733L8.49077 22.4774L8.57103 22.9685H8.56967C8.66723 23.5495 8.72746 23.8894 8.79959 24.1317C8.8324 24.2419 8.85879 24.2973 8.87305 24.3222C8.87936 24.3331 8.8822 24.338 8.88257 24.3385H8.88393L8.88529 24.3399C8.88695 24.3408 8.89233 24.3441 8.90298 24.348C8.93005 24.358 8.98825 24.3747 9.1016 24.3888C9.35212 24.4201 9.69793 24.4215 10.2879 24.4215H13.9271C14.5169 24.4215 14.8628 24.4201 15.1134 24.3888C15.2272 24.3746 15.2864 24.358 15.3134 24.348C15.325 24.3437 15.3301 24.3404 15.3311 24.3399L15.3324 24.3385V24.3371C15.333 24.3364 15.3369 24.332 15.3433 24.3208C15.3576 24.2959 15.3841 24.2413 15.4168 24.1317C15.4887 23.8902 15.5478 23.5496 15.644 22.9685V22.9631L15.7283 22.4733C15.7781 22.1715 15.8238 21.8909 15.8807 21.657C15.9405 21.4111 16.0266 21.1486 16.1895 20.8938C16.3631 20.6221 16.5922 20.4218 16.8017 20.2598C17.0105 20.0983 17.278 19.9168 17.5799 19.7129C20.0232 18.0598 21.5809 15.601 21.5809 12.3991C21.5809 11.822 22.0487 11.3542 22.6257 11.3542C23.2028 11.3542 23.6705 11.822 23.6705 12.3991C23.6705 16.1362 21.9296 19.0694 19.2899 21.0598L18.7498 21.4448C18.4249 21.6643 18.2224 21.802 18.0791 21.9128C17.9442 22.0172 17.933 22.046 17.9485 22.023C17.9423 22.0379 17.9288 22.0752 17.9104 22.1509C17.8759 22.293 17.8438 22.488 17.7894 22.8175L17.788 22.8216L17.705 23.3141L17.7037 23.3127C17.6162 23.8412 17.5372 24.3331 17.4193 24.729C17.2928 25.1536 17.0901 25.5889 16.682 25.9343C16.274 26.2795 15.8123 26.4073 15.3732 26.4622C14.9632 26.5134 14.4637 26.5112 13.9271 26.5112H10.2879C9.75169 26.5112 9.25295 26.5133 8.84312 26.4622C8.40386 26.4073 7.94112 26.2798 7.53302 25.9343C7.12441 25.5884 6.92328 25.1527 6.79702 24.729C6.67916 24.3333 6.59875 23.8401 6.50997 23.3113L6.50861 23.3073L6.42834 22.8189C6.37279 22.4877 6.34046 22.2943 6.3059 22.1509C6.2881 22.077 6.27391 22.0407 6.26781 22.0257C6.25268 22.0105 6.2151 21.9748 6.13721 21.9142C6.06491 21.8579 5.97742 21.7949 5.86784 21.7182L5.46243 21.4394C2.53527 19.4373 0.684619 16.36 0.68457 12.3991Z" fill="#0764FF" stroke="#005FFF" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.34719 26.8594V25.4663C8.34719 24.8893 8.81497 24.4215 9.392 24.4215C9.96904 24.4215 10.4368 24.8893 10.4368 25.4663V26.8594C10.4368 27.5457 10.4395 27.9551 10.479 28.2485C10.4971 28.3829 10.5182 28.4508 10.5307 28.4811C10.5335 28.4879 10.5361 28.4921 10.5375 28.4947L10.5389 28.4988L10.5429 28.5002C10.5456 28.5015 10.5498 28.5042 10.5565 28.507C10.5868 28.5194 10.6548 28.5406 10.7892 28.5587C11.0826 28.5981 11.4919 28.6008 12.1782 28.6008C12.8644 28.6008 13.2738 28.5981 13.5672 28.5587C13.7016 28.5406 13.7695 28.5194 13.7998 28.507C13.8066 28.5042 13.8108 28.5015 13.8134 28.5002L13.8175 28.4988L13.8189 28.4947C13.8203 28.4921 13.8229 28.4879 13.8257 28.4811C13.8381 28.4508 13.8593 28.3829 13.8774 28.2485C13.9168 27.9551 13.9195 27.5457 13.9195 26.8594V25.4663C13.9195 24.8893 14.3873 24.4215 14.9644 24.4215C15.5414 24.4215 16.0092 24.8893 16.0092 25.4663V26.8594C16.0092 27.4867 16.0119 28.0622 15.9493 28.5274C15.8827 29.0228 15.7254 29.5458 15.2949 29.9763C14.8645 30.4067 14.3415 30.564 13.8461 30.6306C13.381 30.6932 12.8054 30.6905 12.1782 30.6905C11.5509 30.6905 10.9754 30.6932 10.5103 30.6306C10.0149 30.564 9.49183 30.4067 9.06142 29.9763C8.631 29.5458 8.47369 29.0228 8.40704 28.5274C8.34448 28.0622 8.34719 27.4867 8.34719 26.8594ZM19.1436 0.738525C19.5806 0.738525 19.9712 1.01047 20.1231 1.42012L20.4823 2.39149H20.4837C20.9878 3.75466 21.1472 4.12576 21.4115 4.39001C21.6772 4.65573 22.0486 4.81528 23.4113 5.31921V5.32057L24.3827 5.67973C24.7923 5.83164 25.0643 6.22231 25.0643 6.65927C25.0643 7.09622 24.7923 7.48689 24.3827 7.6388L23.4113 7.99796V7.99932C22.0482 8.50343 21.6771 8.6629 21.4128 8.92716C21.1471 9.19289 20.9876 9.56434 20.4837 10.927H20.4823L20.1231 11.8984C19.9712 12.3081 19.5806 12.58 19.1436 12.58C18.7067 12.58 18.316 12.3081 18.1641 11.8984L17.805 10.927H17.8036C17.2995 9.56388 17.14 9.19278 16.8758 8.92852C16.6101 8.6628 16.2386 8.50326 14.8759 7.99932V7.99796L13.9046 7.6388C13.4949 7.48689 13.223 7.09622 13.223 6.65927C13.223 6.22231 13.4949 5.83164 13.9046 5.67973L14.8759 5.32057V5.31921C16.2391 4.81511 16.6102 4.65563 16.8744 4.39137C17.1401 4.12565 17.2997 3.75419 17.8036 2.39149H17.805L18.1641 1.42012L18.2321 1.27319C18.4147 0.946791 18.7614 0.738525 19.1436 0.738525ZM19.1423 4.68387C18.9266 5.14175 18.6849 5.5358 18.3519 5.86884C18.0194 6.20125 17.6261 6.44377 17.1683 6.65927C17.6264 6.87497 18.0201 7.1179 18.3532 7.45106C18.6853 7.7832 18.9283 8.17597 19.1436 8.6333C19.3592 8.17567 19.6025 7.78259 19.9354 7.4497C20.2677 7.11743 20.6601 6.87333 21.1176 6.65791C20.6602 6.44239 20.2668 6.20024 19.934 5.86748C19.6015 5.53494 19.3578 5.14191 19.1423 4.68387Z" fill="#0764FF" stroke="#005FFF" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Сучасне обладнання</h3>
                <p className="text-gray-600">Новітні лазерні системи з охолодженням</p>
              </div>
              <div className="bg-white cursor-pointer px-8 py-6 rounded-3xl shadow-3xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Безпека</h3>
                <p className="text-gray-600">Сертифіковані спеціалісти та стерильність</p>
              </div>
              <div className="bg-white cursor-pointer px-8 py-6 rounded-3xl shadow-3xl">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Комфорт</h3>
                <p className="text-gray-600">Мінімальний біль та приємна атмосфера</p>
              </div>
            </div>
          </section>

          {/*Prices*/}
          <section className="relative my-32">
            {/* Blurred background heading */}
            <h1 className="absolute left-1/2 top-[-80px] -translate-x-1/2 text-9xl font-semibold text-black select-none pointer-events-none z-0">
              Ціни
            </h1>
            {/* Card */}
            <div className='flex flex-col gap-8'>
              <div className="relative z-5 w-full mx-auto bg-pink-50 bg-opacity-80 backdrop-blur-[4px] rounded-3xl shadow-3xl pl-8 pr-11 py-8 ">
                <h2 className="font-semibold text-2xl mb-6">Інтимна ділянка</h2>
                <div className="grid grid-cols-[1fr_auto] gap-x-8 items-start">
                  <div className="space-y-2">
                    <div className='text-xl'>Бікіні по лінії трусиків</div>
                    <div className='text-xl'>Бікіні глибоке</div>
                    <div className='text-xl'>Зона лобка</div>
                    <div className='text-xl'>Статеві губи</div>
                    <div className='text-xl'>Міжсіднична складка</div>
                  </div>
                  <div className="flex flex-col items-end border-l border-black pl-8 space-y-2 text-right">
                    <div className='text-xl'>550 грн</div>
                    <div className='text-xl'>650 грн</div>
                    <div className='text-xl'>350 грн</div>
                    <div className='text-xl'>200 грн</div>
                    <div className='text-xl'>250 грн</div>
                  </div>
                </div>
              </div>
              <div className="relative z-5 w-full mx-auto bg-pink-50 bg-opacity-80 backdrop-blur-[4px] rounded-3xl shadow-3xl pl-8 pr-11 py-8 ">
                <h2 className="font-semibold text-2xl mb-6">Інтимна ділянка</h2>
                <div className="grid grid-cols-[1fr_auto] gap-x-8 items-start">
                  <div className="space-y-2">
                    <div className='text-xl'>Бікіні по лінії трусиків</div>
                    <div className='text-xl'>Бікіні глибоке</div>
                    <div className='text-xl'>Зона лобка</div>
                    <div className='text-xl'>Статеві губи</div>
                    <div className='text-xl'>Міжсіднична складка</div>
                  </div>
                  <div className="flex flex-col items-end border-l border-black pl-8 space-y-2 text-right">
                    <div className='text-xl'>550 грн</div>
                    <div className='text-xl'>650 грн</div>
                    <div className='text-xl'>350 грн</div>
                    <div className='text-xl'>200 грн</div>
                    <div className='text-xl'>250 грн</div>
                  </div>
                </div>
              </div>
              <div className="relative z-5 w-full mx-auto bg-pink-50 bg-opacity-80 backdrop-blur-[4px] rounded-3xl shadow-3xl pl-8 pr-11 py-8 ">
                <h2 className="font-semibold text-3xl mb-6">Інтимна ділянка</h2>
                <div className="grid grid-cols-[1fr_auto] gap-x-8 items-start">
                  <div className="space-y-2">
                    <div className='text-xl'>Бікіні по лінії трусиків</div>
                    <div className='text-xl'>Бікіні глибоке</div>
                    <div className='text-xl'>Зона лобка</div>
                    <div className='text-xl'>Статеві губи</div>
                    <div className='text-xl'>Міжсіднична складка</div>
                  </div>
                  <div className="flex flex-col items-end border-l border-black pl-8 space-y-2 text-right">
                    <div className='text-xl'>550 грн</div>
                    <div className='text-xl'>650 грн</div>
                    <div className='text-xl'>350 грн</div>
                    <div className='text-xl'>200 грн</div>
                    <div className='text-xl'>250 грн</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-gray-50 rounded-2xl p-8 mt-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Часті запитання</h2>
            <div className="flex flex-col gap-6">
              {faqData.map((faq, idx) => (
                <div
                  key={faq.question}
                  className={`bg-white rounded-xl p-6 border transition-colors duration-300 ${openFaq[idx] ? 'border-purple-600' : 'border-transparent'}`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setOpenFaq(faqs => faqs.map((open, i) => i === idx ? !open : open))}
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                    <span
                      className={`
                        transition-transform duration-300
                        ${openFaq[idx] ? 'rotate-180' : 'rotate-0'}
                        flex items-center justify-center w-8 h-8 rounded-full
                      `}
                    >
                      {openFaq[idx] ? (
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      ) : (
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      )}
                    </span>
                  </div>
                  <div
                    className={`
                      transition-all duration-300 overflow-hidden
                      ${openFaq[idx] ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}
                    `}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
        {/* Change Section */}
        <section className="relative mt-16 max-w-[1440px] mx-auto h-[367px]">
          <Image
            src="/images/ready-for-change.png"
            alt="Лазерна епіляція у салоні Skinera"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-10 pl-36 pt-[70px] flex flex-col items-start">
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
      </div>
    </>
  );
}
