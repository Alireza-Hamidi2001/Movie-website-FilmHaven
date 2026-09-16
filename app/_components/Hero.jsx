import heroImageDesktop from "@/public/heo-3.png";
import inception_poster from "@/public/inception-poster.png";
import spiderman from "@/public/spiderman.png";
import starwars from "@/public/starwars.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { michroma } from "../layout";
import Link from "next/link";

function Hero() {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 z-30 w-full h-screen bg-linear-to-r from-blue-800/10 to-blue-500/10  bg-black/60 [clip-path:polygon(0%_0%,100%_0%,100%_73%,0%_100%)]"></div>
            <div className="relative w-screen h-screen [clip-path:polygon(0%_0%,100%_0%,100%_73%,0%_100%)]">
                <Image
                    src={heroImageDesktop}
                    alt="hero section image"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-4 absolute z-50 max-w-2xl tracking-tight -translate-y-[50%] top-[50%] right-4 p-3">
                <p
                    className={`${michroma.className} text-[2rem] leading-8 md:text-[3rem] font-extrabold text-white capitalize md:leading-12`}
                >
                    Find the best movies to watch with friends
                </p>
                <Link
                    href="/movies"
                    className="group flex max-w-fit items-center gap-2 text-white/70 hover:text-white text-[1rem] md:text-[1.4rem] rounded-full py-2 capitalize transition-all duration-300 cursor-pointer"
                >
                    Explore movie{" "}
                    <FaArrowRightLong className="group-hover:translate-x-2 transition-all duration-300" />
                </Link>
            </div>
        </div>
    );
}

export default Hero;
