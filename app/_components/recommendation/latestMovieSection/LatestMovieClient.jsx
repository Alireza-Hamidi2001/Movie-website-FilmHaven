"use client";

import { useEffect, useRef, useState } from "react";
import LatestMovieFilter from "./LatestMovieFilter";
import LatestBox from "./LatestBox";
import LatestMovieDiscoverMoreBtn from "./LatestDiscoverMoreBtn";

function LatestMovieClient({ initialGenre, initialMovies }) {
    const [genre, setGenre] = useState(initialGenre);
    const [movies, setMovies] = useState(initialMovies);
    const [page, setPage] = useState(1); // دیتای اولیه از صفحه 1 اومده
    const [loadingMore, setLoadingMore] = useState(false);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        let ignore = false;

        async function fetchMovies() {
            const res = await fetch(
                `/api/movies/latest?genre=${genre}&limit=10`,
            );
            const data = await res.json();

            if (!ignore) {
                setMovies(data.movies);
                setPage(1); // با تغییر ژانر، شماره صفحه هم ریست می‌شه
            }
        }

        fetchMovies();

        return () => {
            ignore = true;
        };
    }, [genre]);

    async function handleDiscoverMore() {
        setLoadingMore(true);

        const nextPage = page + 1;
        const res = await fetch(
            `/api/movies/latest-page?genre=${genre}&page=${nextPage}`,
        );
        const data = await res.json();

        setMovies((prev) => [...prev, ...data.movies]);
        setPage(nextPage);
        setLoadingMore(false);
    }

    return (
        <div className="max-h-[60vh] overflow-auto">
            <LatestMovieFilter
                active={genre}
                onChange={setGenre}
            />

            <LatestBox items={movies} />

            <LatestMovieDiscoverMoreBtn
                onClick={handleDiscoverMore}
                loading={loadingMore}
            />
        </div>
    );
}

export default LatestMovieClient;
