'use client';

import { useState } from 'react';

export default function LaserFaqSection() {
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
    <section className="bg-gray-50 rounded-2xl p-8 mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Часті запитання</h2>
      <div className="flex flex-col gap-6">
        {faqData.map((faq, idx) => (
          <div
            key={faq.question}
            className={`bg-white rounded-xl p-6 border transition-colors duration-300 ${
              openFaq[idx] ? 'border-purple-600' : 'border-transparent'
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenFaq(faqs => faqs.map((open, i) => (i === idx ? !open : open)))}
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
  );
}
