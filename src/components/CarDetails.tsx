'use client';

import { CarProps } from "@/types";
import { Fragment } from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import Image from "next/image";
import { arabickeys } from "../../constants";
import { generateCarImageUrl } from "@/utils";


interface CarDetailsProps{
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDetails = ({isOpen, closeModal, car}: CarDetailsProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <TransitionChild
                        as={Fragment}
                        enter="easeout duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration 200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </TransitionChild>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="easeout duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration 200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="relative w-full max-w-lg max-h-[90vh] transform rounded-2xl bg-white text-right p-6 shadow-xl transition-all flex flex-col gap-5">
                                    <button type="button" onClick={closeModal} className="absolute top-2 left-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full">
                                        <Image src="/close.svg" alt="close" width={20} height={20} className="object-contain"/>
                                    </button>
                                    <div className="flex-1 flex flex-col gap-3">
                                        <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                            <Image src={generateCarImageUrl(car)} alt="car model" fill priority className="object-contain"/> 
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                <Image src={generateCarImageUrl(car, '29')} alt="car model" fill priority className="object-contain"/> 
                                            </div>
                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                <Image src={generateCarImageUrl(car, '33')} alt="car model" fill priority className="object-contain"/> 
                                            </div>
                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                <Image src={generateCarImageUrl(car, '13')} alt="car model" fill priority className="object-contain"/> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col gap-2 overflow-y-auto scrollbar-thin">
                                        <h2 className="font-semibold text-xl">
                                            {`${car.make} ${car.model}`}
                                        </h2>
                                        <div className="mt-3 flex flex-wrap gap-4 ">
                                            {Object.entries(car).map(([key, value]) => (
                                                key !== "price" && key !== "make_eng_name" && key !== "model_eng_name"? 
                                                (<div className="flex justify-between gap-5 w-full text-left" key={key}>
                                                    <h4 className="text-gray-500">{arabickeys[key]}</h4>
                                                    <p className="pl-1">{value}</p>
                                                </div>)
                                                : null
                                            ))}
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default CarDetails;