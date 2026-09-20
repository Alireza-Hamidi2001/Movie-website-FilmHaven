"use client";

import { GENRES } from "../../variables";

function LatestMovieFilter({ active, onChange }) {
    return (
        <div className="my-3 grid grid-cols-4 mx-2 md:mx-1 md:grid-cols-6 lg:grid-cols-7 gap-1 text-center">
            {GENRES.map((g) => (
                <p
                    key={g.id}
                    onClick={() => onChange(g.id)}
                    className={`dark:text-cream-50 py-1  px-3 rounded-full cursor-pointer transition text-[0.7rem] md:text-sm ${
                        active === g.id
                            ? "bg-blue-700 text-cream-50"
                            : "bg-black/15 dark:bg-white/20 text-night-700"
                    }`}
                >
                    {g.label}
                </p>
            ))}
        </div>
    );
}

export default LatestMovieFilter;
