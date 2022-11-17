import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './list.scss'
import DatatableVentas from "../../components/datatableVentas/Datatable";

const ListVentas = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableVentas/>
      </div>
    </div>
  )
}

export default ListVentas