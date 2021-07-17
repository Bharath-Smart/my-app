import React,{useState} from 'react'
import { Redirect } from 'react-router-dom';

const Signup = () => {
    const [data,setData] = useState({
        Name : '',
        email : '',
        phone_number : '',
        password : '',
        confirm_password : '',
    })
    const {Name,email,phone_number,password,confirm_password} = data;

    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e => {
        e.preventDefault()
        if(Name.length === 0)
        {
            alert("Invalid Credentials=>Name field cannot be empty!!!")
        }
        else if(email.length === 0)
        {
            alert("Invalid Credentials=>Email field cannot be empty!!!")
        }
        else if(phone_number.length === 0)
        {
            alert("Invalid Credentials=>Phone number field cannot be empty!!!")
        }
        else if (phone_number.length < 10)
        {
            alert("Invalid Credentials=>Enter valid phone number!!!");
        }
        else if(password.length === 0)
        {
            alert("Invalid Credentials=>Password field cannot be empty!!!")
        }
        else if(password.length < 8)
        {
            alert("Invalid Credentials=>Password must be atleast 8 characters long!!!")
        }
        else if(confirm_password.length === 0)
        {
            alert("Confirm password to proceed!!!")
        }
        else if (password !== confirm_password)
        {
            alert("Passwords are not matching!!!")
        }
        else {
            console.log(data);
            alert("Account has been created successfully!!!")
        }
    }
    
    return (
        <div id="signup">
            <h1>Sign-Up</h1>
            <form onSubmit={submitHandler} >
            <input type="text" placeholder="Enter Name" name="Name" value={Name} onChange={changeHandler}/> <br />
            <input type="email" placeholder="Enter Email" name="email" value={email} onChange={changeHandler} /> <br />
            <input type="number" placeholder="Enter Phone number" name="phone_number" value={phone_number} onChange={changeHandler}/> <br />
            <input type="password" placeholder="Enter password" name="password" value={password} onChange={changeHandler} /> <br />
            <input type="password" placeholder="Confirm password" name="confirm_password" value={confirm_password} onChange={changeHandler} /> <br />
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Signup
