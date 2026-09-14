"use client";

import SpinnerMini from "../../SpinnerMini";

function WatchListDiscoverMoreBtn({ onClick, loading }) {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            className="col-span-3 flex gap-2 mx-4 my-4 justify-center items-center py-2 text-night-700 dark:text-cream-50 bg-cream-300 dark:bg-night-700 cursor-pointer rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
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

export default WatchListDiscoverMoreBtn;
