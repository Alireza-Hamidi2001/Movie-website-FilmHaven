"use client";

import { useEffect, useState } from "react";
import { FaBell, FaRegMoon, FaRegSun } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

function HeaderActions() {
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
        <ul className="hidden lg:flex gap-1 items-center justify-end">
            {/* سرچ */}
            <li className="relative flex items-center">
                <input
                    type="text"
                    placeholder="Search movie ..."
                    className="pl-3 pr-9 py-1.5 w-40 md:w-56 text-sm tracking-wider 
                        text-white dark:placeholder:text-gray-500
                        rounded-lg  bg-cream-200 border border-night-700/20 dark:border-cream-50/10 dark:bg-night-700
                        focus:outline-none focus:ring-2 focus:ring-gold-500/50
                        transition-colors duration-300 placeholder:text-night-700/60 placeholder:dark:text-cream-50/40"
                />
                <IoSearch className="absolute right-2 w-5 h-5 text-ink-400 dark:text-gray-500 pointer-events-none" />
            </li>

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
    );
}

export default HeaderActions;
