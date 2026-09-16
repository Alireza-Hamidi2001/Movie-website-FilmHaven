"use client";

import { GENRES } from "./variables";

function LatestMovieFilter({ active, onChange }) {
    return (
        <aside
            className="sticky top-[4rem] h-[calc(100vh-4rem)] 
            flex flex-col gap-1 
            bg-red-400 overflow-y-auto p-3"
        >
            <div className="flex md:flex-col flex-wrap gap-1">
                {GENRES.map((g) => (
                    <p
                        key={g.id}
                        onClick={() => onChange(g.id)}
                        className={`dark:text-cream-50 px-3 py-1 rounded-full cursor-pointer 
                            transition text-sm whitespace-nowrap ${
                                active === g.id
                                    ? "bg-blue-700 text-cream-50"
                                    : "bg-black/15 dark:bg-white/20 text-night-700"
                            }`}
                    >
                        {g.label}
                    </p>
                ))}
            </div>
        </aside>
    );
}

export default LatestMovieFilter;
