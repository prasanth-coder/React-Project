import React from 'react'
import HomeList from '../home/HomeList'
const Dummy = [{
    id:1,
    title:"Plumbing Work",
    phoneno:'6379083583',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Pipes_various.jpg/800px-Pipes_various.jpg',
    description:"We are having a experienced plumbers."
},{
    id:2,
    title:"Carpenting Work",
    phoneno:'9786793217',
    image:'https://upload.wikimedia.org/wikipedia/commons/f/fc/Fotothek_df_n-10_0000828.jpg',
    description:"We are having a experienced carpenters."
},{
    id:3,
    title:"Gas Range Repair",
    phoneno:"9942463410",
    image:'https://upload.wikimedia.org/wikipedia/commons/f/fc/Fotothek_df_n-10_0000828.jpg',
    description:"We are having a experienced lpg gas suppliers"
},{
    id:4,
    title:"Electrician",
    phoneno:"9942463410",
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Electrician_Mike_Hughes_Installing_Meter_Base.jpg/200px-Electrician_Mike_Hughes_Installing_Meter_Base.jpg',
    description:"We are having a experienced Electricians"
},{
    id:5,
    title:"RO Maintaince",
    phoneno:"9942463410",
    image:'https://images-na.ssl-images-amazon.com/images/I/71iMtv7yQ6L._SL1500_.jpg',
    description:"We are having a experienced Electricians"
}]

function Home() {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Book For Services</h1>
            <HomeList data={Dummy}/>
        </div>
    )
}

export default Home
