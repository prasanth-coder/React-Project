import React,{useRef} from 'react'
import Card from '../ui/Card'
import classes from "./CusForm.module.css"

export default function WorkForm() {
    
    const nameInputRef = useRef();
    const serviceInputRef = useRef();
    const addressInputRef = useRef();
    const experienceInputRef = useRef();
    const phonenoInputRef = useRef();
    const pincodeInputRef = useRef();

    function submitHandler(e){
        //e.preventDefault();
       

        const enteredName = nameInputRef.current.value;
        const enteredService = serviceInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredExperience = experienceInputRef.current.value;
        const enteredPhoneno = phonenoInputRef.current.value;
        const enteredPincode = pincodeInputRef.current.value;

        const workerData = {
            Name : enteredName,
            Service : enteredService,
            experience : enteredExperience,
            Address : enteredAddress,
            Phoneno : enteredPhoneno,
            Pincode : enteredPincode
        }
        fetch('https://mini-project-5a434-default-rtdb.firebaseio.com/workersInfo.json',
        {
            method : 'POST',
            body : JSON.stringify(workerData),
            headers : {
                'Content-Type' : "application/json"
            }
        }
        )

        alert("ThankYou for Apply.... Our Team Will Contact You As Soon As Possible...."); 
    }
    return (
        <Card>
        <form className={classes.form} onSubmit={submitHandler}>
               <div className={classes.control}>
                   <label htmlFor="name">Name</label>
                   <input type="text" id="name" ref={nameInputRef} required/>
                </div>
                <div className={classes.control}>
                   <label htmlFor="service">Service</label>
                   <input type="text" id="service" ref={serviceInputRef} required/>
                </div>
                <div className={classes.control}>
                    <label>Years of Service</label>
                    <input type="number" id="year" ref={experienceInputRef} required/>
                </div>
               
                <div className={classes.control}>
                   <label htmlFor="address">Address</label>
                   <textarea id="address" rows="5" ref={addressInputRef} required></textarea>
                </div>
                <div className={classes.control}>
                   <label htmlFor="phoneno">Phone Number</label>
                   <input type="text" id="phoneno" ref={phonenoInputRef} required/>
                </div>
                <div className={classes.control}>
                   <label htmlFor="pincode">Pincode</label>
                   <input type="text" id="pincode" ref={pincodeInputRef} required/>
                </div>

                <div className={classes.actions}>
                <button>Submit</button>
                </div>
           </form>
           </Card> 
    )
}
