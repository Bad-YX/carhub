"use client";

import {useState} from 'react';
import Image from 'next/image';
import SearchManufacturer from "./SearchManufacturer";
import SearchButton from './SearchButton';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(manufacturer === '' && model === ''){
            return alert("يرجى ملء شريط البحث");
        }
        updateSearchParams(model, manufacturer);
    };

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);
        if(model){
            searchParams.set("model", model);
        }else{
            searchParams.delete("model");
        }
        if(manufacturer){
            searchParams.set("manufacturer", manufacturer);
        }else{
            searchParams.delete("manufacturer");
        }

        const newPathName = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathName, {scroll: false})
    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer 
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClasses='sm:hidden'/>
            </div>
            <div className="searchbar__item ">
                <div className='search-manufacturer'>
                    <div className='relative w-full'>
                        <Image
                            src="/model-icon.png"
                            alt="car model"
                            width={20}
                            height={20}
                            className='absolute top-[14px] w-[20px] h-[20px] mr-4'
                        />
                        <input 
                            type='text'
                            name='model'
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            placeholder='الموديل'
                            className='searchbar__input'
                        />
                    </div>
                </div>
                <SearchButton otherClasses='sm:hidden'/>
            </div>
            <SearchButton otherClasses='max-sm:hidden'/>
        </form>
    );
};

export default SearchBar;