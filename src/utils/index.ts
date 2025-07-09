import { CarProps } from '@/types';

export const generateCarImageUrl = (car: CarProps, angle?: string) => { 
    const url = new URL("https://cdn.imagin.studio/getimage"); 
    const {make_eng_name, year, model_eng_name} = car;
    url.searchParams.append("customer", "img"); 
    url.searchParams.append("make", make_eng_name); 
    url.searchParams.append("modelFamily", model_eng_name.split(" ")[0]); 
    url.searchParams.append("zoomType", "fullscreen"); 
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append("angle", `${angle}`) // url.searchParams.append('zoomLevel', zoomLevel); ;

    return `${url}`; 
};
