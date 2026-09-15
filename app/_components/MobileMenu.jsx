"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import MobileHeaderActions from "./MobileHeaderActions";

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    const menu_items = [
        { id: 1, name: "Movies", link: "/movies" },
        { id: 2, name: "About us", link: "/about" },
        { id: 3, name: "Contact", link: "/contact" },
    ];

    // preventing scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex flex-row-reverse md:hidden cursor-pointer text-right"
                aria-label="Open menu"
            >
                <FiMenu className="w-10 h-10 text-right" />
            </button>

            {/* Backdrop (Blur Background) */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 w-screen h-screen z-30 dark:bg-cream-300/80 bg-night-950/80 backdrop-blur-lg md:hidden transition-opacity duration-300 ${
                    isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
                aria-hidden="true"
            />

            {/* Full Screen Overlay - Slides from right */}
            <div
                className={`fixed top-0 right-0 z-50 bg-cream-300 dark:bg-night-900 border border-cream-50 dark:border-night-700 h-screen w-[60vw] md:hidden transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-5 right-5 z-10 cursor-pointer text-3xl text-night-700 dark:text-cream-300"
                    aria-label="Close menu"
                >
                    <FiX />
                </button>

                <div className="absolute inset-0 flex flex-col items-center justify-around">
                    <ul className="flex flex-col gap-2 my-4">
                        {menu_items.map((menu_item) => (
                            <li key={menu_item.id}>
                                <Link
                                    href={menu_item.link}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-[1.4rem] rounded-sm transition-all duration-200 hover:bg-white/20 ${
                                        pathName === menu_item.link
                                            ? "text-night-700 dark:text-cream-300 bg-red-400/60"
                                            : "text-night-700/70 dark:text-cream-50/50"
                                    }`}
                                >
                                    {menu_item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <MobileHeaderActions />
            </div>
        </>
    );
}

export default MobileMenu;
