import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchManufacturerProps{
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps{
    [key: string]: string | number;
    class: string;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    make:string;
    model:string;
    transmission:string;
    year:number;
    price:number;
    make_eng_name: string;
    model_eng_name: string;
}

export interface FilterProps{
    [key: string]: string | number| undefined;
    make?: string;
    model?: string;
    year?:number;
    fuel_type?:string;
}

export interface OptionProps{
    title: string;
    value: string;
}

export interface CustomFilterProps{
    title: string;
    options: OptionProps[];
}

export interface ShowMoreProps{
    pageNumber: number;
    isNext: boolean;
}

