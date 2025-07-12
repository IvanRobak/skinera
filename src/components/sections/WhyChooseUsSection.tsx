import CardWithIcon, { CardWithIconProps } from "../common/CardWithIcon";

interface Props {
  data : CardWithIconProps[]
}
export default function WhyChooseUsSection({data}: Props) {
  return (
    <section className="bg-white rounded-2xl mt-32 mx-auto ">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Чому обирають нас</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {
          data.map((item, index) => {
            return (
              <CardWithIcon key={index} title={item.title} description={item.description} SvgIcon={item.SvgIcon} svgIconColor={item.svgIconColor}/>
            )
          })
        }
      </div>
    </section>
  );
}
