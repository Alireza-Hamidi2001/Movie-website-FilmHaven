import Image from "next/image";
import FilterWatchList from "./FilterWatchList";
import spiderman_image from "@/public/spiderman.png";
import { FaStar } from "react-icons/fa";

function WatchList() {
    // change
    const filter = [];
    const demo_movies = [
        {
            id: 1,
            image: spiderman_image,
            name: "Spiderman",
            rate: 86,
            category: "comedy",
        },
        {
            id: 2,
            image: spiderman_image,
            name: "Starwars",
            rate: 94,
            category: "Action",
        },
        {
            id: 3,
            image: spiderman_image,
            name: "Starwars",
            rate: 94,
            category: "Action",
        },
        {
            id: 4,
            image: spiderman_image,
            name: "Starwars",
            rate: 94,
            category: "Action",
        },
    ];
    return (
        <section className="grid grid-cols-1 gap-2 rounded-xl bg-cream-200 dark:bg-night-900 border border-night-700/20 dark:border-cream-50/10 p-4">
            <h1 className="text-night-700 dark:text-cream-50 font-bold">
                Most popular serials in history
            </h1>
            <FilterWatchList />
            {demo_movies.map((movie) => (
                <div
                    key={movie.id}
                    className="flex items-center gap-4 bg-cream-300 dark:bg-night-800 p-2 rounded-lg"
                >
                    <div className="relative w-12 h-15">
                        <Image
                            src={movie.image}
                            alt={movie.name}
                            fill
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-2 mr-auto">
                        <h2 className="text-[1.2rem] text-night-900 dark:text-cream-50 ">
                            {movie.name}
                        </h2>
                        <p className="text-[0.9rem] text-night-700/70 dark:text-cream-50/50">
                            {movie.category}
                        </p>
                        <div className="flex items-center text-amber-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                    <p className="flex items-center justify-center bg-cream-100 dark:bg-night-900 text-night-700 dark:text-cream-50 w-8 h-8 rounded-full">
                        {movie.rate}
                    </p>
                </div>
            ))}
        </section>
    );
}

export default WatchList;
