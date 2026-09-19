import { Suspense } from "react";
import Spinner from "../../Spinner";
import LatestMovieServer from "./LatestMovieServer";

function LatestMovie() {
    return (
        <section className="relative overflow-auto grid grid-cols-1 gap-2 rounded-xl bg-cream-100/10 backdrop-blur-sm dark:bg-night-900 border border-night-700/10 dark:border-cream-50/10 p-2 md:p-4">
            <h1 className="text-[1.1rem] leading-5 md:text-[1.4rem] md:leading-relaxed text-night-700 dark:text-cream-50 py-3">
                Discover the latest releases movies.
            </h1>
            <Suspense fallback={<Spinner />}>
                <LatestMovieServer />
            </Suspense>
        </section>
    );
}

export default LatestMovie;
