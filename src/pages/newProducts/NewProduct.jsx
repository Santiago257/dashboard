import React from "react";
import "./newProduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Añadir un nuevo producto</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={"https://i.ibb.co/187J5wy/undraw-progressive-app-m9ms.png"}
              alt="Imagen"
              className="imagen"
            />
          </div>
          <div className="right">
            <form className="form">
              <div className="formInput">
                <label>Nombre</label>
                <input type="text" placeholder="Ejemplo -- Laptop HP" />
              </div>
              <div className="formInput">
                <label>Categoria</label>
                <select className="selecciones" id="categorias" name="categorias">
                  <option value="monitor">Monitor</option>
                  <option value="laptop">Laptop</option>
                  <option value="componente">Componente</option>
                  <option value="celular">Celular</option>
                  <option value="tableta">Tableta</option>
                  <option value="televisor">Televisor</option>
                </select>
              </div>
              <div className="formInput">
                <label>Existencias</label>
                <input type="number" placeholder="Ejemplo -- 5" />
              </div>

              <button>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
