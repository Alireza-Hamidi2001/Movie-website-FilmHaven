import { getMovieDetails } from "@/lib/tmdb";
import Image from "next/image";
import { BiWorld } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { MdOutlineSpatialAudioOff } from "react-icons/md";
import { michroma } from "../layout";

export default async function MovieSelected({ movieSelected }) {
    const director = movieSelected.credits?.crew?.find(
        (person) => person.job === "Director",
    );
    const cast = movieSelected.credits?.cast?.slice(0, 9) || [];
    const status = movieSelected.status;
    const posterUrl = movieSelected.poster_path
        ? `https://image.tmdb.org/t/p/w500${movieSelected.poster_path}`
        : null;

    return (
        <div className="relative mt-[4rem] min-h-[calc(100vh-4rem)] w-full bg-cream-200 dark:bg-night-800 shadow-xl overflow-hidden md:flex">
            <p className="absolute top-4 right-4 rounded-full px-2 bg-green-200 text-green-900">
                {status}
            </p>
            <div className="relative md:w-2/5">
                <div className="absolute top-0 left-0 w-full h-full"></div>
                {posterUrl ? (
                    <img
                        src={posterUrl}
                        alt={movieSelected.title}
                        className="object-cover w-full h-full"
                    />
                ) : (
                    <div className="w-full h-96 bg-gray-800 flex items-center justify-center text-gray-500">
                        No image
                    </div>
                )}
            </div>

            <div className="md:w-2/3 px-10 p-6 text-gray-100 flex flex-col gap-4">
                <div>
                    <h1 className="text-night-700 dark:text-cream-50 text-[3rem] font-bold leading-11">
                        {movieSelected.title}
                    </h1>
                    {movieSelected.tagline && (
                        <p className="text-sm text-gray-400 italic mt-1">
                            {movieSelected.tagline}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-2 text-night-700 dark:text-cream-50 items-center gap-2">
                    <p className="bg-yellow-500 max-w-fit text-black font-bold px-2 py-1 rounded-md text-[1rem]">
                        ★ {movieSelected.vote_average?.toFixed(1)}
                    </p>
                    <p className="flex items-center  gap-1 text-[0.9rem] text-night-700/70 dark:text-cream-50/50 bg-cream-50 dark:bg-night-900 rounded-sm max-w-fit px-4 py-2 border border-cream-300 dark:border-night-800">
                        {movieSelected.vote_count} vote
                    </p>
                    <p className="flex items-center  gap-1 text-[0.9rem] text-night-700/70 dark:text-cream-50/50 bg-cream-50 dark:bg-night-900 rounded-sm max-w-fit px-4 py-2 border border-cream-300 dark:border-night-800">
                        <BsCalendarDate className="text-yellow-700" />{" "}
                        {movieSelected.release_date}
                    </p>
                    <p className="flex items-center  gap-1 text-[0.9rem] text-night-700/70 dark:text-cream-50/50 bg-cream-50 dark:bg-night-900 rounded-sm max-w-fit px-4 py-2 border border-cream-300 dark:border-night-800">
                        <IoMdTime className="text-yellow-700" />{" "}
                        {movieSelected.runtime} min
                    </p>
                    <p className="flex items-center  gap-1 text-[0.9rem] text-night-700/70 dark:text-cream-50/50 bg-cream-50 dark:bg-night-900 rounded-sm max-w-fit px-4 py-2 border border-cream-300 dark:border-night-800">
                        <BiWorld className="text-yellow-700" />{" "}
                        {movieSelected.production_countries
                            ?.map((country) => country.name)
                            .join(", ")}
                    </p>
                    <p className="flex items-center  gap-1 text-[0.9rem] text-night-700/70 dark:text-cream-50/50 bg-cream-50 dark:bg-night-900 rounded-sm max-w-fit px-4 py-2 border border-cream-300 dark:border-night-800">
                        <MdOutlineSpatialAudioOff className="text-yellow-700" />{" "}
                        {movieSelected.spoken_languages
                            ?.map((language) => language.english_name)
                            .join(", ")}
                    </p>
                </div>

                <div className="text-night-700 dark:text-cream-50 flex items-center flex-wrap gap-2">
                    <h2
                        className={`${michroma.className} text-sm uppercase text-night-700/70 dark:text-cream-50/50 tracking-wide`}
                    >
                        Genre :
                    </h2>
                    {movieSelected.genres?.map((genre) => (
                        <p
                            key={genre.id}
                            className="flex items-center text-xs bg-cream-50 dark:bg-night-950 border border-cream-300 dark:border-night-800 py-1 rounded-full px-3"
                        >
                            {genre.name}
                        </p>
                    ))}
                </div>

                <p className="text-[1rem] text-night-700 dark:text-cream-50 leading-relaxed">
                    {movieSelected.overview}
                </p>

                {director && (
                    <p className="text-sm">
                        <h2
                            className={`${michroma.className} text-sm uppercase text-night-700/70 dark:text-cream-50/50 tracking-wide mt-3 mb-1`}
                        >
                            Director :
                        </h2>
                        <span className="text-[1.2rem] text-night-700 dark:text-cream-50 font-medium">
                            {director.name}
                        </span>
                    </p>
                )}

                {cast.length > 0 && (
                    <div className="overflow-auto">
                        <h2
                            className={`${michroma.className} text-sm uppercase text-night-700/70 dark:text-cream-50/50 tracking-wide mt-3 mb-1`}
                        >
                            Actors :
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {cast.map((actor) => (
                                <span
                                    key={actor.id}
                                    className="text-[0.9rem] text-night-700 dark:text-cream-50 bg-cream-300 dark:bg-night-900 rounded-md px-2 py-1"
                                >
                                    {actor.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
