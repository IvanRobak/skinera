import { SectionPriceInterface } from "@/interfaces/Section";

interface Props {
  data :  SectionPriceInterface[];
}


export default function LaserPricesSection({data} : Props) {
  return (
    <section className="relative mt-24">
      {/* Blurred background heading */}
      <h1 className="absolute left-1/2 top-[-80px] -translate-x-1/2 text-9xl font-semibold text-black select-none pointer-events-none z-0">
        Ціни
      </h1>
      {/* Card */}
      <div className="flex flex-col gap-8">
          {
            data.map((sectionInfo, index) => {
              return (
            <div className="relative z-5 w-full mx-auto bg-pink-50 bg-opacity-80 backdrop-blur-[4px] rounded-3xl shadow-3xl pl-8 pr-11 py-8" key={index}>
              <h2 className="font-semibold text-2xl mb-6">{sectionInfo.sectionTitle}</h2>
              <div className="grid grid-cols-[1fr_auto] gap-x-8 items-start">
                <div className="space-y-2">
                  {
                    sectionInfo.procedure.titles.map((sectionTitle, index) => {
                      return (
                        <div className="text-xl" key={index}>{sectionTitle}</div>
                      )
                    })
                  }
                </div>
                <div className="flex flex-col items-end border-l border-black pl-8 space-y-2 text-right">
                  {
                    sectionInfo.procedure.prices.map((sectionTitle, index) => {
                      return (
                        <div className="text-xl" key={index}>{sectionTitle} грн</div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
              )
            })
          }
      </div>
    </section>
  );
}
