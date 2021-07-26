import React from 'react'

export default function Hero(props) {
    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={props.handleLogout}>Log Out</button>
            
        </div>
    )
}
