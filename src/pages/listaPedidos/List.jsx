import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './list.scss'
import DatatablePedidos from "../../components/datatablePedidos/Datatable";

const ListPedidos = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatablePedidos/>
      </div>
    </div>
  )
}

export default ListPedidos