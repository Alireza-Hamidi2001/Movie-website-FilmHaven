import spiderman_image from "@/public/spiderman.png";
import FilterTopMovies from "./FilterTopMovies";
import Image from "next/image";

function TopMovies() {
    // change
    const filter = [];

    const top_movies = [
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
    ];
    return (
        <section className="grid grid-cols-1 gap-2 rounded-xl bg-cream-200 dark:bg-night-900 border border-night-700/20 dark:border-cream-50/10 p-4">
            <h1 className="text-night-700 dark:text-cream-50 font-bold">
                What do you want to watch ?
            </h1>
            <FilterTopMovies />
            <div className="grid grid-cols-5 gap-4">
                {top_movies.map((movie) => (
                    <div key={movie.id}>
                        <div className="relative w-full h-[10rem]">
                            <Image
                                src={movie.image}
                                alt={movie.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-night-700 dark:text-cream-50">{movie.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TopMovies;
