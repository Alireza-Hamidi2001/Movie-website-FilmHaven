import { michroma } from "@/app/layout";
import TopMovies from "./TopMovies";
import WatchList from "./WatchList";

function Recommendation() {
    return (
        <section className="my-10 p-8">
            <h1
                className={`${michroma.className} text-night-700 dark:text-cream-50 text-center text-[1.8rem]`}
            >
                Top Recommendations for every category
            </h1>
            <h2 className="text-night-700/50 dark:text-cream-50/50 text-[1.2rem] mx-auto text-center max-w-xl my-4 leading-5">
                Discover movies and shows selected based on your ratings and
                your friends preferences.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <WatchList />
                <TopMovies />
            </div>
        </section>
    );
}

export default Recommendation;
