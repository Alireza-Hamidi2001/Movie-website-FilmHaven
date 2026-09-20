import { michroma } from "@/app/layout";
import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";

const GOLD = "#E8B463";

export default function NotFound() {
    return (
        <div className="mt-16 min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 text-night-700 dark:text-cream-50">
            <div className="text-center max-w-md">
                {/* آیکون فیلم پس‌زمینه‌ی عدد */}
                <div className="relative flex items-center justify-center mb-6">
                    <span
                        className={`${michroma.className} text-[7rem] md:text-[9rem] leading-none select-none`}
                        style={{ color: GOLD, opacity: 0.6 }}
                    >
                        404
                    </span>
                </div>

                <h1
                    className={`${michroma.className} text-xl md:text-2xl mb-3`}
                >
                    Page not found
                </h1>

                <p className="text-sm md:text-base text-night-700/60 dark:text-cream-50/50 mb-8 leading-6">
                    Unfortunately, the page you were looking for could not be
                    found. You may have entered the name incorrectly, or this
                    page may not exist in the database.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-6 py-3 bg-cream-200 dark:bg-night-900 hover:opacity-90 transition-opacity"
                >
                    <FaHome style={{ color: GOLD }} />
                    <span>Home</span>
                </Link>
            </div>
        </div>
    );
}
