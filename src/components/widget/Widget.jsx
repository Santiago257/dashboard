import { AccountBalance, AccountCircleOutlined, KeyboardArrowUp, MonetizationOn, ShoppingCart } from "@mui/icons-material";
import React from "react";
import "./widget.scss";

const Widget = ({ type }) => {
  //Codigo para saber que tipo de valor es el que vamos a mostrar dependiendo las props
  let data;

  //Objetos temporales para mostrar en el front

  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "PERSONAL",
        //isMoney para saber si agregamos el singo de pesos
        isMoney: false,
        amount: 4,
        icon: <AccountCircleOutlined className="icon" />,
      };
      break;
      case "order":
      data = {
        title: "PRODUCTOS",
        //isMoney para saber si agregamos el singo de pesos
        isMoney: false,
        amount: 3,
        icon: <ShoppingCart className="icon" />,
      };
      break;
      case "earnings":
      data = {
        title: "PEDIDOS",
        //isMoney para saber si agregamos el singo de pesos
        isMoney: false,
        amount: 45,
        icon: <MonetizationOn className="icon" />,
      };
      break;
      case "balance":
      data = {
        title: "VENTAS",
        //isMoney para saber si agregamos el singo de pesos
        isMoney: true,
        amount: 1248654,
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
        <span className="counter">{data.isMoney && "$"} {data.amount.toLocaleString()}</span>
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
