import React from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";

const New = () => {

  const [file,setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file 
                ? URL.createObjectURL(file)
                : "https://thumbs.dreamstime.com/b/sin-foto-ni-icono-de-imagen-en-blanco-cargar-im%C3%A1genes-o-falta-marca-no-disponible-pr%C3%B3xima-se%C3%B1al-silueta-naturaleza-simple-marco-215973362.jpg" 
              }
              alt="Sin imagen"
            />
          </div>
          <div className="right">
            <form className="form">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} onChange={e=>setFile(e.target.files[0])} />
               </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="santiago_munguia" />
              </div>
              <div className="formInput">
                <label>Nombre</label>
                <input type="text" placeholder="Santiago Munguia" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" placeholder="santiago.munguia@gmail.com" />
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input type="text" placeholder="4271503373" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Patoni #100" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Mexico" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
