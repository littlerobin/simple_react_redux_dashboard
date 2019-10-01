import React from "react";
import MenuItemComponent from "./menuitem.component";

const MenuComponent = ({ menudata }) => {
  return (
    <div className="list-group list-group-flush">
      {menudata.map(menu => (
        <MenuItemComponent key={menu.uid} menu={menu} />
      ))}
    </div>
  );
};

export default MenuComponent;
