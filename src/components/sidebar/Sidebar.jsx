import React from "react";
import "./sidebar.scss";
import {
  Assessment,
  Dashboard,
  PersonOutlined,
  StoreMallDirectory,
  Inventory2Outlined,
  NotificationsNone,
  CalendarMonth
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
          <Link to="/pedidos" style={{textDecoration: "none"}}>
          <li>
            <Inventory2Outlined className="icon" />
            <span>Pedidos</span>
          </li>
          </Link>  
          <p className="title">ADMINISTRACIÓN</p>
          <Link to="/compras" style={{textDecoration: "none"}}>
          <li>
            <Assessment className="icon" />
            <span>Compras</span>
          </li>
          </Link>
          <Link to="/ventas" style={{textDecoration: "none"}}>
          <li>
            <NotificationsNone className="icon" />
            <span>Ventas</span>
          </li>
          </Link>
          <p className="title">GESTION</p>
          <Link to="/actividades" style={{textDecoration: "none"}}>
          <li>
            <CalendarMonth className="icon" />
            <span>Actividades</span>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
