import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";

import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import NavbarComponent from "./components/pages/header/navbar.component";
import SidebarComponent from "./components/pages/sidebar/sidebar.component";
import PageComponent from "./components/pages/page.component";

import "./App.css";

function App() {
  const loggedInDetails = useSelector(state => state.loggedInDetails);

  const [isRTL, setisRTL] = useState(loggedInDetails.OtherInfo.isRTL);

  const [menuToggled, setMenuToggled] = useState(true);

  const handleToggleMenuClick = () => {
    setMenuToggled(!menuToggled);
  };

  return (
    <div
      className={
        menuToggled ? "container-fluid menutoggled" : "container-fluid"
      }
      style={{ padding: 0 }}
    >
      {/* header navbar */}
      <NavbarComponent
        onmenuclick={handleToggleMenuClick}
        className={menuToggled ? "toggled" : ""}
      />
      {/* //page content */}
      <div className="flexdisplay">
        {/* //sidebar */}
        {loggedInDetails.UserInfo.status &&
        loggedInDetails.UserInfo.status === true ? (
          <SidebarComponent
            menudata={loggedInDetails.Menu}
            className={menuToggled ? "toggled" : ""}
          />
        ) : (
          ""
        )}

        {/* //pagecontent */}
        <DndProvider backend={HTML5Backend}>
          <PageComponent menudata={loggedInDetails.Menu} />
        </DndProvider>
      </div>
      <div className="footer">
        <div>
          <b>&copy; 2019 Cerebrum</b>. All rights reserved.
        </div>
        <div>
          Powered by <b>Dubai Technologies</b>
        </div>
      </div>
    </div>
  );
}

export default App;
