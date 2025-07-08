export default function MassagePricesSection() {
  return (
    <section className="relative my-32">
      {/* Blurred background heading */}
      <h1 className="absolute left-1/2 top-[-80px] -translate-x-1/2 text-9xl font-semibold text-black select-none pointer-events-none z-0">
        Ціни
      </h1>
      {/* Card */}
      <div className="flex flex-col gap-8">
        <div className="relative z-5 w-full mx-auto bg-pink-50 bg-opacity-80 backdrop-blur-[4px] rounded-3xl shadow-3xl pl-8 pr-11 py-8 ">
          <h2 className="font-semibold text-2xl mb-6">Вакуумно-роликовий масаж з RF ліфтингом</h2>
          <div className="grid grid-cols-[1fr_auto] gap-x-8 items-start">
            <div className="space-y-2">
              <div className="text-xl">Руки</div>
              <div className="text-xl">Спина</div>
              <div className="text-xl">Живіт</div>
              <div className="text-xl">Сідниці</div>
              <div className="text-xl">Стегна</div>
              <div className="text-xl">Бока</div>
            </div>
            <div className="flex flex-col items-end border-l border-black pl-8 space-y-2 text-right">
              <div className="text-xl">500 грн</div>
              <div className="text-xl">600 грн</div>
              <div className="text-xl">400 грн</div>
              <div className="text-xl">500 грн</div>
              <div className="text-xl">700 грн</div>
              <div className="text-xl">400 грн</div>
            </div>
          </div>
        </div>
        <div className="relative z-5 w-full mx-auto bg-pink-50 bg-opacity-80 backdrop-blur-[4px] rounded-3xl shadow-3xl pl-8 pr-11 py-8 ">
          <h2 className="font-semibold text-2xl mb-6">Акційні пакети</h2>
          <div className="grid grid-cols-[1fr_auto_auto] gap-x-8 items-start">
            <div className="space-y-2">
              <div className="text-xl">Живіт + бока (20хв.)</div>
              <div className="text-xl">Сідниці + стегна (40хв.)</div>
              <div className="text-xl">Живіт + бока + сідниці+ стегна (60 хв)</div>
            </div>
            <div className="flex flex-col items-center border-l border-black pl-8 space-y-2 text-center">
              <div className="text-lg font-semibold mb-2">1пр.</div>
              <div className="text-xl">600 грн</div>
              <div className="text-xl">900 грн</div>
              <div className="text-xl">1200 грн</div>
            </div>
            <div className="flex flex-col items-end border-l border-black pl-8 space-y-2 text-right">
              <div className="text-lg font-semibold mb-2">5пр.</div>
              <div className="text-xl">2700 грн</div>
              <div className="text-xl">4050 грн</div>
              <div className="text-xl">5000 грн</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
