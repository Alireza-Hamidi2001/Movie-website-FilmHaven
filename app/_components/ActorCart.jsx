import { michroma } from "@/app/layout";
import Link from "next/link";
import { FaBirthdayCake, FaFilm, FaMapMarkerAlt } from "react-icons/fa";

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
    const posterUrl = actorSelected.profile_path
        ? `https://image.tmdb.org/t/p/w500${actorSelected.profile_path}`
        : null;

    const cast = actorSelected.movie_credits?.cast?.slice(0, 12) || [];
    const age = getAge(actorSelected.birthday);
    const bio = actorSelected.biography || "";
    const bioIsLong = bio.length > 320;

    return (
        <div className="mt-16 min-h-[calc(100vh-4rem)] text-night-700 dark:text-cream-50 md:grid md:grid-cols-[1fr_2fr]">
            {/* پوستر: sticky روی دسکتاپ، بالای صفحه روی موبایل */}
            <div className="relative h-[80vh] md:h-[60vh] lg:h-[calc(100vh-4rem)] lg:sticky lg:top-16">
                {posterUrl ? (
                    <img
                        src={posterUrl}
                        alt={actorSelected.name}
                        className="w-full h-full object-cover object-top"
                    />
                ) : (
                    <div className="w-full h-full bg-night-800 flex items-center justify-center text-cream-50/40">
                        No image
                    </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-night-950/0" />

                <div className="absolute bottom-0 left-0 p-6 lg:hidden">
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

            {/* محتوا */}
            <div className="px-2 py-8 md:px-6 lg:px-12 lg:py-12 max-w-4xl">
                <div className="hidden lg:block mb-6">
                    <h1 className={`${michroma.className} text-3xl`}>
                        {actorSelected.name}
                    </h1>
                    <p className="text-night-700/70 dark:text-cream-50/50 text-sm mt-2 font-medium">
                        {actorSelected.known_for_department}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center md:self-start gap-1 md:gap-3 mb-8">
                    {actorSelected.birthday && (
                        <div className="flex items-center gap-2 text-sm bg-cream-200 dark:bg-night-900 rounded-full px-2 py-1 md:px-4 md:py-2">
                            <FaBirthdayCake style={{ color: GOLD }} />
                            <span>
                                {formatDate(actorSelected.birthday)}
                                {age !== null && (
                                    <span className="text-night-700/60 dark:text-cream-50/50">
                                        {" "}
                                        &middot; {age} yrs
                                    </span>
                                )}
                            </span>
                        </div>
                    )}

                    {actorSelected.place_of_birth && (
                        <div className="flex items-center gap-2 text-sm bg-cream-200 dark:bg-night-900 rounded-full px-2 py-1 md:px-4 md:py-2">
                            <FaMapMarkerAlt style={{ color: GOLD }} />
                            <span>{actorSelected.place_of_birth}</span>
                        </div>
                    )}
                </div>

                {bio && (
                    <div className="mb-10">
                        <h2
                            className={`${michroma.className} text-sm uppercase text-night-700/70 dark:text-cream-50/50 tracking-wide mb-3`}
                        >
                            Biography
                        </h2>
                        <p className="text-[0.9rem] md:text-[1rem] leading-5 text-night-700 dark:text-cream-50 whitespace-pre-line transition-all">
                            {bio}
                        </p>
                    </div>
                )}

                {cast.length > 0 && (
                    <div>
                        <h2
                            className={`${michroma.className} text-night-700/70 dark:text-cream-50/50 text-sm uppercase tracking-wide mb-4 flex items-center gap-2`}
                        >
                            <FaFilm /> Known For
                        </h2>

                        <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 md:-mx-10 md:px-10 lg:mx-0 lg:px-0 scrollbar-thin">
                            {cast.map((movie) => (
                                <Link
                                    href={`/movies/${movie.title}`}
                                    key={movie.credit_id || movie.id}
                                    className="flex-shrink-0 w-28 group cursor-pointer"
                                >
                                    <div
                                        className="w-28 h-40 rounded-lg overflow-hidden bg-night-800 ring-1 ring-cream-50/10 group-hover:ring-2 transition-all duration-300"
                                        style={{ "--tw-ring-color": GOLD }}
                                    >
                                        {movie.poster_path ? (
                                            <img
                                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                                alt={movie.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-cream-50/30 text-xs p-2 text-center">
                                                {movie.title}
                                            </div>
                                        )}
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
