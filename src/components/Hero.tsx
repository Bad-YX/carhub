"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScroll = () => {
        const element = document.getElementById("discover");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return(
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">ابحث، احجز، وانطلق!</h1>
                <p className="hero__subtitle">ودّع التعقيدات! احجز سيارتك بلمسة زر لتجربة تأجير سلسة.</p>
                <CustomButton 
                    title= "اكتشف السيارات"
                    containerStyles= "bg-primary-blue text-white rounded-full mt-10 text-xl"
                    handleClick= {handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src={"/hero.png"} alt="hero" fill className="object-contain"/>
                </div>
                <div className="hero__image-overlay" />
            </div>
        </div>
    )
}

export default Hero;