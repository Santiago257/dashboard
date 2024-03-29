import React from 'react'
import "./datatable.scss"
import { Link } from 'react-router-dom';
import List from '../tableUsuarios/Table'

const DatatableVentas = () => {

  return (
    <div className="datatable">
        <div className="datatableTitle">
            Usuarios
            <Link to="/users/new" className="link">
                Añadir nuevo usuario
            </Link>
        </div>
        <List/>
    </div>
  )
}

export default DatatableVentas