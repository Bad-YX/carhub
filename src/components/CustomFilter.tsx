"use client";

import {useState, useEffect, Fragment} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { CustomFilterProps } from '@/types';

const CustomFilter = ({title, options}: CustomFilterProps) => {
    const router = useRouter();
    const [selected, setSelected] = useState(options[0]);
    const handleUpdateParams = () => {
        const searchParams = new URLSearchParams(window.location.search);
        if(title === "السنة"){
            searchParams.set("year", selected.value);
            if(selected.value === "") searchParams.delete("year");
        }else if(title === "الوقود"){
            searchParams.set("fuel", selected.value);
            if(selected.value === "") searchParams.delete("fuel");
        }
        const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
        router.push(newPathName);
        
    }
    useEffect(() => {handleUpdateParams()}, [selected]);
    return (
        <div className='w-fit'>
            <Listbox
                value={selected}
                onChange={(e) => {
                    setSelected(e);
                }}
            >
                <div className="relative w-fit z-10">
                    <ListboxButton className="custom-filter__btn">
                        <span className='block truncate'>{selected.title}</span>
                        <Image 
                            src="/chevron-up-down.svg" 
                            width={20} 
                            height={20} 
                            className='mr-4 object-contain'
                            alt='chevron up down'
                        />
                    </ListboxButton>
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'    
                    >
                        <ListboxOptions className="cutom-filter__options absolute w-full bg-white">
                            {
                                options.map((option) => (
                                    <ListboxOption 
                                        key={option.title} 
                                        value={option} 
                                        className={({active}) => `relative cursor-default select-none py-2 px-4 
                                            ${active? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                                    >
                                        {({selected}) => (
                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                {option.title}
                                            </span>
                                        )}
                                    </ListboxOption>
                                ))
                            }
                        </ListboxOptions>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default CustomFilter;
