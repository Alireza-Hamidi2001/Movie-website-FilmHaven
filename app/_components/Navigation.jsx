"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigations = [
    { id: 1, href: "movies", link: "/movies" },
    { id: 2, href: "about", link: "/about" },
    { id: 3, href: "contact", link: "/contact" },
];

function Navigation() {
    const pathName = usePathname();

    return (
        <ul className="hidden lg:flex gap-6 text-gray-300/70 ">
            {navigations.map((navigation) => (
                <Link
                    key={navigation.id}
                    href={`${navigation.link}`}
                    className="transition-all duration-300 uppercase"
                >
                    <li
                        className={`${
                            pathName === navigation.link
                                ? "text-red-400 dark:text-red-400"
                                : "text-night-700/70 dark:text-cream-50/50"
                        }`}
                    >
                        {navigation.href}
                    </li>
                </Link>
            ))}
        </ul>
    );
}

export default Navigation;
