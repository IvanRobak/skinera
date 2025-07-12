import DiamondIcon from '@/components/svgs/diamond.svg'
import HeartIcon from '@/components/svgs/heart.svg'
import PersonIcon from '@/components/svgs/personIcon.svg'
import ArrowIcon from '@/components/svgs/arrow.svg'

import clenFaceImg from '../../public/images/clean-face.png'
import faceCareImg from '../../public/images/face-care.png'
import { HeroSectionDataInterface, ProceduresTypeDataInterface, SkinCareDataInterface, WhyChooseUsDataInterface } from '@/interfaces/Section'

export const heroSectionData : HeroSectionDataInterface =
  {
    imgUrl: faceCareImg,
    title: 'Професійний догляд за обличчям',
    description: ' Безболісне та ефективне видалення небажаного волосся. Сучасне обладнання, досвідченіспеціалісти та індивідуальний підхід до кожного клієнта в салоні Skinera.',

  }

export const proceduresTypesData : ProceduresTypeDataInterface  = {
    sectionTitle: 'Види процедури',
    listAdvantages : [{
      title: 'Чистка обличчя',
      description: 'Глибоке очищення шкіри від забруднень та чорних крапок',
      price: 600,
      time: 60,
      list: ['Очищує пори', 'Покращення кровообігу та лімфотоку', 'Покращує текстуру шкіри', 'Запобігає запаленням']
    },
    {
      title: 'Хімічний пілінг',
      description: 'Процедура для оновлення шкіри та поліпшення її стану',
      price: 900,
      time: 45,
      list: ['Оновлює клітини шкіри', 'Зменшує пігментацію', ' Згладжує дрібні зморшки', 'Покращує тон шкіри']
    },
    {
      title: 'Зволожуючі маски',
      description: 'Інтенсивне зволоження та живлення шкіри обличчя',
      price: 900,
      time: 30,
      list: ['Глибоко зволожує', 'Живить шкіру', 'Відновлює еластичність', 'Заспокоює']
    },
    {
      title: 'Масаж обличчя',
      description: 'Розслаблюючий масаж для покращення кровообігу та тонусу шкіри',
      price: 900,
      time: 30,
      list: ['Розслабляє міміку', 'Зменшує набряки', 'Підтягує овал обличчя', 'Покращує кровообіг']
    }]
}

export const whyChooseUsData : WhyChooseUsDataInterface[] = [
    {
      title: 'Досвідчені косметологи',
      description: 'Сертифіковані спеціалісти з багаторічним досвідом',
      SvgIcon: PersonIcon,
      svgIconColor: '#F5E8FF'
    },
    {
      title: 'Якісні засоби',
      description: 'Професійна косметика відомих брендів',
      SvgIcon: DiamondIcon,
      svgIconColor: '#D7EBFF'
    },
    {
      title: 'Індивідуальний підхід',
      description: 'Підбір процедур під ваш тип шкіри',
      SvgIcon: HeartIcon,
      svgIconColor: '#FFE6F4'
    }
]

export const skinCareData : SkinCareDataInterface = {
    imgUrl : clenFaceImg,
    list : [
      {title: 'Суха шкіра', description: 'Зволожуючі та живильні процедури', Icon : ArrowIcon },
      {title: 'Жирна шкіра', description: 'Очищення та контроль жирності', Icon : ArrowIcon},
       {title: 'Чутлива шкіра', description: 'Делікатний догляд без подразнень', Icon : ArrowIcon},
       {title: 'Комбінована шкіра', description: 'Комплексний догляд за різними зонами', Icon : ArrowIcon},
      ]
  }
