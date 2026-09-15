import { FaStar } from "react-icons/fa";
import WatchListDiscoverMoreBtn from "./WatchListDiscoverMoreBtn";
import { BsCalendarDate } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

function WatchListBox({ items, onDiscoverMore, loadingMore }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {items.map((item) => (
                <Link
                    href={`/movies/${item.title}`}
                    key={item.id}
                    className="flex gap-2 md:gap-3 items-center"
                >
                    <div className="relative w-18 h-24 rounded-sm overflow-hidden bg-cream-300 dark:bg-night-800 flex items-center justify-center">
                        <Image
                            fill
                            unoptimized
                            src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                            alt={item.title}
                            className="object-cover text-night-700/70 dark:text-cream-50/50"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="text-night-700 dark:text-cream-50 font-medium text-sm leading-3.5 mb-2">
                            {item.title || item.name}
                        </p>
                        <p className="flex items-center text-amber-500 gap-1 text-[0.7rem] text-night-700/70 dark:text-cream-50/50">
                            <FaStar className="w-3 h-3 text-amber-500" />{" "}
                            {item.vote_average?.toFixed(1)}
                        </p>
                        <p className="flex items-center gap-1 text-[0.7rem] text-night-700/60 dark:text-cream-50/60">
                            <BsCalendarDate className="w-3 h-3" />
                            {(item.release_date || item.first_air_date)?.slice(
                                0,
                                4,
                            )}
                        </p>
                    </div>
                </Link>
            ))}

            <WatchListDiscoverMoreBtn
                onClick={onDiscoverMore}
                loading={loadingMore}
            />
        </div>
    );
}

export default WatchListBox;
