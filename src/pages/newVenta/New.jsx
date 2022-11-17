import React, { useState } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const NewVenta = () => {
  //Funcion para generar un numero entero random
  function getRandomId() {
    return Math.floor(Math.random() * 10000000);
  }
  //Creacion de las constantes que nos van a servir para declarar estados
  const [infoCompra, setinfoCompra] = useState({
    IdPedido: "",
    precio: "",
  });
  //Evento que nos ayudará a asignarle valor a nuestra variable mientras se vaya cambiando
  const handleInputChange = (event) => {
    setinfoCompra({
      ...infoCompra,
      [event.target.name]: event.target.value,
    });
  };
  //Evento para agregar a la base de datos el valor de nuestros inputs
  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(
      infoCompra.IdPedido + ' ' +
      infoCompra.precio 
    )
    /*
      Consulta para ingresar a la base de datos
      INSERT INTO venta VALUES ({getRandomId()},{infoCompra.IdPedido}, {infoCompra.precio})
    */
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Añadir nueva venta</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://i.ibb.co/HNZ8zWw/undraw-Vault-re-s4my.png"
              alt="Sin imagen"
            />
          </div>
          <div className="right">
            <form className="form" onSubmit={enviarDatos}>
              <div className="formInput">
                <label>Pedido</label>
                <select className="selecciones" id="IdPedido" name="IdPedido" onChange={handleInputChange}>
                  <option value="" disabled selected >Seleccione un pedido</option>
                  <option value="14156456">14156456</option>
                  <option value="245456454">245456454</option>
                </select>
              </div>
              <div className="formInput">
                <label>Precio</label>
                <input
                  type="tel"
                  placeholder="Precio del pedido"
                  onChange={handleInputChange}
                  name="precio"
                />
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewVenta;
