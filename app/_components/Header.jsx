import HeaderActions from "./HeaderActions";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";

function Header() {
    return (
        <header className="fixed grid grid-cols-2 md:grid-cols-3 justify-between gap-8 h-[4rem] items-center w-full z-60 px-8 py-2 left-0 top-0 backdrop-blur-sm border-b border-gray-300/10">
            <Navigation />
            <Logo />
            <HeaderActions />
            <MobileMenu />
        </header>
    );
}

export default Header;
