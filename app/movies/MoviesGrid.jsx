import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineLanguage } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import MoviesPagination from "./MoviesPagination";
import { getGenres } from "../api/movies/genre/getGenres";
import Link from "next/link";

async function getMovies(page = 1) {
    const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&include_adult=false&language=en-US&page=${page}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
                accept: "application/json",
            },
            next: { revalidate: 3600 },
        },
    );

    const data = await res.json();
    return {
        movies: data.results?.slice(0, 12) || [],
        totalPages: Math.min(data.total_pages, 500),
    };
}

export default async function MoviesGrid({ page }) {
    const [{ movies, totalPages }, genres] = await Promise.all([
        getMovies(page),
        getGenres(),
    ]);
    const genreMap = Object.fromEntries(genres.map((g) => [g.id, g.name]));

    console.log(movies[4].title);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {movies.map((movie) => (
                    <Link
                        href={`/movies/${movie.title}`}
                        key={movie.id}
                        className="flex flex-col text-night-700 dark:text-cream-50 bg-cream-300 dark:bg-night-900 rounded-xl"
                    >
                        <div className="w-full h-96 overflow-hidden">
                            <img
                                src={
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                                        : "https://via.placeholder.com/400x600?text=No+Image"
                                }
                                alt={movie.title}
                                className="object-cover hover:scale-110 transition-all duration-300 cursor-pointer"
                            />
                        </div>
                        <div className="p-3 flex flex-col gap-2">
                            <h2 className="text-[1rem] font-semibold leading-tight">
                                {movie.title}
                            </h2>
                            <div className="relative flex flex-col gap-1 mt-1">
                                <div className="text-[0.8rem] text-night-700/70 dark:text-cream-50/50 flex items-center justify-between gap-2">
                                    <p className="flex items-center gap-1">
                                        <BsCalendarDate /> Release date
                                    </p>
                                    <p>
                                        {movie.release_date?.slice(0, 4) || "—"}
                                    </p>
                                </div>
                                <div className="text-[0.8rem] text-night-700/70 dark:text-cream-50/50 flex items-center justify-between gap-2">
                                    <p className="flex items-center gap-1">
                                        <MdOutlineLanguage /> Language
                                    </p>
                                    <p className="uppercase">
                                        {movie.original_language}
                                    </p>
                                </div>
                                <div className="text-[0.8rem] text-night-700/70 dark:text-cream-50/50 flex items-center justify-between gap-2">
                                    <p className="flex items-center gap-1">
                                        <FaStar className="text-amber-500" />{" "}
                                        Rating
                                    </p>
                                    <p>{movie.vote_average?.toFixed(1)}</p>
                                </div>
                                <p className="my-4 text-[0.75rem] text-night-700/60 dark:text-cream-50/40 flex flex-wrap gap-1 mt-1">
                                    {movie.genre_ids.slice(0, 4).map((id) => (
                                        <span
                                            key={id}
                                            className="bg-cream-50 dark:bg-night-700 text-night-700 dark:text-cream-50 px-2 py-0.5 rounded-full"
                                        >
                                            {genreMap[id]}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* فقط یک pagination اینجا */}
            <MoviesPagination
                currentPage={page}
                totalPages={totalPages}
            />
        </>
    );
}
