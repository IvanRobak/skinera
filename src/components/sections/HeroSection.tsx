import React from 'react'
import Image from 'next/image'
import { HeroSectionDataInterface } from '@/interfaces/Section'

export interface Props {
    data : HeroSectionDataInterface
}

const HeroSection = ({data} : Props) => {
  return (
     <section className="relative mt-16 max-w-[1440px] mx-auto h-[709px]">
          <Image
            src={data.imgUrl}
            alt="Лазерна епіляція у салоні Skinera"
            fill
            className="object-cover"
            priority
          />
          <div className="relative max-w-6xl px-4 pt-44 m-auto text-white">
            <h1 className="font-bold mb-8 text-6xl text-center">{data.title}</h1>
            <p className="font-bold text-2xl text-center">
                {data.description}
            </p>
          </div>
        </section>
  )
}

export default HeroSection