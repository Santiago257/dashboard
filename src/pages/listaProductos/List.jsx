import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './list.scss'
import DatatableProductos from "../../components/datatableProductos/Datatable";

const ListProductos = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableProductos/>
      </div>
    </div>
  )
}

export default ListProductos