"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { IoSearch, IoClose } from "react-icons/io5";
import Link from "next/link";

function SearchModal({ isOpen, onClose }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    const debounceRef = useRef(null);
    const abortRef = useRef(null);

    // برای اطمینان از اینکه فقط سمت کلاینت رندر میشه (لازمه برای createPortal)
    useEffect(() => {
        setMounted(true);
    }, []);

    // بستن با کلید Escape
    useEffect(() => {
        function handleKey(e) {
            if (e.key === "Escape") onClose();
        }
        if (isOpen) document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [isOpen, onClose]);

    // قفل کردن اسکرول صفحه وقتی مودال بازه
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // ریست شدن موقع بسته شدن مودال
    useEffect(() => {
        if (!isOpen) {
            setQuery("");
            setResults([]);
            setLoading(false);
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
        }, 350);

        return () => {
            clearTimeout(debounceRef.current);
        };
    }, [query]);

    function handleSelect(movieId) {
        onClose();
        router.push(`/movies/${movieId}`);
    }

    // تا وقتی mount نشده یا مودال بسته است، چیزی رندر نکن
    if (!mounted || !isOpen) return null;

    const modalContent = (
        <div
            className="fixed inset-0 z-[100] flex justify-center bg-cream-300/30 dark:bg-night-700/70 backdrop-blur-md"
            onClick={onClose}
        >
            <div
                className="border-2 border-night-700/70 dark:border-cream-200/20 bg-cream-50/50 dark:bg-night-700 fixed z-30 w-[80vw] md:w-full md:max-w-xl mt-12 mx-4 p-2 rounded-lg overflow-hidden max-h-[80vh] md:h-fit"
                onClick={(e) => e.stopPropagation()}
            >
                {/* اینپوت */}
                <div className="bg-cream-200 dark:bg-night-800 rounded-sm flex items-center gap-2 p-2">
                    <IoSearch className="w-5 h-5 text-night-700/50 dark:text-cream-50/40 flex-shrink-0" />
                    <input
                        autoFocus
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search movie ..."
                        className="relative z-[99999] flex-1 outline-none text-red-500-700 text-night-700 dark:text-cream-50 placeholder:text-night-700/40 dark:placeholder:text-cream-50/30"
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
                <div className="max-h-[80vh] grid grid-cols-1 md:grid-cols-2 md:grid-4 overflow-y-auto">
                    {loading && (
                        <p className="text-center text-sm text-night-700 dark:text-cream-50 py-6">
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
                            <Link
                                href={`/movies/${movie.id}`}
                                key={movie.id}
                                className="flex gap-4 bg-cream-200 dark:bg-night-800 mt-2 rounded-sm border border-cream-300 dark:border-night-700"
                                onClick={onClose}
                            >
                                <img
                                    src={
                                        movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                                            : "https://via.placeholder.com/46x64?text=No+Image"
                                    }
                                    alt={movie.title}
                                    className="w-20 h-27 object-cover rounded-md flex-shrink-0"
                                />
                                <div className="h-full flex flex-col py-2">
                                    <p className="text-[1.2rem] leading-5 font-medium text-night-700 dark:text-cream-50">
                                        {movie.title}
                                    </p>
                                    <p className="text-[0.9rem] mb-auto text-night-700/50 dark:text-cream-50/40">
                                        {movie.release_date?.slice(0, 4)}
                                    </p>
                                    <p className="bg-yellow-500 mt-auto max-w-fit text-black p-1 rounded-md text-[0.6rem]">
                                        ★ {movie.vote_average?.toFixed(1)}
                                    </p>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );

    // رندر با Portal مستقیم زیر body
    return createPortal(modalContent, document.body);
}

export default SearchModal;
