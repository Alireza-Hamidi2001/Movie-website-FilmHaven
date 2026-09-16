import SideNavigation from "../../_components/SideNavigation";

function Layout({ children }) {
    return (
        <div className="h-screen pt-[4rem] grid grid-cols-1 md:grid-cols-[10rem_1fr] lg:grid-cols-[14rem_1fr]">
            <SideNavigation />
            {children}
        </div>
    );
}

export default Layout;
