import React, { useState } from "react";
import ("./dropdown.css")
const Dropdown=()=>{
    const [state,setstate]=useState(false);
    const Showdropdown=()=>{
        setstate(true)
    }
    const Hidedropdown=()=>{
        setstate(false)
    }
    return(
        <div className="dropdown">
            <div className="dropdown-menu" onMouseEnter={Showdropdown} onMouseLeave={Hidedropdown}>
            Filtered By Vehicle:
                {state?(
                     <ul onMouseEnter={Showdropdown} className="dropdown-list">
                     <li>Passenger Car</li>
                     <li>Truck</li>
                     <li>Motor Vehicle</li>
                     <li>Bus</li>
                     <li>Off Road Vehicle</li>
                 </ul>
                ):null}
            </div>
        </div>
    )
}
export default Dropdown;