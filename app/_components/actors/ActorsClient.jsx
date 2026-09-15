"use client";

import { useState } from "react";
import avatar from "@/public/actor.png";
import { FaAngleLeft, FaAngleRight, FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

const PAGE_SIZE = 6;

function ActorsClient({ actors }) {
    const [start, setStart] = useState(0);

    const visible = actors.slice(start, start + PAGE_SIZE);
    const canGoBack = start > 0;
    const canGoForward = start + PAGE_SIZE < actors.length;

    return (
        <>
            <div className="grid gap-2 grid-cols-3 md:grid-cols-6 my-6">
                {visible.map((person) => (
                    <Link
                        href={`/actors/${person.id}`}
                        key={person.id}
                        className="flex flex-col gap-2 md:mx-auto"
                    >
                        <div className="relative w-28 h-46 md:w-48 md:h-56">
                            <img
                                alt={person.name}
                                src={
                                    person.profile_path
                                        ? `https://image.tmdb.org/t/p/w300${person.profile_path}`
                                        : avatar.src
                                }
                                className="object-top object-cover w-full h-full"
                            />
                        </div>
                        <p className="text-night-700 dark:text-cream-50 leading-4.5 md:leading-relaxed">
                            {person.name}
                        </p>
                        <div className="flex gap-2 items-center">
                            <span className="text-night-700/70 text-sm dark:text-cream-50/50 bg-cream-300 dark:bg-night-900 px-2 rounded-full">
                                {person.known_for_department}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex gap-2 mx-auto w-fit">
                <FaAngleLeft
                    onClick={() => canGoBack && setStart(start - PAGE_SIZE)}
                    className={`flex justify-center items-center p-1 w-8 h-8 text-night-700 dark:text-cream-50 bg-cream-200 dark:bg-night-700 rounded-full transition-all duration-300 ${
                        canGoBack
                            ? "cursor-pointer hover:bg-cream-300 dark:hover:bg-night-900"
                            : "opacity-30 cursor-not-allowed"
                    }`}
                />
                <FaAngleRight
                    onClick={() => canGoForward && setStart(start + PAGE_SIZE)}
                    className={`flex justify-center items-center p-1 w-8 h-8 text-night-700 dark:text-cream-50 bg-cream-200 dark:bg-night-700 rounded-full transition-all duration-300 ${
                        canGoForward
                            ? "cursor-pointer hover:bg-cream-300 dark:hover:bg-night-900"
                            : "opacity-30 cursor-not-allowed"
                    }`}
                />
            </div>
            <Link
                href="/actors"
                className="text-[1rem] md:text-[1.4rem] group flex items-center justify-center gap-2 text-night-700/70 dark:text-cream-50/50 hover:text-night-700 dark:hover:text-cream-50 transition-all duration-300 mt-8"
            >
                Discover more actors{" "}
                <FaLongArrowAltRight className="w-4 md:w-8 h-4 md:h-8 group-hover:translate-x-1 transition-all duration-300" />
            </Link>
        </>
    );
}

export default ActorsClient;
