import { michroma } from "@/app/layout";
import LatestMovie from "./latestMovieSection/LatestMovie";
import WatchList from "./watchListSection/WatchList";

function Recommendation() {
    return (
        <section className="relative my-10 p-2 md:p-8">
            <h1
                className={`${michroma.className} text-night-700 dark:text-cream-50 text-center text-[1.4rem] leading-7 md:text-[2rem] md:leading-relaxed`}
            >
                Top Recommendations for every category
            </h1>
            <h2 className="text-night-700/50 dark:text-cream-50/50 text-[1rem] leading-4 md:text-[1.4rem] md:leading-6 mx-auto text-center max-w-2xl my-10">
                Discover movies and shows selected based on your ratings and
                your friends preferences.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <WatchList />
                <LatestMovie />
            </div>
        </section>
    );
}

export default Recommendation;
