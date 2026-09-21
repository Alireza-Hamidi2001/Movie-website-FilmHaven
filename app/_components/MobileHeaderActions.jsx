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
            <ul className="absolute bottom-16 flex justify-center left-[50%] translate-x-[-50%]">
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
