import { IoSearch } from "react-icons/io5";

function SearchInput({ isSearchOpen, setIsSearchOpen }) {
    return (
        <li className="hidden md:p-2 relative md:flex items-center">
            <button
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:flex items-center md:pl-3 md:pr-9 py-1.5 md:w-56 text-sm tracking-wider
                            text-night-700/60 dark:text-cream-50/40 text-left
                            rounded-lg bg-cream-200 border border-night-700/20 dark:border-cream-50/10 dark:bg-night-700
                            hover:ring-2 hover:ring-gold-500/30
                            transition-colors duration-300"
            >
                <span className="hidden md:block">Search movie ...</span>
            </button>
            <IoSearch
                onClick={() => setIsSearchOpen(true)}
                className=" cursor-pointer w-5 h-5 -translate-x-7 text-ink-400 dark:text-gray-500 "
            />
        </li>
    );
}

export default SearchInput;
