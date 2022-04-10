import { AccountBalance, AccountCircleOutlined, KeyboardArrowUp, MonetizationOn, ShoppingCart } from "@mui/icons-material";
import React from "react";
import "./widget.scss";

const Widget = ({ type }) => {
  //Codigo para saber que tipo de valor es el que vamos a mostrar dependiendo las props
  let data;

  //Objetos temporales para mostrar en el front
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USUARIOS",
        //isMoney para saber si agregamos el singo de pesos
        isMoney: false,
        counter: 12515155,
        link: "Ver todos los usuarios",
        icon: <AccountCircleOutlined className="icon" />,
      };
      break;
      case "order":
      data = {
        title: "ORDENES",
        //isMoney para saber si agregamos el singo de pesos
        isMoney: false,
        counter: 12515155,
        link: "Ver todas las ordenes",
        icon: <ShoppingCart className="icon" />,
      };
      break;
      case "earnings":
      data = {
        title: "GANANCIAS",
        //isMoney para saber si agregamos el singo de pesos
        isMoney: true,
        counter: 12515155,
        link: "Ver todas las ganancias",
        icon: <MonetizationOn className="icon" />,
      };
      break;
      case "balance":
      data = {
        title: "BALANCE",
        //isMoney para saber si agregamos el singo de pesos
        isMoney: true,
        counter: 12515155,
        link: "Ver el balance",
        icon: <AccountBalance className="icon" />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
