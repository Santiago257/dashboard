import React, {useState} from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Actividades() {

const [value, onChange] = useState(new Date());
console.log(value)
  return (
    


    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
            {/* <Calendar minDate={new Date()}  onChange={onChange} value={value}/> */}    

            
            

      </div>
    </div>    
  )
}

export default Actividades