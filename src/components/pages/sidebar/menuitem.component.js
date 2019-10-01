import React, { useState } from "react";
import { Link } from "react-router-dom";

const ONE_ELEMENT_HEIGHT = 31;
const MenuItemComponent = ({ menu }) => {
  const [height, setHeight] = useState(0);

  const calculateHeight = () => {
    let childCount = 0;
    if (menu.menu && menu.menu.length > 0) childCount = menu.menu.length;

    return ONE_ELEMENT_HEIGHT * childCount;
  };

  const handleParentClick = () => {
    setHeight(prevHeight => {
      if (prevHeight > 0) return 0;
      else return calculateHeight();
    });
  };

  return (
    <>
      <div
        className="list-group-item list-group-item-action"
        onClick={handleParentClick}
      >
        <i className={"fa fa-fw " + menu.iconclassname} />
        {menu.menu && menu.menu.length > 0 ? (
          <i
            className={
              height > 0
                ? "fa fa-fw fa-angle-right rotateicon"
                : "fa fa-fw fa-angle-down rotateicon"
            }
          />
        ) : (
          ""
        )}
        <span>{menu.title}</span>
      </div>

      <div className="collapse-menu" style={{ height: height }}>
        {menu.menu &&
          menu.menu.map(item => {
            const linkTo = {
              pathname: item.path,
              state: item
            };
            return (
              <Link
                key={item.uid}
                to={linkTo}
                className="list-group-item list-group-item-action"
              >
                <i className={"fa-icon fa fa-fw " + item.iconclassname} />
                <span>{item.title}</span>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default MenuItemComponent;
