import { Suspense } from "react";
import Spinner from "../../Spinner";
import LatestMovieServer from "./LatestMovieServer";

function LatestMovie() {
    return (
        <section className="max-h-[70vh] overflow-auto grid grid-cols-1 gap-2 rounded-xl bg-cream-200 dark:bg-night-900 border border-night-700/20 dark:border-cream-50/10 p-4">
            <h1 className="text-[1.4rem] max-h-fit text-night-700 dark:text-cream-50 font-bold">
                Discover the latest releases movies.
            </h1>
            <Suspense fallback={<Spinner />}>
                <LatestMovieServer />
            </Suspense>
        </section>
    );
}

export default LatestMovie;
