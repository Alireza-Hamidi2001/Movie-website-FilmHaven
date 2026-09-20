import logo from "@/public/logos/alireza4.png";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
    return (
        <footer className="bg-cream-200 dark:bg-night-900 flex flex-col gap-4 text-night-700 dark:text-cream-50 p-4 md:p-8">
            <section className=" grid grid-cols-1 md:grid-cols-[auto_1fr] bg-cream-300 dark:bg-night-950 items-center gap-4 md:gap-8 p-2 md:p-4 rounded-lg max-w-3xl mx-auto">
                <div className="relative w-full h-12">
                    <Image
                        src={logo}
                        alt="logo image of header"
                        className="w-[10rem] mx-auto"
                    />
                </div>
                <p className="text-[0.8rem] md:text-[1rem] leading-4.5 md:leading-relaxed">
                    Discover movies and shows you&apos;ll love based on your
                    ratings and your friends favorites. Make every movie night
                    easier.
                </p>
            </section>
            <section className="text-center text-[0.8rem] text-night-700/70 dark:text-cream-50/50">
                &copy; Film Haven.<br /> Developed by{" "}
                <span className="font-extrabold text-night-700 text-[1rem] dark:text-cream-50">
                    Alireza Hamidi.
                </span>
                . All rights reserved.
            </section>
            <section className="flex gap-2 mx-auto">
                <Link href="https://github.com/Alireza-Hamidi2001">
                    <FaGithub className="w-7 h-7" />
                </Link>
                <Link href="https://www.linkedin.com/in/alireza-hamidi-aa8547288/">
                    <FaLinkedinIn className="w-7 h-7" />
                </Link>
                <Link href="https://mail.google.com/mail/u/0/?fs=1&to=alireza.hamidi.eng@gmail.com&tf=cm">
                    <HiOutlineMail className="w-7 h-7" />
                </Link>
                <Link href="https://t.me/alireza_arh12">
                    <FaTelegramPlane className="w-7 h-7" />
                </Link>
            </section>
        </footer>
    );
}

export default Footer;
