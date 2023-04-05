import React, {useState} from 'react';
import './signup.css';

export default function SIGNUP(event){
    const [inputs, setInputs] = useState({name:'', email:'', password:''})
    function handleInputs(event){
        let name = event.target.name;
        let value = event.target.value;
        setInputs({...inputs, [name]:value})
        console.log(inputs, 'INPUTS');
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log(inputs, 'INPUT IN SUBMIT BUTTON');
    }
    return (
        <div className="signup">
            <form action="http://localhost:4000/signup/" method="post" id='signup_form'>
                <label htmlFor="name" >Name</label>
                <input type="text" placeholder="enter name" onChange={handleInputs} name="name"/> 
                <br />
                <label htmlFor="email" >Email</label>
                <input type="email" placeholder="enter email" onChange={handleInputs} name="email"/>
                <br />
                <label htmlFor="password" >Password</label>
                <input type="password" placeholder="enter password" onChange={handleInputs} name="password"/>
                <br />
                <button type="submit" form="signup_form" onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}