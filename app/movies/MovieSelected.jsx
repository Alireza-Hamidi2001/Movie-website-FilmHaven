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
        <div className="relative mt-[4rem] min-h-[calc(100vh-4rem)] w-full shadow-xl overflow-hidden md:flex">
            <p className="absolute top-4 right-4 rounded-full px-2 bg-green-200 text-green-900">
                {status}
            </p>
            <div className="relative h-[90vh] md:max-w-[50vw] mx-auto md:h-[calc(100vh-4rem)] md:sticky md:top-16">
                {posterUrl ? (
                    <img
                        src={posterUrl}
                        alt={movieSelected.name}
                        className="w-full h-full object-cover "
                    />
                ) : (
                    <div className="w-full h-full bg-night-800 flex items-center justify-center text-cream-50/40">
                        No image
                    </div>
                )}

                {/* گرادیان پایین برای حالت دسکتاپ (نام پایین‌چپ) */}
                <div className="absolute inset-0 bg-linear-to-t from-night-950 via-night-950/10 to-transparent lg:from-night-950 lg:via-night-950/10 lg:to-transparent" />
                {/* گرادیان بالا برای حالت موبایل/تبلت کوچک (نام بالا‌چپ) */}
                <div className="absolute inset-0 bg-linear-to-b from-night-950/70 via-transparent to-transparent lg:hidden" />

                {/* نام و حرفه بازیگر - همیشه روی خود عکس */}
                <div className="absolute left-0 p-6 top-0 lg:top-auto lg:bottom-0">
                    <h1
                        className={`${michroma.className} text-2xl text-cream-50 drop-shadow-lg`}
                    >
                        {movieSelected.name}
                    </h1>
                    <p
                        className="text-sm mt-1"
                    >
                        {movieSelected.known_for_department}
                    </p>
                </div>
            </div>
            {/* <div className="relative md:w-2/5">
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
            </div> */}

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

                <div className="grid grid-cols-1 text-night-700 dark:text-cream-50 items-center gap-1 md:gap-2">
                    <p className="bg-yellow-500 max-w-fit text-black font-bold px-2 md:px-4 py-1 rounded-md text-[1rem]">
                        ★ {movieSelected.vote_average?.toFixed(1)}
                    </p>
                    <p className="flex items-center  gap-1 text-[0.9rem] text-night-700/70 dark:text-cream-50/50 bg-cream-50 dark:bg-night-900 rounded-sm w-full md:max-w-fit px-2 md:px-4 py-2 border border-cream-300 dark:border-night-800">
                        {movieSelected.vote_count} vote
                    </p>
                    <p className="flex items-center  gap-1 text-[0.9rem] text-night-700/70 dark:text-cream-50/50 bg-cream-50 dark:bg-night-900 rounded-sm w-full md:max-w-fit px-2 md:px-4 py-2 border border-cream-300 dark:border-night-800">
                        <BsCalendarDate className="text-yellow-700 w-6 h-6" />{" "}
                        {movieSelected.release_date}
                    </p>
                    <p className="flex items-center  gap-1 text-[0.9rem] text-night-700/70 dark:text-cream-50/50 bg-cream-50 dark:bg-night-900 rounded-sm w-full md:max-w-fit px-2 md:px-4 py-2 border border-cream-300 dark:border-night-800">
                        <IoMdTime className="text-yellow-700 w-6 h-6" />{" "}
                        {movieSelected.runtime} min
                    </p>
                    <p className="flex items-center  gap-1 text-[0.9rem] text-night-700/70 dark:text-cream-50/50 bg-cream-50 dark:bg-night-900 rounded-sm w-full md:max-w-fit px-2 md:px-4 py-2 border border-cream-300 dark:border-night-800">
                        <BiWorld className="text-yellow-700 w-6 h-6" />{" "}
                        {movieSelected.production_countries
                            ?.map((country) => country.name)
                            .join(", ")}
                    </p>
                    <p className="flex items-center  gap-1 text-[0.9rem] text-night-700/70 dark:text-cream-50/50 bg-cream-50 dark:bg-night-900 rounded-sm w-full md:max-w-fit px-2 md:px-4 py-2 border border-cream-300 dark:border-night-800">
                        <MdOutlineSpatialAudioOff className="text-yellow-700 w-6 h-6" />{" "}
                        {movieSelected.spoken_languages
                            ?.map((language) => language.english_name)
                            .join(", ")}
                    </p>
                </div>

                <div className="text-night-700 dark:text-cream-50 flex flex-col md:flex-row md:items-center flex-wrap gap-2">
                    <h2
                        className={`${michroma.className} text-sm uppercase text-night-700/70 dark:text-cream-50/50 tracking-wide`}
                    >
                        Genre :
                    </h2>
                    {movieSelected.genres?.map((genre) => (
                        <p
                            key={genre.id}
                            className="flex items-center  gap-1 text-[0.9rem] text-night-700/90 dark:text-cream-50/70 bg-cream-50 dark:bg-night-900 rounded-sm w-full md:max-w-fit px-2 md:px-4 py-1 md:py-2 border border-cream-300 dark:border-night-800 max-w-fit"
                        >
                            {genre.name}
                        </p>
                    ))}
                </div>

                <p className="text-[1rem] text-night-700 dark:text-cream-50 leading-relaxed">
                    {movieSelected.overview}
                </p>

                {director && (
                    <div className="text-sm">
                        <h2
                            className={`${michroma.className} text-sm uppercase text-night-700/70 dark:text-cream-50/50 tracking-wide mt-3 mb-1`}
                        >
                            Director :
                        </h2>
                        <span className="text-[1.2rem] text-night-700 dark:text-cream-50 font-medium">
                            {director.name}
                        </span>
                    </div>
                )}

                {cast.length > 0 && (
                    <div className="overflow-auto">
                        <h2
                            className={`${michroma.className} text-sm uppercase text-night-700/70 dark:text-cream-50/50 tracking-wide mt-3 mb-1`}
                        >
                            Actors :
                        </h2>
                        <div className="flex flex-wrap gap-1 md:gap-2">
                            {cast.map((actor) => (
                                <span
                                    key={actor.id}
                                    className="text-[0.8rem] text-night-700/90 dark:text-cream-50/70 bg-cream-50 dark:bg-night-900 rounded-sm px-2 md:px-4 py-2 border border-cream-300 dark:border-night-800"
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
