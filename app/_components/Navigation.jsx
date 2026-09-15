import Link from "next/link";

function Navigation() {
    return (
        <ul className="hidden md:flex gap-6 text-gray-300/70 ">
            <Link
                href="/movies"
                className="transition-all duration-300 text-ink-400 dark:text-cream-50"
            >
                <li>Movies</li>
            </Link>
            <Link
                href="/about"
                className="transition-all duration-300 text-ink-400 dark:text-cream-50"
            >
                <li>About us</li>
            </Link>
            <Link
                href="/contact"
                className="transition-all duration-300 text-ink-400 dark:text-cream-50"
            >
                <li>Contact</li>
            </Link>
        </ul>
    );
}

export default Navigation;
