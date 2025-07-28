import React from 'react';
import PhotoSlider from '@/components/common/PhotoSlider';
import { SkinCareDataInterface } from '@/interfaces/Section';

interface Props {
  data: SkinCareDataInterface;
}

const SkinCareSection = ({ data }: Props) => {
  // Create multiple images for the slider from the original single image
  // You can replace this with actual multiple images
  const skinCareImages = [
    {
      src: data.imgUrl.src,
      alt: 'Професійний догляд за шкірою',
      title: 'Індивідуальний підхід',
      description: 'Працюємо з усіма типами шкіри',
    },
    {
      src: '/images/cosmetologist-doing-face-treatment-applying-face-mask.jpg',
      alt: 'Процедура догляду за обличчям',
      title: 'Професійні процедури',
      description: 'Сучасне обладнання та техніки',
    },
    {
      src: '/images/woman-visiting-cosmetologist-making-rejuvenation-procedures.jpg',
      alt: 'Омолоджуючі процедури',
      title: 'Омолодження шкіри',
      description: 'Ефективні методи відновлення',
    },
    {
      src: '/images/woman-visiting-cosmetologist-making-rejuvenation-procedures 2.jpg',
      alt: 'Консультація косметолога',
      title: 'Консультація фахівця',
      description: 'Персональні рекомендації',
    },
  ];

  const listData = data.list;

  return (
    <section>
      <h2 className="font-bold text-3xl text-center mb-11">Працюємо з усіма типами шкіри</h2>
      <div className="flex flex-col lg:flex-row gap-11 items-center">
        {/* Enhanced Photo Slider */}
        <div className="w-full lg:w-[637px] lg:h-[440px] mx-auto">
          <PhotoSlider
            images={skinCareImages}
            showNavigation={true}
            showIndicators={true}
            autoPlay={true}
            autoPlayInterval={4000}
            className="rounded-2xl overflow-hidden shadow-lg"
          />
        </div>

        {/* Content remains the same */}
        <div className="flex-1 min-w-[300px] lg:min-w-[459px] grid grid-cols-1 gap-4 px-3">
          {listData.map(
            (
              item: {
                title: string;
                description: string;
                Icon: React.FC<React.SVGProps<SVGSVGElement>>;
              },
              index: number
            ) => {
              return (
                <div
                  key={index}
                  className="flex gap-4 px-6 py-4 bg-[#F7F7F7] rounded-2xl hover:bg-[#F0F0F0] transition-colors duration-200"
                >
                  <item.Icon className="text-purple-500 pt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-lg text-gray-700">{item.description}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default SkinCareSection;
