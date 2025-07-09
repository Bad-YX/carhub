import Image from "next/image";
import {footerLinks} from "../../constants"
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
            <div className="flex max-lg:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image src="/logo1.svg" alt="logo" width={118} height={18} className="object-contain"/>
                    <p className="text-base text-gray-700">
                        كارهب 2025 <br />
                        جميع الحقوق محفوظة &copy;
                    </p>
                </div>
                <div className="footer__links ">
                    {footerLinks.map((link) => (
                        <div key={link.title} className="footer__link">
                            <h3 className="font-bold">{link.title}</h3>
                            {link.links.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className="text-gray-500"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
                <p>2025 كارهب. جميع الحقوق محفوظة &copy;. </p>
                <div className="footer__copyright-link flex justify-between gap-4">
                    <Link href="/" className="text-gray-500">
                        سياسة الخصوصية
                    </Link>
                    <Link href="/" className="text-gray-500">
                        شروط الاستخدام
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;