"use client";

function FilterWatchList({ active, onChange }) {
    return (
        <div className="my-3 grid grid-cols-4 mx-2 md:mx-1 gap-1 text-center">
            <p
                onClick={() => onChange("movie")}
                className={`dark:text-cream-50 py-1 px-3 rounded-full cursor-pointer transition ${
                    active === "movie"
                        ? "bg-blue-700 text-cream-50"
                        : "bg-black/15 dark:bg-white/20 text-night-700"
                }`}
            >
                Movie
            </p>
            <p
                onClick={() => onChange("tv")}
                className={`dark:text-cream-50 py-1 px-3 rounded-full cursor-pointer transition ${
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
