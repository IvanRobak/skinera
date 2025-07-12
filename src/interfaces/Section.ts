import { StaticImageData } from "next/image";
import { FC, SVGProps } from "react";


export interface SkinCareDataInterface {
    imgUrl : StaticImageData;
    list : { title: string; description: string; Icon: FC<SVGProps<SVGSVGElement>> }[]
}

export interface ProceduresTypeDataInterface {
    sectionTitle: string;
    listAdvantages : {
        title: string;
        description : string;
        price: number;
        time: number;
        list: string[];
    }[]
}

export interface HeroSectionDataInterface {
    imgUrl : StaticImageData;
    title: string;
    description: string;
}

export interface WhyChooseUsDataInterface {
    title: string,
    description: string,
    SvgIcon: FC<SVGProps<SVGSVGElement>>,
    svgIconColor: string;
}
