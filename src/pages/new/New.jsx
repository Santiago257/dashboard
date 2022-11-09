import React, { useState } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const New = () => {
  //Funcion para generar un numero entero random
  function getRandomId() {
    return Math.floor(Math.random() * 10000000);
  }
  //Creamos el useState donde almacenaremos la informacion
  const [infoPersonal, setinfoPersonal] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    email: "",
    telefono: "",
    cargo: "",
  });
  //Evento que nos ayudará a asignarle valor a nuestra variable mientras se vaya cambiando
  const handleInputChange = (event) => {
    setinfoPersonal({
      ...infoPersonal,
      [event.target.name]: event.target.value,
    });
  };
  //Evento para agregar a la base de datos el valor de nuestros inputs
  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(
      infoPersonal.nombre +
        infoPersonal.apellidoMaterno +
        infoPersonal.apellidoPaterno +
        infoPersonal.cargo +
        infoPersonal.email +
        infoPersonal.telefono 
    );
    /*
      Consulta para ingresar a la base de datos
      INSERT INTO personal VALUES (
        {getRandomId()},
        {infoPersonal.nombre},
        {infoPersonal.apellidoPaterno},
        {infoPersonal.apellidoMaterno},
        {infoPersonal.email},
        {infoPersonal.telefono},
        {infoPersonal.cargo}
      )
    */
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Añadir nuevo usuario</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://i.ibb.co/gtpZhbk/undraw-Meet-the-team-re-4h08.png"
              alt="Sin imagen"
            />
          </div>
          <div className="right">
            <form className="form" onSubmit={enviarDatos}>
              <div className="formInput">
                <label>Nombre</label>
                <input
                  type="text"
                  placeholder="Santiago"
                  onChange={handleInputChange}
                  name="nombre"
                />
              </div>
              <div className="formInput">
                <label>Apellido Paterno</label>
                <input type="text" placeholder="Ramirez" onChange={handleInputChange} name="apellidoPaterno" />
              </div>
              <div className="formInput">
                <label>Apellido Materno</label>
                <input type="text" placeholder="Munguia" onChange={handleInputChange} name="apellidoMaterno" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" placeholder="santiago.ramirez@gmail.com" onChange={handleInputChange} name="email" />
              </div>
              <div className="formInput">
                <label>Telefono</label>
                <input type="tel" placeholder="4271503373" onChange={handleInputChange} name="telefono" />
              </div>
              <div className="formInput">
                <label>Cargo</label>
                <select className="selecciones" id="cargos" onChange={handleInputChange} name="cargo" >
                  <option value="" disabled selected>Selecciona el cargo</option>
                  <option value="jefe">Jefe</option>
                  <option value="editor">Editor</option>
                  <option value="diseñador">Diseñador</option>
                  <option value="programador">Programador</option>
                  <option value="escritor">Escritor</option>
                  <option value="operador">Operador</option>
                </select>
              </div>
              <button onSubmit={enviarDatos}>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
