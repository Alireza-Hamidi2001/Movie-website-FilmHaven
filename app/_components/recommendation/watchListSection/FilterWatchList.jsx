"use client";

function FilterWatchList({ active, onChange }) {
    return (
        <div className="flex gap-1 h-fit my-3">
            <p
                onClick={() => onChange("movie")}
                className={`dark:text-cream-50 px-3 rounded-full cursor-pointer transition ${
                    active === "movie"
                        ? "bg-blue-700 text-cream-50"
                        : "bg-black/15 dark:bg-white/20 text-night-700"
                }`}
            >
                Movie
            </p>
            <p
                onClick={() => onChange("tv")}
                className={`dark:text-cream-50 px-3 rounded-full cursor-pointer transition ${
                    active === "tv"
                        ? "bg-blue-700 text-cream-50"
                        : "bg-black/15 dark:bg-white/20 text-night-700"
                }`}
            >
                TV serial
            </p>
        </div>
    );
}

export default FilterWatchList;
