import DiamondIcon from '@/components/svgs/diamond.svg';
import HeartIcon from '@/components/svgs/heart.svg';
import PersonIcon from '@/components/svgs/personIcon.svg';
import ArrowIcon from '@/components/svgs/arrow.svg';

import clenFaceImg from '../../public/images/clean-face.png';
import faceCareImg from '../../public/images/face-care.png';
import {
  HeroSectionDataInterface,
  ProceduresTypeDataInterface,
  SkinCareDataInterface,
  WhyChooseUsDataInterface,
} from '@/interfaces/Section';

export const heroSectionData: HeroSectionDataInterface = {
  imgUrl: faceCareImg,
  title: 'Професійний догляд за обличчям',
  description:
    ' Безболісне та ефективне видалення небажаного волосся. Сучасне обладнання, досвідченіспеціалісти та індивідуальний підхід до кожного клієнта в салоні Skinera.',
};

export const proceduresTypesData: ProceduresTypeDataInterface = {
  sectionTitle: 'Огляд процедур',
  listAdvantages: [
    {
      title: 'Чистка обличчя',
      description: 'Глибоке очищення шкіри від забруднень та чорних крапок',
      image: '/images/clean-face.png',
      list: [
        'Очищує пори',
        'Покращення кровообігу та лімфотоку',
        'Покращує текстуру шкіри',
        'Запобігає запаленням',
      ],
    },
    {
      title: 'Хімічний пілінг',
      description: 'Процедура для оновлення шкіри та поліпшення її стану',
      image: '/images/cosmetologist-doing-face-treatment-applying-face-mask-small.jpg',
      list: [
        'Оновлює клітини шкіри',
        'Зменшує пігментацію',
        ' Згладжує дрібні зморшки',
        'Покращує тон шкіри',
      ],
    },
    {
      title: 'Зволожуючі маски',
      description: 'Інтенсивне зволоження та живлення шкіри обличчя',
      image: '/images/cosmetologist-doing-face-treatment-applying-face-mask.jpg',
      list: ['Глибоко зволожує', 'Живить шкіру', 'Відновлює еластичність', 'Заспокоює'],
    },
    {
      title: 'Масаж обличчя',
      description: 'Розслаблюючий масаж для покращення кровообігу та тонусу шкіри',
      image: '/images/woman-visiting-cosmetologist-making-rejuvenation-procedures-small.jpg',
      list: ['Розслабляє міміку', 'Зменшує набряки', 'Підтягує овал обличчя', 'Покращує кровообіг'],
    },
  ],
};

export const whyChooseUsData: WhyChooseUsDataInterface[] = [
  {
    title: 'Досвідчені косметологи',
    description: 'Сертифіковані спеціалісти з багаторічним досвідом',
    SvgIcon: PersonIcon,
    svgIconColor: '#F5E8FF',
  },
  {
    title: 'Якісні засоби',
    description: 'Професійна косметика відомих брендів',
    SvgIcon: DiamondIcon,
    svgIconColor: '#D7EBFF',
  },
  {
    title: 'Індивідуальний підхід',
    description: 'Підбір процедур під ваш тип шкіри',
    SvgIcon: HeartIcon,
    svgIconColor: '#FFE6F4',
  },
];

export const skinCareData: SkinCareDataInterface = {
  imgUrl: clenFaceImg,
  list: [
    { title: 'Суха шкіра', description: 'Зволожуючі та живильні процедури', Icon: ArrowIcon },
    { title: 'Жирна шкіра', description: 'Очищення та контроль жирності', Icon: ArrowIcon },
    { title: 'Чутлива шкіра', description: 'Делікатний догляд без подразнень', Icon: ArrowIcon },
    {
      title: 'Комбінована шкіра',
      description: 'Комплексний догляд за різними зонами',
      Icon: ArrowIcon,
    },
  ],
};

export const pricesData = [
  {
    sectionTitle: 'Чистка обличчя',
    procedure: {
      titles: [
        'Ультразвукова',
        'Комбінована',
        'Механічна',
        'Чистка + пілінг азелеїновий',
        'Чистка + пілінг PRX-T33',
        'Аква чистка',
      ],
      prices: [800, 1000, 900, 1800, 2300, 1200],
    },
  },
  {
    sectionTitle: 'Доглядові процедури',
    procedure: {
      titles: [
        'Ферментотерапія (Glymed)',
        'Карбоксітерапія',
        'Антикуперозна процедура',
        'Антиоксидантна процедура з віт. C',
      ],
      prices: [1500, 1000, 1000, 1000],
    },
  },
  {
    sectionTitle: 'Пілінги',
    procedure: {
      titles: [
        'Азелеїновий / Мигдалевий',
        'Appeex',
        'Жовтий',
        'Kemikum',
        'PRX-T33 (20мл)',
        'BioRePeel',
        'TCA (Glymed)',
        'Retix C EYE',
      ],
      prices: [1000, 2000, 1800, 1800, 2000, 2200, 2500, 2000],
    },
  },
];
