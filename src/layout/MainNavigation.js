import React from 'react'
import {Link} from "react-router-dom"
import classes from "./MainNavigation.module.css"
export default function MainNavigation(props) {
    return  (
        <div>
        <header className={classes.header}>
         <div className={classes.logo}>Home Service System</div>
          <nav>   
             <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/customerform">Customer Form</Link></li>
                 <li><Link to="/workerform">Worker Form</Link></li>
                 <li><Link to="/serviceproviders">Service Providers</Link></li>
                 <li><Link to="/About">About</Link></li>
                 
                 <button onClick={props.handleLogout}>LogOut</button>
             </ul>
         </nav>
         
            
        </header>
        
        </div>
    )
}
