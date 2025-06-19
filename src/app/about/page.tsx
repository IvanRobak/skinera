import { Metadata } from 'next';
import AboutSection from '@/components/sections/AboutSection';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Про нас - Наші цінності та філософія роботи',
  description:
    'Дізнайтеся більше про салон краси Skinera у Львові. Наші цінності: якість, професіоналізм, турбота. Індивідуальний підхід до кожного клієнта.',
  keywords: [
    'про салон краси',
    'цінності салону',
    'професійний салон Львів',
    'досвід роботи',
    'команда спеціалістів',
    'філософія краси',
  ],
  openGraph: {
    title: 'Про нас - Skinera',
    description: 'Наші цінності та філософія роботи',
    images: [
      {
        url: '/images/face-care.png',
        width: 1200,
        height: 630,
        alt: 'Про салон краси Skinera',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <StructuredData
        type="about"
        pageTitle="Про нас - Skinera"
        pageDescription="Наші цінності та філософія роботи"
        pageUrl="https://skinera.com.ua/about"
      />
      <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-white">
        <AboutSection />
      </main>
    </>
  );
}
