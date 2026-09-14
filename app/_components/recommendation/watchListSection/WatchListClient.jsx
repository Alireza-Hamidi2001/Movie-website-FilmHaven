"use client";

import { useState } from "react";
import FilterWatchList from "./FilterWatchList";
import WatchListBox from "./WatchListBox";

// این باید با limit همون چیزی که توی WatchListServer به getTopRated دادی هماهنگ باشه
const INITIAL_LIMIT = 40;
const INITIAL_PAGE = Math.ceil(INITIAL_LIMIT / 20); // = 2

function WatchListClient({ movies: initialMovies, tvShows: initialTvShows }) {
    const [filter, setFilter] = useState("movie");

    const [movies, setMovies] = useState(initialMovies);
    const [tvShows, setTvShows] = useState(initialTvShows);
    const [moviePage, setMoviePage] = useState(INITIAL_PAGE);
    const [tvPage, setTvPage] = useState(INITIAL_PAGE);
    const [loadingMore, setLoadingMore] = useState(false);

    const items = filter === "movie" ? movies : tvShows;

    async function handleDiscoverMore() {
        setLoadingMore(true);

        const currentPage = filter === "movie" ? moviePage : tvPage;
        const nextPage = currentPage + 1;

        const res = await fetch(
            `/api/top-rated?type=${filter}&page=${nextPage}`,
        );
        const data = await res.json();

        if (filter === "movie") {
            setMovies((prev) => [...prev, ...data.results]);
            setMoviePage(nextPage);
        } else {
            setTvShows((prev) => [...prev, ...data.results]);
            setTvPage(nextPage);
        }

        setLoadingMore(false);
    }

    return (
        <div className="max-h-[60vh] overflow-auto ">
            <FilterWatchList
                active={filter}
                onChange={setFilter}
            />
            <WatchListBox
                items={items}
                onDiscoverMore={handleDiscoverMore}
                loadingMore={loadingMore}
            />
        </div>
    );
}

export default WatchListClient;
