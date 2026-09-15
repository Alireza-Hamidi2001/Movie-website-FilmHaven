import Link from "next/link";
import { FaStar } from "react-icons/fa";

function LatestBox({ items }) {
    return (
        <div className="overflow-auto grid grid-cols-2 md:grid-cols-5 gap-4">
            {items.map((item) => (
                <Link
                    href={`/movies/${item.title}`}
                    key={item.id}
                    className="flex flex-col gap-3 items-center"
                >
                    <img
                        src={
                            item.poster_path
                                ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                                : "https://via.placeholder.com/60x90?text=No+Image"
                        }
                        alt={item.title || item.name}
                        className="w-full  md:w-32 w-full  md:h-38 object-cover rounded-md"
                    />
                    <div className="flex-1 text-center">
                        <p className="text-night-700 dark:text-cream-50 font-medium text-[1.2rem] md:text-[1.4rem] leading-3.5 mb-2">
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
