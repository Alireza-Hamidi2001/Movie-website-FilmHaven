import Image from "next/image";
import Link from "next/link";
import { FaImage, FaStar } from "react-icons/fa";

function LatestBox({ items }) {
    return (
        <div className="overflow-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((item) => (
                <Link
                    href={`/movies/${item.id}`}
                    key={item.id}
                    className="flex flex-col gap-3 items-center"
                >
                    <div className="relative w-32 h-48 rounded-md overflow-hidden bg-cream-300 dark:bg-night-800 flex items-center justify-center">
                        {item.poster_path ? (
                            <Image
                                fill
                                unoptimized
                                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                                alt={item.title}
                                className="object-cover text-night-700/70 dark:text-cream-50/50"
                            />
                        ) : (
                            <div className="absolute flex items-center justify-center w-full h-full bg-cream-300 dark:bg-night-950 ">
                                <FaImage className="w-10 h-10 text-night-700 dark:text-cream-50"/>
                            </div>
                        )}
                    </div>
                    <div className="flex-1 text-center">
                        <p className="text-night-700 dark:text-cream-50 font-medium text-[1.2rem] leading-5 mb-2">
                            {item.title || item.name}
                        </p>
                        <p className="flex items-center  gap-1 text-night-700/70 dark:text-cream-50/50 text-xs">
                            <FaStar className="w-5 h-5 text-amber-500" />{" "}
                            {item.vote_average?.toFixed(1)} &mdash;{" "}
                            {(item.release_date || item.first_air_date)?.slice(
                                0,
                                4,
                            )}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default LatestBox;
