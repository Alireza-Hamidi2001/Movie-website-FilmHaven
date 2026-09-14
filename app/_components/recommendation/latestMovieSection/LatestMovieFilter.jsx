"use client";

import { GENRES } from "../../variables";

function LatestMovieFilter({ active, onChange }) {
    return (
        <div className="max-h-fit my-3 flex gap-1 flex-wrap">
            {GENRES.map((g) => (
                <p
                    key={g.id}
                    onClick={() => onChange(g.id)}
                    className={`dark:text-cream-50 px-3 rounded-full cursor-pointer transition text-sm ${
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
