import { FaStar } from "react-icons/fa";
import WatchListDiscoverMoreBtn from "./WatchListDiscoverMoreBtn";
import { BsCalendarDate } from "react-icons/bs";

function WatchListBox({ items, onDiscoverMore, loadingMore }) {
    return (
        <div className="grid grid-cols-3 gap-2">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="flex gap-3 items-center"
                >
                    <img
                        src={
                            item.poster_path
                                ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                                : "https://via.placeholder.com/60x90?text=No+Image"
                        }
                        alt={item.title || item.name}
                        className="w-18 h-24 object-cover rounded-md"
                    />
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
                </div>
            ))}

            <WatchListDiscoverMoreBtn
                onClick={onDiscoverMore}
                loading={loadingMore}
            />
        </div>
    );
}

export default WatchListBox;
