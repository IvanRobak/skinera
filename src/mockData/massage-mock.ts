import {
  HeroSectionDataInterface,
  ProceduresTypeDataInterface,
  SectionPriceInterface,
} from '@/interfaces/Section';
import massage from '../../public/images/massage.jpg';

export const heroSectionData: HeroSectionDataInterface = {
  imgUrl: massage,
  title: 'Масаж у Львові',
  description: ' Масаж - це не просто фізичний вплив, це відчуття здоровʼя та гармонії',
};

export const proceduresTypesData: ProceduresTypeDataInterface = {
  sectionTitle: 'Огляд процедур',
  listAdvantages: [
    {
      title: 'Класичний',
      description: 'Традиційний масаж для розслаблення мʼязів та покращення кровообігу',
      image: '/images/woman-getting-back-massage-from-masseur-small.jpg',
      list: [
        'Зняття мʼязової напруги',
        'Покращення кровообігу та лімфотоку',
        'Глибоке розслаблення',
        'Зменшення болю в спині',
      ],
    },
    {
      title: 'Антицелюлітний',
      description: 'Інтенсивний масаж для боротьби з целюлітом та покращення контурів тіла',
      image: '/images/massage.jpg',
      list: [
        'Боротьба з целюлітом',
        'Покращення контурів тіла',
        'Підтяжка шкіри',
        'Активізація обміну речовин',
      ],
    },
    {
      title: 'Лімфодренажний',
      description: 'Мʼякий масаж для виведення токсинів та зменшення набряклості',
      image: '/images/woman-getting-back-massage-from-masseur.jpg',
      list: [
        'Виведення токсинів',
        'Зменшення набряклості',
        'Покращення імунітету',
        'Підвищення тонусу шкіри',
      ],
    },
    {
      title: 'Розслаблюючий',
      description: 'Ніжний масаж для зняття стресу та досягнення повного розслаблення',
      image: '/images/spa-composition.png',
      list: [
        'Зняття стресу',
        'Поновлення душевної рівноваги',
        'Покращення сну',
        'Загальне оздоровлення',
      ],
    },
  ],
};

export const massagePricingData: SectionPriceInterface[] = [
  {
    sectionTitle: 'Вакуумно-роликовий масаж з RF ліфтингом',
    procedure: {
      titles: ['Руки', 'Спина', 'Живіт', 'Сідниці', 'Стегна', 'Бока'],
      prices: [500, 600, 400, 500, 700, 400],
    },
  },
  {
    sectionTitle: 'Акційні пакети - 1 процедура',
    procedure: {
      titles: [
        'Живіт + бока (20хв.)',
        'Сідниці + стегна (40хв.)',
        'Живіт + бока + сідниці+ стегна (60 хв)',
      ],
      prices: [600, 900, 1200],
    },
  },
  {
    sectionTitle: 'Акційні пакети - 5 процедур',
    procedure: {
      titles: [
        'Живіт + бока (20хв.)',
        'Сідниці + стегна (40хв.)',
        'Живіт + бока + сідниці+ стегна (60 хв)',
      ],
      prices: [2700, 4050, 5000],
    },
  },
];
