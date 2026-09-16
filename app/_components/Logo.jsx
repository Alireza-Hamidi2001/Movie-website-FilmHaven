import logo from "@/public/logos/alireza4.png";
import Image from "next/image";
import Link from "next/link";

function Logo() {
    return (
        <Link
            href="/"
            className="relative w-28 h-10 md:w-36 lg:mx-auto md:h-12"
        >
            <Image
            fill
                src={logo}
                alt="logo image of header"
                className="mx-auto"
            />
        </Link>
    );
}

export default Logo;
