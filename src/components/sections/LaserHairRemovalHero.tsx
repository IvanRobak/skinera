import Image from 'next/image';

export default function LaserHairRemovalHero() {
  return (
    <section className="relative mt-16 max-w-[1440px] mx-auto h-[709px]">
      <Image
        src="/images/laser-hair-remove.png"
        alt="Лазерна епіляція у салоні Skinera"
        fill
        className="object-cover"
        priority
      />
      <div className="relative max-w-6xl px-4 pt-44 m-auto text-white">
        <h1 className="font-bold mb-8 text-6xl text-center">Лазерна епіляція у Львові</h1>
        <p className="font-bold text-2xl text-center">
          Безболісне та ефективне видалення небажаного волосся. Сучасне обладнання, досвідчені
          спеціалісти та індивідуальний підхід до кожного клієнта в салоні Skinera.
        </p>
      </div>
    </section>
  );
}
