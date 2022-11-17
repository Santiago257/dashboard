import React, { useState } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const NewCompra = () => {
  //Funcion para generar un numero entero random
  function getRandomId() {
    return Math.floor(Math.random() * 10000000);
  }
  //Creacion de las constantes que nos van a servir para declarar estados
  const [infoCompra, setinfoCompra] = useState({
    descripcion: "",
    empresa: "",
    piezas: "",
    idProducto: "",
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
      infoCompra.descripcion + ' ' +
      infoCompra.empresa + ' ' +
      infoCompra.piezas + ' id: ' +
      infoCompra.idProducto + ' ' +
      infoCompra.precio 
    )
    /*
      Consulta para ingresar a la base de datos
      INSERT INTO compras VALUES ({getRandomId()},{infoCompra.descripcion},{infoCompra.empresa}, {infoCompra.piezas}, {infoCompra.idProducto}, {infoCompra.precio})
    */
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Añadir nueva compra</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://i.ibb.co/9vs1jnN/undraw-empty-cart-co35.png"
              alt="Sin imagen"
            />
          </div>
          <div className="right">
            <form className="form" onSubmit={enviarDatos}>
              <div className="formInput">
                <label>Descripcion</label>
                <input
                  type="text"
                  placeholder="Descripcion de la compra"
                  onChange={handleInputChange}
                  name="descripcion"
                />
              </div>
              <div className="formInput">
                <label>Empresa</label>
                <input
                  type="text"
                  placeholder="Nombre de la empresa"
                  onChange={handleInputChange}
                  name="empresa"
                />
              </div>
              <div className="formInput">
                <label>Piezas</label>
                <input
                  type="tel"
                  onChange={handleInputChange}
                  name="piezas"
                  placeholder="Numero de piezas"
                />
              </div>
              <div className="formInput">
                <label>Producto</label>
                <select className="selecciones" id="productos" name="idProducto" onChange={handleInputChange}>
                  <option value="" disabled selected >Seleccione un producto</option>
                  <option value="1">Monitor HP EliteDisplay 27</option>
                  <option value="2">Laptop Envy 360 HP</option>
                </select>
              </div>
              <div className="formInput">
                <label>Precio</label>
                <input
                  type="tel"
                  placeholder="Precio del producto"
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

export default NewCompra;
