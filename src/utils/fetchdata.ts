
import { CarProps, FilterProps } from '@/types';

export async function fetchCars(filters: FilterProps){
    const res = await fetch(process.env.URL + '/cars_data.json');
    let data = await res.json();
    //loop through the filters if is there is any filter apply it on the result data
    for(const [key] of Object.entries(filters)){
        if(filters[key]){
            data = data.filter((car: CarProps) => car[key].toString().toLowerCase().replace(/\s+/g, "").includes(filters[key]!.toString().toLowerCase().replace(/\s+/g, "")));
        }
    }
    return data;
}
