import React from 'react'
import classes from "./HomeList.module.css"
import HomeItems from './HomeItems'

export default function HomeList(props) {
    return (
        <ul className={classes.content}>
           {props.data.map(e => {
               return (
               <HomeItems 
               key={e.id}
               id={e.id}
               title={e.title}
               phonen={e.phoneno}
               description={e.description}
               image={e.image}
               
               
               />
               )
           })}
            
        </ul>
    )
}
