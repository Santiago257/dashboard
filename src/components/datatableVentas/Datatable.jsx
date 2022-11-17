import React from 'react'
import "./datatable.scss"
import { Link } from 'react-router-dom';
import List from '../tableVentas/Table'

const DatatableVentas = () => {

  return (
    <div className="datatable">
        <div className="datatableTitle">
            Ventas
            <Link to="/ventas/new" className="link">
                Añadir nueva venta
            </Link>
        </div>
        <List/>
    </div>
  )
}

export default DatatableVentas