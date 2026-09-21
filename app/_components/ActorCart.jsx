import { michroma } from "@/app/layout";
import Link from "next/link";
import {
    FaBirthdayCake,
    FaFilm,
    FaMapMarkerAlt,
    FaRegImage,
} from "react-icons/fa";

const GOLD = "#E8B463";

function getAge(birthday) {
    if (!birthday) return null;
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }
    return age;
}

function formatDate(dateStr) {
    if (!dateStr) return null;
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function ActorCart({ actorSelected }) {
    console.log(actorSelected);
    const posterUrl = actorSelected.profile_path
        ? `https://image.tmdb.org/t/p/w500${actorSelected.profile_path}`
        : null;

    const cast = actorSelected.movie_credits?.cast?.slice(0, 12) || [];
    const age = getAge(actorSelected.birthday);
    const bio = actorSelected.biography || "";

    return (
        <div className="mt-16 min-h-[calc(100vh-4rem)] text-night-700 dark:text-cream-50 md:grid md:grid-cols-1  lg:grid-cols-[2fr_3fr]">
            <div className="relative h-[80vh] max-w-[85vw] md:max-w-[50vw] mx-auto md:h-[calc(100vh-4rem)] md:sticky md:top-16">
                {posterUrl ? (
                    <img
                        src={posterUrl}
                        alt={actorSelected.name}
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

                <div className="absolute left-0 p-6 top-0 lg:top-auto lg:bottom-0">
                    <h1
                        className={`${michroma.className} text-2xl text-cream-50 drop-shadow-lg`}
                    >
                        {actorSelected.name}
                    </h1>
                    <p
                        className="text-sm mt-1"
                        style={{ color: GOLD }}
                    >
                        {actorSelected.known_for_department}
                    </p>
                </div>
            </div>

            {/* personal info content box */}
            <div className="px-2 md:px-6 py-8 lg:px-10 lg:py-12 max-w-4xl">
                <div className="flex flex-wrap justify-center md:self-start gap-1 md:gap-3 mb-8">
                    {actorSelected.birthday && (
                        <div className="flex items-center gap-2 text-sm bg-cream-300 dark:bg-night-800 rounded-full px-4 py-2">
                            <FaBirthdayCake style={{ color: GOLD }} />
                            <span>
                                {formatDate(actorSelected.birthday)}
                                {/* {age !== null && (
                                    <span className="text-night-700/60 dark:text-cream-50/50">
                                        {" "}
                                        &middot; {age} yrs
                                    </span>
                                )} */}
                            </span>
                        </div>
                    )}

                    {actorSelected.place_of_birth && (
                        <div className="flex items-center gap-2 text-sm bg-cream-300 dark:bg-night-800 rounded-full px-4 py-2">
                            <FaMapMarkerAlt style={{ color: GOLD }} />
                            <span>{actorSelected.place_of_birth}</span>
                        </div>
                    )}
                </div>

                <div className="mb-10">
                    {bio ? (
                        <>
                            <h2
                                className={`${michroma.className} text-[1rem] uppercase text-night-700/70 dark:text-cream-50/50 tracking-wide mb-3`}
                            >
                                Biography
                            </h2>
                            <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] md:leading-8 leading-6 text-night-700 dark:text-cream-50/80 whitespace-pre-line transition-all">
                                {bio}
                            </p>
                        </>
                    ) : (
                        <h2 className="text-[1rem] uppercase text-night-700/70 dark:text-cream-50/50 tracking-wide mb-3">
                            &bull; There is no other information about
                            <span className="text-[1.4rem] font-semibold">
                                {actorSelected.name}
                            </span>
                        </h2>
                    )}
                </div>

                {cast.length > 0 && (
                    <div>
                        <h2
                            className={`${michroma.className} text-night-700/70 dark:text-cream-50/50 text-[1.4rem] uppercase tracking-wide mb-4 flex items-center gap-2`}
                        >
                            <FaFilm /> Known For
                        </h2>

                        <div className="grid grid-cols-3 gap-2 md:flex md:gap-4 overflow-x-auto pb-2  md:-mx-10 md:px-10 lg:mx-0 lg:px-0 scrollbar-thumb-amber-50">
                            {cast.map((movie) => (
                                <Link
                                    href={`/movies/${movie.id}`}
                                    key={movie.credit_id || movie.id}
                                    className="flex-shrink-0 text-center md:w-28 group cursor-pointer"
                                >
                                    <div className="relative w-fit h-28 md:w-28 md:h-40 rounded-sm overflow-hidden bg-night-800 mx-auto md:mx-0 ring-1 ring-cream-50/10 group-hover:ring-2 transition-all duration-300">
                                        {/* <div className="relative z-0 w-15 h-15 overflow-hidden rounded-full"> */}
                                        {!movie.poster_path && (
                                            <div className="absolute flex items-center justify-center text-sm top-0 bg-cream-300 dark:bg-night-700 z-10 w-full h-full">
                                                <FaRegImage className="w-7 h-7" />
                                            </div>
                                        )}
                                        <img
                                            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                                            alt="writer image"
                                            className=" w-full h-full bg-cream-300 dark:bg-night-700 object-cover object-center"
                                        />
                                    </div>
                                    <p className="text-xs mt-2 leading-tight line-clamp-2 text-night-700/80 dark:text-cream-50/70">
                                        {movie.title}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ActorCart;
