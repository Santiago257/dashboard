import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DatatableActividades from '../../components/datatableActividades/Datatable';


function Actividades() {

  return (
    


    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
            <DatatableActividades/>
      </div>
    </div>    
  )
}

export default Actividades