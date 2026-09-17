import { Suspense } from "react";
import Spinner from "../../Spinner";
import WatchListServer from "./WatchListServer";

async function WatchList() {
    return (
        <section className="relative overflow-auto grid grid-cols-1 gap-2 rounded-xl bg-cream-100 dark:bg-night-900 border border-night-700/20 dark:border-cream-50/10 p-2 md:p-4">
            <h1 className="text-[1.1rem] leading-5 md:text-[1.4rem] md:leading-relaxed text-night-700 dark:text-cream-50 py-3">
                Most popular and top rated TV serials , movies in history
            </h1>
            <Suspense fallback={<Spinner />}>
                <WatchListServer />
            </Suspense>
        </section>
    );
}

export default WatchList;
