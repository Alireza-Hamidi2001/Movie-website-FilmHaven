import SideNavigation from "../../_components/SideNavigation";

function layout({ children }) {
    return (
        <div className="grid grid-cols-1 gap-4 md:gap-0 sm:grid-cols-[10rem_1fr] lg:grid-cols-[14rem_1fr]">
            <SideNavigation />
            {children}
        </div>
    );
}

export default layout;
