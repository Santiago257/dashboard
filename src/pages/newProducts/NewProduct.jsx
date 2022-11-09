import React, {useState} from "react";
import "./newProduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const NewProduct = () => {
  //Funcion para generar un numero entero random
  function getRandomId() {
    return Math.floor(Math.random() * 10000000);
  }
  //Creacion de las constantes que nos van a servir para declarar estados
  const [infoProducto, setinfoProducto] = useState({
    nombre: "",
    categoria: "",
    existencias: "",
  });
  //Evento que nos ayudará a asignarle valor a nuestra variable mientras se vaya cambiando
  const handleInputChange = (event) => {
    setinfoProducto({
      ...infoProducto,
      [event.target.name]: event.target.value,
    });
  };
  //Evento para agregar a la base de datos el valor de nuestros inputs
  const enviarDatos = (event) => {
    event.preventDefault();
    /*
      Consulta para ingresar a la base de datos
      INSERT INTO productos VALUES ({getRandomId()},{infoProducto.nombre},{infoProducto.categoria}, {infoProducto.existencias})
    */
  };


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
            <form className="form" onSubmit={enviarDatos}>
              <div className="formInput">
                <label>Nombre</label>
                <input type="text" placeholder="Ejemplo -- Laptop HP" onChange={handleInputChange} name="nombre" />
              </div>
              <div className="formInput">
                <label>Categoria</label>
                <select className="selecciones" id="categorias" name="categoria" onChange={handleInputChange}>
                  <option value="" disabled selected >Seleccione una categoria</option>
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
                <input type="number" placeholder="Ejemplo -- 5" onChange={handleInputChange} name="existencias" />
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
