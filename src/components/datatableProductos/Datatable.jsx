import React from 'react'
import "./datatable.scss"
import { Link } from 'react-router-dom';
import List from '../tableProductos/Table'

const DatatableProductos = () => {

  return (
    <div className="datatable">
        <div className="datatableTitle">
            Productos
            <Link to="/products/new" className="link">
                Añadir nuevo producto
            </Link>
        </div>
        <List/>
    </div>
  )
}

export default DatatableProductos