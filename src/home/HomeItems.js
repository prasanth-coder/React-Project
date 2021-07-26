import React from 'react'
import classes from "./HomeItems.module.css"
import Card from '../ui/Card'
export default function HomeItems(props) {
    return (
        
        <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img alt={props.title} 
            src={props.image}/>
        </div>
        <div className={classes.content} >
            <h3>{props.title}</h3>
        
            <address>{props.phoneno}</address>
        
            <p>{props.description}</p>
        </div>
        </Card>
       
        </li>
        

    )
}
