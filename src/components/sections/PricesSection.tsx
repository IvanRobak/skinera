import { SectionPriceInterface } from '@/interfaces/Section';
import WavyBottomBorder from '../common/WavyBottomBorder';
import { formatPriceWithCurrency } from '@/lib/utils';

interface Props {
  data: SectionPriceInterface[];
}

export default function PricesSection({ data }: Props) {
  return (
    <section
      className="relative p-10 pb-20 w-screen left-1/2 -translate-x-1/2 pt-36"
      style={{
        backgroundColor: '#FCEFE7',
        borderTopLeftRadius: '50% 20px',
        borderTopRightRadius: '50% 20px',
      }}
    >
      {/* Blurred background heading */}
      <h1 className="absolute left-1/2 top-[20px] -translate-x-1/2  text-5xl sm:text-6xl md:text-7xl  font-semibold text-black select-none pointer-events-none z-0">
        Ціни
      </h1>
      {/* Card */}
      <div className="flex flex-col gap-8">
        {data.map((sectionInfo, index) => {
          return (
            <div key={index}>
              <h2 className="font-semibold text-3xl mb-6 mx-auto max-w-4xl">
                {sectionInfo.sectionTitle}
              </h2>
              <div className="flex justify-between w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
                <div className="space-y-2">
                  {sectionInfo.procedure.titles.map((sectionTitle, index) => {
                    return (
                      <div className="text-xl" key={index}>
                        {sectionTitle}
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col items-end border-l border-black pl-8 space-y-2 text-right">
                  {sectionInfo.procedure.prices.map((sectionTitle, index) => {
                    return (
                      <div className="text-xl" key={index}>
                        {formatPriceWithCurrency(sectionTitle)}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <WavyBottomBorder />
    </section>
  );
}
