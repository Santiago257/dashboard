import React from "react";
import "./sidebar.scss";
import {
  Assessment,
  Dashboard,
  PersonOutlined,
  StoreMallDirectory,
  Inventory2Outlined,
  NotificationsNone
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
          <p className="title">PRINCIPAL</p>
          <Link to="/" style={{textDecoration: "none"}}>
          <li>
            <Dashboard className="icon" />
            <span>Menú</span>
          </li>
          </Link>
          <p className="title">REGISTROS</p>
          <Link to="/users" style={{textDecoration: "none"}}>
          <li>
            <PersonOutlined className="icon" />
            <span>Personal</span>
          </li>
          </Link>
          <Link to="/products" style={{textDecoration: "none"}}>
          <li>
            <StoreMallDirectory className="icon" />
            <span>Productos</span>
          </li>
          </Link>
          <li>
            <Inventory2Outlined className="icon" />
            <span>Pedidos</span>
          </li>
          <p className="title">ADMINISTRACIÓN</p>
          <li>
            <Assessment className="icon" />
            <span>Compras</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Ventas</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Inventario</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
