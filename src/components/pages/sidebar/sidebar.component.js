import React from "react";
import MenuComponent from "./menu.component";

const SidebarComponent = ({ menudata, className }) => {
  return (
    <div id="sidebar-wrapper" className={className}>
      {/* <div className="sidebar-heading">Start Bootstrap </div> */}
      <MenuComponent menudata={menudata} />
    </div>
  );
};

export default SidebarComponent;
