import { Message, Search } from "@mui/icons-material";
import React from "react";
import "./navbar.scss";
import Avatar from "../../img/avatar.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Buscar..." />
          <Search />
        </div>
        <div className="items">
          <div className="item">
            <Message />
            {/*El counter sera el contador de los mensajes en este caso */}
            <div className="counter">5</div>
          </div>
          <div className="item">
            <img src={Avatar} alt="UserAvatar" className="avatar" />
            {/*Aqui vamos a poner el nombre que tendra el perfil a traves de la sesion iniciada */}
            Username
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
