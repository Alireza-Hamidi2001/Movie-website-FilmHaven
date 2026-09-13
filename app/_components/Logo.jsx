import logo from "@/public/logos/alireza4.png";
import Image from "next/image";
import Link from "next/link";

function Logo() {
    return (
        <Link
            href="/"
            className="relative w-full h-12"
        >
            <Image
                src={logo}
                alt="logo image of header"
                className="w-[10rem] mx-auto"
            />
        </Link>
    );
}

export default Logo;
