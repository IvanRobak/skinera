import { SkinCareDataInterface } from '@/interfaces/Section'

import Image from 'next/image'
import React from 'react'

interface Props {
    data: SkinCareDataInterface
}

const SkinCareSection = ({ data }: Props) => {
    const imgUrl = data.imgUrl;
    const listData = data.list;

    return (
        <section>
            <h2 className='font-bold text-3xl text-center mb-11'>
                Працюємо з усіма типами шкіри
            </h2>
            <div className="flex flex-col md:flex-row gap-11">
                <div className='relative w-[637px] h-[440px] mx-auto'>
                <Image
                    src={imgUrl}
                    fill
                    alt='Skin care photo'
                />
                </div>
                <div className='min-w-[459px] grid grid-cols-1 gap-4 px-3'>
                    {
                        listData.map((item, index) => {
                            return (
                                <div key={index} className='flex gap-4 px-6 py-4 bg-[#F7F7F7] rounded-2xl '>
                                    <item.Icon className='text-purple-500 pt-1' />
                                    <div className='flex-1'>
                                        <h3 className='text-xl font-bold'>
                                            {item.title}
                                        </h3>
                                        <p className='text-lg'>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default SkinCareSection