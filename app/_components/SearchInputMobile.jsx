import { IoSearch } from "react-icons/io5";

function SearchInputMobile({ isSearchOpen, setIsSearchOpen }) {
    return (
        <div
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="lg:hidden md:p-2 relative items-center text-ink-400 dark:text-cream-50"
        >
            <IoSearch
                // onClick={() => setIsSearchOpen((prev) => !prev)}
                // onClick={() => console.log("clicked search")}
                className="cursor-pointer w-6 h-6"
            />
        </div>
    );
}

export default SearchInputMobile;
