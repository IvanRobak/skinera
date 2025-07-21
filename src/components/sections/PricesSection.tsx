import { SectionPriceInterface } from '@/interfaces/Section';

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
      <h1 className="absolute left-1/2 top-[20px] -translate-x-1/2 text-8xl font-semibold text-black select-none pointer-events-none z-0">
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
                        {sectionTitle} грн
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
