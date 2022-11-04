import React from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const New = () => {

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Añadir nuevo pedido</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://i.ibb.co/gtpZhbk/undraw-Meet-the-team-re-4h08.png"
              alt="Sin imagen"
            />
          </div>
          <div className="right">
            <form className="form">
              <div className="formInput">
                <label>Nombre</label>
                <input type="text" placeholder="Santiago" />
              </div>
              <div className="formInput">
                <label>Apellido Paterno</label>
                <input type="text" placeholder="Ramirez" />
              </div>
              <div className="formInput">
                <label>Apellido Materno</label>
                <input type="text" placeholder="Munguia" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" placeholder="santiago.ramirez@gmail.com" />
              </div>
              <div className="formInput">
                <label>Telefono</label>
                <input type="tel" placeholder="4271503373"/>
              </div>
              <div className="formInput">
                <label>Cargo</label>
                <select className="selecciones" id="cargos" name="cargos">
                  <option value="monitor">Jefe</option>
                  <option value="laptop">Editor</option>
                  <option value="componente">Diseñador</option>
                  <option value="celular">Programador</option>
                  <option value="tableta">Escritor</option>
                  <option value="televisor">Operador</option>
                </select>
              </div>
              <button>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
