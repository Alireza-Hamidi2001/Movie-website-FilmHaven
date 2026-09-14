// LatestMovieServer.jsx
import { getLatestMoviesByGenre } from "@/lib/tmdb";
import LatestMovieClient from "./LatestMovieClient";
import { GENRES } from "../../variables";

async function LatestMovieServer() {
    const initialGenre = GENRES[0].id;
    const movies = await getLatestMoviesByGenre(initialGenre, 20);

    return (
        <LatestMovieClient
            initialGenre={initialGenre}
            initialMovies={movies}
        />
    );
}

export default LatestMovieServer;
