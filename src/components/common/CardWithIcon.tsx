import { FC, SVGProps } from "react";

export interface CardWithIconProps {
    title : string;
    description : string;
    SvgIcon:   FC<SVGProps<SVGSVGElement>>,
    svgIconColor: string,
}



const CardWithIcon = ({title, description, SvgIcon,  svgIconColor} : CardWithIconProps) => {
  console.log(svgIconColor);
    return (
         <div className="bg-white cursor-pointer px-8 py-6 rounded-3xl shadow-3xl">
          <div className={`w-16 h-16 bg-[${svgIconColor}] rounded-full flex items-center justify-center mb-4`}>
            <SvgIcon/>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
    )
}

export default CardWithIcon