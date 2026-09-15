"use client";

import { useEffect, useState } from "react";
import { FaBell, FaRegMoon, FaRegSun } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

function MobileHeaderActions() {
    const [theme, setTheme] = useState("dark");
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
        document.documentElement.classList.toggle(
            "dark",
            savedTheme === "dark",
        );
    }, []);

    // تغییر تم
    function handleToggleTheme() {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    }

    return (
        <>
            <ul className="grid grid-cols-6 mt-35 relative z-50 gap-1 items-center justify-end">
                {/* سرچ */}
                <li className="relative col-span-6 flex items-center">
                    <input
                        type="text"
                        placeholder="Search movie ..."
                        className="pl-3 pr-9 py-1.5 w-40 w-full mx-3 text-sm tracking-wider 
                        text-white dark:placeholder:text-gray-500
                        rounded-lg  bg-cream-200 border border-night-700/20 dark:border-cream-50/10 dark:bg-night-700
                        focus:outline-none focus:ring-2 focus:ring-gold-500/50
                        transition-colors duration-300 placeholder:text-night-700/60 placeholder:dark:text-cream-50/40"
                    />
                    <IoSearch className="absolute right-5 w-5 h-5 text-night-700 dark:text-cream-300 pointer-events-none" />
                </li>
            </ul>
            <ul className="absolute bottom-4 flex justify-center left-[50%] translate-x-[-50%]">
                <li className="relative">
                    <button
                        className="p-2 rounded-lg hover:bg-cream-300 dark:hover:bg-night-700
                        text-ink-400 dark:text-cream-50 transition-colors duration-300"
                        aria-label="Notifications"
                    >
                        <FaBell className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-gold-500 rounded-full"></span>
                    </button>
                </li>

                <li>
                    <button
                        onClick={handleToggleTheme}
                        className="p-2 rounded-lg hover:bg-cream-300 dark:hover:bg-night-700 
                        text-ink-400 dark:text-cream-50 transition-colors duration-300"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? (
                            <FaRegSun className="w-5 h-5" />
                        ) : (
                            <FaRegMoon className="w-5 h-5" />
                        )}
                    </button>
                </li>

                {/* لاگین */}
                <button
                    className="p-2 rounded-lg hover:bg-cream-300 dark:hover:bg-night-700 
                        text-ink-400 dark:text-cream-50 transition-colors duration-300"
                >
                    <FiLogIn className="w-5 h-5" />
                </button>
            </ul>
        </>
    );
}

export default MobileHeaderActions;
