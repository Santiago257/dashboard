import React from 'react'
import "./datatable.scss"
import { Link } from 'react-router-dom';
import List from '../tableCompras/Table'

const DatatableCompras = () => {

  return (
    <div className="datatable">
        <div className="datatableTitle">
            Compras
            <Link to="/compras/new" className="link">
                Añadir nueva compra
            </Link>
        </div>
        <List/>
    </div>
  )
}

export default DatatableCompras