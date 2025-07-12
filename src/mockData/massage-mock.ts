import { HeroSectionDataInterface, ProceduresTypeDataInterface } from '@/interfaces/Section'
import massage from '../../public/images/massage.jpg'

export const heroSectionData : HeroSectionDataInterface = {
    imgUrl: massage,
    title: 'Масаж у Львовіі',
    description: ' Масаж - це не просто фізичний вплив, це відчуття здоровʼя та гармонії',
}

export const proceduresTypesData : ProceduresTypeDataInterface = {
    sectionTitle: 'Процедури масажу',
    listAdvantages : [{
        title: 'Класичний',
        description: 'Традиційний масаж для розслаблення мʼязів та покращення кровообігу',
        price: 600,
        time: 45,
        list: ['Зняття мʼязової напруги', 'Покращення кровообігу та лімфотоку', 'Глибоке розслаблення', 'Зменшення болю в спині']
    },
    {
        title: 'Антицелюлітний',
        description: 'Інтенсивний масаж для боротьби з целюлітом та покращення контурів тіла',
        price: 800,
        time: 60,
        list: ['Боротьба з целюлітом', 'Покращення контурів тіла', 'Підтяжка шкіри', 'Активізація обміну речовин']
    },
    {
        title: 'Лімфодренажний',
        description: 'М’який масаж для виведення токсинів та зменшення набряклості',
        price: 700,
        time: 50,
        list: ['Виведення токсинів', 'Зменшення набряклості', 'Покращення імунітету', 'Підвищення тонусу шкіри']
    },
    {
        title: 'Розслаблюючий',
        description: 'Ніжний масаж для зняття стресу та досягнення повного розслаблення',
        price: 650,
        time: 45,
        list: ['Зняття стресу', 'Поновлення душевної рівноваги', 'Покращення сну', 'Загальне оздоровлення']
    }]
}
