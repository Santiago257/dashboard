import React from "react";
import "./sidebar.scss";
import {
  Assessment,
  Logout,
  Dashboard,
  PersonOutlined,
  StoreMallDirectory,
  Inventory2Outlined,
  NotificationsNone,
  SettingsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo">ITESHU</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration: "none"}}>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration: "none"}}>
          <li>
            <PersonOutlined className="icon" />
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style={{textDecoration: "none"}}>
          <li>
            <StoreMallDirectory className="icon" />
            <span>Products</span>
          </li>
          </Link>
          <li>
            <Inventory2Outlined className="icon" />
            <span>Orders</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <Assessment className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SETTINGS</p>
          <li>
            <SettingsOutlined className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
