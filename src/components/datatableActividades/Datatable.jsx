import React from 'react'
import "./datatable.scss"
import { Link } from 'react-router-dom';
import List from '../tableActividades/Table'

const DatatableActividades = () => {

  return (
    <div className="datatable">
        <div className="datatableTitle">
            Actividades
            <Link to="/actividades/new" className="link">
                Añadir nueva actividad
            </Link>
        </div>
        <List/>
    </div>
  )
}

export default DatatableActividades