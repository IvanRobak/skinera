import laserHairRemove from '../../public/images/laser-hair-remove.png'

import LampIcon from '@/components/svgs/lamp.svg'
import SaveIcon from '@/components/svgs/save.svg'
import HeartIcon from '@/components/svgs/heart.svg'
import { HeroSectionDataInterface, WhyChooseUsDataInterface } from '@/interfaces/Section'

export const heroSectionData : HeroSectionDataInterface = {
    imgUrl: laserHairRemove,
    title: 'Лазерна епіляція у Львові',
    description: '  Безболісне та ефективне видалення небажаного волосся. Сучасне обладнання, досвідчені спеціалісти та індивідуальний підхід до кожного клієнта в салоні Skinera.',
}

export const whyChooseUsData : WhyChooseUsDataInterface[] = [
    {
      title: 'Сучасне обладнання',
      description: 'Новітні лазерні системи з охолодженням',
      SvgIcon: LampIcon,
      svgIconColor: '#D7EBFF'
    },
    {
      title: 'Безпека',
      description: 'Сертифіковані спеціалісти та стерільність',
      SvgIcon: SaveIcon,
      svgIconColor: '#D4FDE5'
    },
    {
      title: 'Комфорт',
      description: 'Мінімальний біль та приємна атмосфера',
      SvgIcon: HeartIcon,
      svgIconColor: '#F5E8FF'
    }
  ]