"use client";

import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
    const handleReturnToHomePage = () => {
        window.location.href = window.location.origin + window.location.pathname;
    }
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center" onClick={handleReturnToHomePage}>
                    <Image src="/logo1.svg" alt="logo" width={118} height={18} className="object-contain" />
                </Link>
                <CustomButton 
                    title={"تسجيل الدخول"}         
                    btnType="button"
                    containerStyles="text-primary-blue rounded full bg-white min-w-[130px]"           
                />
            </nav>
        </header>
    )
}

export default Navbar;
