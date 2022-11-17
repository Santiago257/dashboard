import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './list.scss'
import DatatableCompras from "../../components/datatableCompras/Datatable";

const ListCompras = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableCompras/>
      </div>
    </div>
  )
}

export default ListCompras