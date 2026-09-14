import { getTopRated } from "@/lib/tmdb";
import WatchListClient from "./WatchListClient";

async function WatchListServer() {
    const [movies, tvShows] = await Promise.all([
        getTopRated("movie", 40),
        getTopRated("tv", 40),
    ]);
    // console.log('---------movies:**********' , movies);
    // console.log("---------tvShows:**********", tvShows);

    return (
        <>
            <WatchListClient
                movies={movies}
                tvShows={tvShows}
            />
        </>
    );
}

export default WatchListServer;
