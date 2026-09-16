"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { IoSearch, IoClose } from "react-icons/io5";

function SearchModal({ isOpen, onClose }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const debounceRef = useRef(null);
    const abortRef = useRef(null);

    // بستن با کلید Escape
    useEffect(() => {
        function handleKey(e) {
            if (e.key === "Escape") onClose();
        }
        if (isOpen) document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [isOpen, onClose]);

    // ریست شدن موقع بسته شدن مودال
    useEffect(() => {
        if (!isOpen) {
            setQuery("");
            setResults([]);
        }
    }, [isOpen]);

    // منطق سرچ: debounce + abort برای جلوگیری از race condition
    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            setLoading(false);
            return;
        }

        setLoading(true);

        // اگه درخواست قبلی هنوز در حال اجراست، لغوش کن
        if (abortRef.current) abortRef.current.abort();
        if (debounceRef.current) clearTimeout(debounceRef.current);

        debounceRef.current = setTimeout(async () => {
            const controller = new AbortController();
            abortRef.current = controller;

            try {
                const res = await fetch(
                    `/api/movies/search?q=${encodeURIComponent(query)}`,
                    { signal: controller.signal },
                );
                const data = await res.json();
                setResults(data.movies);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error("Search failed:", err);
                }
            } finally {
                setLoading(false);
            }
        }, 350); // 350ms تأخیر قبل از فرستادن درخواست

        return () => {
            clearTimeout(debounceRef.current);
        };
    }, [query]);

    function handleSelect(movieId) {
        onClose();
        router.push(`/movies/${movieId}`);
    }

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex justify-center top-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="w-full max-w-xl mt-24 mx-4 bg-cream-50 dark:bg-night-900 rounded-2xl shadow-2xl border border-night-700/10 dark:border-cream-50/10 overflow-hidden h-fit"
                onClick={(e) => e.stopPropagation()}
            >
                {/* اینپوت */}
                <div className="flex items-center gap-2 p-4 border-b border-night-700/10 dark:border-cream-50/10">
                    <IoSearch className="w-5 h-5 text-night-700/50 dark:text-cream-50/40 flex-shrink-0" />
                    <input
                        autoFocus
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search movie ..."
                        className="relative z-[99999] flex-1 outline-none text-red-500-700 dark:text-cream-50 placeholder:text-night-700/40 dark:placeholder:text-cream-50/30"
                    />
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-night-700/10 dark:hover:bg-cream-50/10 transition-colors"
                        aria-label="Close search"
                    >
                        <IoClose className="w-5 h-5 text-night-700/60 dark:text-cream-50/50" />
                    </button>
                </div>

                {/* نتایج */}
                <div className="max-h-[60vh] overflow-y-auto">
                    {loading && (
                        <p className="text-center text-sm text-night-700/50 dark:text-cream-50/40 py-6">
                            Searching ...
                        </p>
                    )}

                    {!loading && query && results.length === 0 && (
                        <p className="text-center text-sm text-night-700/50 dark:text-cream-50/40 py-6">
                            Nothing found
                        </p>
                    )}

                    {!loading &&
                        results.map((movie) => (
                            <button
                                key={movie.id}
                                onClick={() => handleSelect(movie.id)}
                                className="w-full flex gap-3 items-center p-3 hover:bg-night-700/5 dark:hover:bg-cream-50/5 transition-colors text-left"
                            >
                                <img
                                    src={
                                        movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                                            : "https://via.placeholder.com/46x64?text=No+Image"
                                    }
                                    alt={movie.title}
                                    className="w-15 h-20 object-cover rounded-md flex-shrink-0"
                                />
                                <div>
                                    <p className="text-sm font-medium text-night-700 dark:text-cream-50">
                                        {movie.title}
                                    </p>
                                    <p className="text-xs text-night-700/50 dark:text-cream-50/40">
                                        {movie.release_date?.slice(0, 4)}
                                    </p>
                                </div>
                            </button>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default SearchModal;
