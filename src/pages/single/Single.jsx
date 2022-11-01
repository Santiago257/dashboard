import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
            <img 
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" 
              alt="Imagen"
              className="itemImg" 
            />
            <div className="details">
              <h1 className="itemTitle">Santiago Munguia</h1>
              <div className="detailsItem">
                <span className="itemKey">Email: </span>
                <span className="itemValue">santiagorm257@gmail.com</span>
              </div>
              <div className="detailsItem">
                <span className="itemKey">Phone: </span>
                <span className="itemValue">4271503373</span>
              </div>
              <div className="detailsItem">
                <span className="itemKey">Address: </span>
                <span className="itemValue">Patoni #100</span>
              </div>
              <div className="detailsItem">
                <span className="itemKey">Country: </span>
                <span className="itemValue">Mexico</span>
              </div>
            </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="Rendimiento (Ultimos 6 meses)"/>
          </div>
        </div>
        
        <div className="bottom">
        <h1 className="title">Last transaction</h1>
            <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
