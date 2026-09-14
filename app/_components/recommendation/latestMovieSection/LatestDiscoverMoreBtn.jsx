"use client";

import SpinnerMini from "../../SpinnerMini";

function LatestMovieDiscoverMoreBtn({ onClick, loading }) {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            className="w-full mt-4 flex gap-2 justify-center items-center py-2 text-night-700 dark:text-cream-50 bg-cream-100 dark:bg-night-800 cursor-pointer rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {loading ? (
                <>
                    <SpinnerMini /> Loading ...
                </>
            ) : (
                "Discover More"
            )}
        </button>
    );
}

export default LatestMovieDiscoverMoreBtn;
