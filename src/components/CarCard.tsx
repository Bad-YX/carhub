"use client";

import { useState } from "react";
import Image from 'next/image';
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";
import { generateCarImageUrl } from "@/utils";


interface CarCardProps {
    car: CarProps;
}

const CarCard = ({car}: CarCardProps) => {
    const {make, model, transmission, drive, price, fuel_type} = car;

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="car-card group relative">
            <a 
                className="absolute inset-0 z-10" 
                onClick={() => setIsOpen(true)}
            />
            <div className="car-card__content">
                <h2 className="car-card__content-title">{make} {model}</h2>
            </div>
            <p className="flex mt-6 text-[22px] font-extrabold">
                {`${price} دج`}
                <span className="self-end text-[14px] font-semibold mr-1 text-gray-400">
                    /اليوم
                </span>
            </p>
            <div className="relative w-full h-40 my-3 object-contain">
                <Image src={generateCarImageUrl(car)} alt="car model" fill priority className="object-contain"/> 
            </div>
            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel"/>
                        <p className="text-[14px]">{transmission}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/tire.svg" width={20} height={20} alt="tire"/>
                        <p className="text-[14px]">{drive}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/gas.svg" width={20} height={20} alt="gas"/>
                        <p className="text-[14px]">{fuel_type}</p>
                    </div>
                </div>
                <div className="car-card__btn-container relative">
                    <CustomButton 
                        title="اطلع على كل التفاصيل" 
                        containerStyles="w-full py-[16] rounded-full bg-primary-blue text-white font-bold"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    )
}

export default CarCard