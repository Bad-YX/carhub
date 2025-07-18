import { Combobox, Transition, ComboboxButton, ComboboxInput, ComboboxOptions, ComboboxOption } from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import Image from "next/image";

import { useState, Fragment } from "react";

import { manufacturers } from "../../constants";

const SearchManufacturer = ({manufacturer, setManufacturer} : SearchManufacturerProps) => {
    const [query, setQuery] = useState('');
    const filteredManufacturers = query === '' ? manufacturers : manufacturers.filter((i) => 
        i.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
    )
    return (
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <ComboboxButton className="absolute top-[14px]">
                        <Image 
                            src="/car-logo.svg"
                            alt="car logo"
                            width={20}
                            height={20}
                            className="mr-4"
                        />
                    </ComboboxButton>
                    <ComboboxInput 
                        className="search-manufacturer__input"
                        placeholder="اسم المصنع"
                        displayValue={(manufacturer: string) => manufacturer }
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery("")}
                    >
                        <ComboboxOptions>
                            {
                                filteredManufacturers.map((manuf) => (
                                    <ComboboxOption
                                        key={manuf}
                                        value={manuf}
                                        className={({active}) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white': 'text-gray-900'}`}
                                    >
                                        {({selected, active}) => (
                                            <>
                                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                    {manuf}
                                                </span>   
                                                {selected ?? (
                                                    <span 
                                                        className={`absolute inset-y-0 left-0 flex items-center pr-3 ${active ? 'text-white' : 'text-blue-600'}`}
                                                    >
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </ComboboxOption>
                                ))
                            }
                        </ComboboxOptions>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default SearchManufacturer;