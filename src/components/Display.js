import React from 'react'
import DisplayContent from './DisplayContent'
export default function Display(props) {
    return (
        <div>
            {props.datas.map( e => {

             <DisplayContent key ={e.id} name={e.name}/>
            })}
        </div>
    )
}
