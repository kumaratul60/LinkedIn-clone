import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { logout } from "../../features/userSlice";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          // src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          src="data:image/png;base64,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"
          alt="logos"
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption avatar={true} title="Logout" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
