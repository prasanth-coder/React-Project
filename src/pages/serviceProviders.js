import React, { useState,useEffect } from 'react'
import fire from '../firebase/fire';
import Card from '../ui/Card'
import Layout from "../layout/Layout"
//import classes from "../layout/Layout.module.css"

//import Display from '../components/Display';
export default function ServiceProviders() {
  const [IsLoading,setLoading] = useState(false);
  const [Schools,setSchools] = useState([]);
  const ref =fire.firestore().collection("ProviderDetails");

  function getInfo(){
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      
      setSchools(items);
      setLoading(false);
     
    })
  }

  useEffect(() => {
    getInfo();
  })
  
  return (
    <div>
      <h1>Service Providers</h1>
      {Schools.map(e => {
        return(
          <Layout>          <Card>
        <div key={e.id}>
          <h1 style={{textAlign : 'center'}}>{e.Service}</h1>
          <br></br><h3>Name : {e.Name}</h3>
          <br></br><h3>Contact : {e.Contact}</h3>
          <br></br><h3>Location : {e.Location}</h3>
         </div> 
         </Card>
         </Layout>
)
         
      })}
    </div>
  )
}

