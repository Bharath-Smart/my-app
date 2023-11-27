import React,{useState} from 'react'

const Signin = () => {
    const [data,setData] = useState({
        email : '',
        password : '',
    })
    const {email,password} = data;

    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e => {
        e.preventDefault()
        if(email.length === 0)
        {
            alert("Email field cannot be empty!!!")
        }
        else if(password.length === 0)
        {
            alert("Password field cannot be empty!!!")
        }
        else if(password.length < 8)
        {
            alert("Password must be atleast 8 characters long!!!")
        }
        else {
            console.log(data);
            alert("Signed-In successfully!!!")
        }
    }
    
    return (
        <div id="signin">
            <h1>Sign-In</h1>
            <form onSubmit={submitHandler} >
            <input type="email" placeholder="Enter Email" name="email" value={email} onChange={changeHandler} /> <br />
            <input type="password" placeholder="Enter password" name="password" value={password} onChange={changeHandler} /> <br />
            <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Signin
