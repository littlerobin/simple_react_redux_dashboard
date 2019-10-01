import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";

import { useDispatch, useSelector } from "react-redux";
import { onUserLogout } from "../../../redux/common/login/login.action";

import CbTextBox from "../../controls/textbox.component";

const NavbarComponent = ({ className, onmenuclick }) => {
  const [langToggle, setLanToogle] = useState(false);
  const [userToggle, setUserToogle] = useState(false);
  const dispatch = useDispatch();

  const loggedInDetails = useSelector(state => state.loggedInDetails);

  const handleUserLogout = () => {
    dispatch(onUserLogout());
  };

  const handleLanToggle = () => {
    setUserToogle(false);
    setLanToogle(!langToggle);
  };
  const handleUserToggle = () => {
    setLanToogle(false);
    setUserToogle(!userToggle);
  };
  const handleMenuTogglerClick = () => {
    onmenuclick();
  };

  return (
    <nav className="navbar navbar-dark fixed-top bg-black row navbar-container">
      {/* <div style={{ display: "flex", width: "100%" }}> */}
      <div className="flexdisplay">
        <div className={"navbar-brand-header " + className}>
          <a
            className="navbar-brand theme-forecolor font-bold flexdisplay"
            href="/"
          >
            <img src={Logo} alt="" height="20" />
            <div>Cerebrum</div>
          </a>
        </div>

        {loggedInDetails.UserInfo.status &&
        loggedInDetails.UserInfo.status === true ? (
          <div className="menu-toggler">
            <i
              className="fa fa-fw fa-th-large menu-icon"
              onClick={handleMenuTogglerClick}
            />
            <div className="menu-search-bar">
              <i className="fa fa-fw fa-search" />
              <CbTextBox />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {loggedInDetails.UserInfo.status &&
      loggedInDetails.UserInfo.status === true ? (
        <>
          <div className="navbar-menu" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown" onClick={handleUserToggle}>
                <div className="nav-link dropdown-toggle">
                  <i className="fa-icon fa fa-user-circle-o " />
                  {loggedInDetails.UserInfo.name}
                </div>

                <div
                  className="dropdown-menu"
                  style={{ display: userToggle ? "block" : "none" }}
                >
                  <div className="dropdown-item">Settings</div>
                  <div className="dropdown-item" onClick={handleUserLogout}>
                    Logout
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown" onClick={handleLanToggle}>
                <div className="nav-link dropdown-toggle">English</div>
                <div
                  className="dropdown-menu"
                  style={{ display: langToggle ? "block" : "none" }}
                >
                  <div className="dropdown-item">Arabic</div>
                </div>
              </li>
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
      {/* </div> */}
    </nav>
  );
};

export default NavbarComponent;
