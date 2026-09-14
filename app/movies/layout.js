import SideNavigation from "../_components/SideNavigation";

function layout({children}) {
  return (
    <div className="grid grid-cols-[14rem_1fr]">
      <SideNavigation />
      {children}
    </div>
  )
}

export default layout
