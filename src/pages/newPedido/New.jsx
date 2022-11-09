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
              src="https://i.ibb.co/8btxKj3/undraw-Order-delivered-re-v4ab.png"
              alt="Sin imagen"
            />
          </div>
          <div className="right">
            <form className="form">
              <div className="formInput">
                <label>Empresa</label>
                <input type="text" placeholder="Nombre de la empresa" />
              </div>
              <div className="formInput">
                <label>Piezas</label>
                <input type="tel" placeholder="Piezas" />
              </div>
              <div className="formInput">
                <label>Producto</label>
                <select className="selecciones" id="producto" name="producto">
                  <option value="monitor">Monitor HP EliteDisplay 27</option>
                  <option value="laptop">Laptop Envy 360 HP</option>
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
