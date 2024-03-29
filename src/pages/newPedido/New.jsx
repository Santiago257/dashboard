import React,{useState} from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const New = () => {
  //Funcion para generar un numero entero random
  function getRandomId() {
    return Math.floor(Math.random() * 10000000);
  }
  //Creacion de las constantes que nos van a servir para declarar estados
  const [infoPedido, setinfoPedido] = useState({
    empresa: "",
    piezas: "",
    producto: "",
  });
  //Evento que nos ayudará a asignarle valor a nuestra variable mientras se vaya cambiando
  const handleInputChange = (event) => {
    setinfoPedido({
      ...infoPedido,
      [event.target.name]: event.target.value,
    });
  };
  //Evento para agregar a la base de datos el valor de nuestros inputs
  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(infoPedido.empresa + infoPedido.piezas + infoPedido.producto)    /*
      Consulta para ingresar a la base de datos
      INSERT INTO productos VALUES ({getRandomId()},{infoPedido.empresa},{infoPedido.piezas}, {infoPedido.producto})
    */
  };

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
            <form className="form" onSubmit={enviarDatos}>
              <div className="formInput">
                <label>Empresa</label>
                <input type="text" placeholder="Nombre de la empresa" onChange={handleInputChange} name="empresa" />
              </div>
              <div className="formInput">
                <label>Piezas</label>
                <input type="tel" placeholder="Piezas" onChange={handleInputChange} name="piezas" />
              </div>
              <div className="formInput">
                <label>Producto</label>
                <select className="selecciones" id="producto" name="producto" onChange={handleInputChange} >
                  <option value="" disabled selected>Seleccione una opcion</option>
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
