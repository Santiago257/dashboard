import React, { useState } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const NewActividad = () => {
  //Funcion para generar un numero entero random
  function getRandomId() {
    return Math.floor(Math.random() * 10000000);
  }
  //Creacion de las constantes que nos van a servir para declarar estados
  const [infoActividad, setinfoActividad] = useState({
    nombre: "",
    descripcion: "",
    fecha: "",
  });
  //Evento que nos ayudará a asignarle valor a nuestra variable mientras se vaya cambiando
  const handleInputChange = (event) => {
    setinfoActividad({
      ...infoActividad,
      [event.target.name]: event.target.value,
    });
  };
  //Evento para agregar a la base de datos el valor de nuestros inputs
  const enviarDatos = (event) => {
    event.preventDefault();
    /*
      Consulta para ingresar a la base de datos
      INSERT INTO actividades VALUES ({getRandomId()},{infoActividad.nombre},{infoActividad.descripcion}, {infoActividad.fecha}, 'Pendiente')
    */
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Añadir nueva actividad</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://i.ibb.co/HdK7Zyn/undraw-Events-re-98ue.png"
              alt="Sin imagen"
            />
          </div>
          <div className="right">
            <form className="form" onSubmit={enviarDatos}>
              <div className="formInput">
                <label>Nombre</label>
                <input
                  type="text"
                  placeholder="Nombre de la actividad"
                  onChange={handleInputChange}
                  name="nombre"
                />
              </div>
              <div className="formInput">
                <label>Descripcion</label>
                <input
                  type="text"
                  placeholder="Descripcion de la actividad"
                  onChange={handleInputChange}
                  name="descripcion"
                />
              </div>
              <div className="formInput">
                <label>Fecha</label>
                <input type="date" onChange={handleInputChange} name="fecha" />
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewActividad;
