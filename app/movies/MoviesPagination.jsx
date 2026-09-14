"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function MoviesPagination({ currentPage, totalPages }) {
    const router = useRouter();

    function goToPage(page) {
        router.push(`/movies?page=${page}`);
    }

    // نمایش حداکثر 5 صفحه اطراف صفحه فعلی
    function getPageNumbers() {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];

        for (
            let i = Math.max(2, currentPage - delta);
            i <= Math.min(totalPages - 1, currentPage + delta);
            i++
        ) {
            range.push(i);
        }

        if (currentPage - delta > 2) rangeWithDots.push(1, "...");
        else rangeWithDots.push(1);

        rangeWithDots.push(...range);

        if (currentPage + delta < totalPages - 1)
            rangeWithDots.push("...", totalPages);
        else rangeWithDots.push(totalPages);

        return rangeWithDots;
    }

    return (
        <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {/* دکمه قبلی */}
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-full text-sm bg-black/15 dark:bg-white/20 text-night-700 dark:text-cream-50 disabled:opacity-40 hover:bg-blue-700 hover:text-cream-50 transition disabled:cursor-not-allowed"
            >
                ← Prev
            </button>

            {/* شماره صفحات */}
            {getPageNumbers().map((p, i) =>
                p === "..." ? (
                    <span
                        key={`dots-${i}`}
                        className="px-2 text-night-700/50 dark:text-cream-50/50"
                    >
                        ...
                    </span>
                ) : (
                    <button
                        key={p}
                        onClick={() => goToPage(p)}
                        className={`w-9 h-9 rounded-full text-sm transition ${
                            currentPage === p
                                ? "bg-blue-700 text-cream-50"
                                : "bg-black/15 dark:bg-white/20 text-night-700 dark:text-cream-50 hover:bg-blue-700 hover:text-cream-50"
                        }`}
                    >
                        {p}
                    </button>
                ),
            )}

            {/* دکمه بعدی */}
            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-full text-sm bg-black/15 dark:bg-white/20 text-night-700 dark:text-cream-50 disabled:opacity-40 hover:bg-blue-700 hover:text-cream-50 transition disabled:cursor-not-allowed"
            >
                Next →
            </button>
        </div>
    );
}
