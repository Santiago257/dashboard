import React from 'react'
import "./datatable.scss"
import { Link } from 'react-router-dom';
import List from '../table/Table'

const DatatablePedidos = () => {

  return (
    <div className="datatable">
        <div className="datatableTitle">
            Pedidos
            <Link to="/pedidos/new" className="link">
                Añadir nuevo pedido
            </Link>
        </div>
        <List/>
    </div>
  )
}

export default DatatablePedidos