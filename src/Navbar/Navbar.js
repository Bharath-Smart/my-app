import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="Blog">
            <nav>
                <ul>
                    <Link to="/"><li>Dashboard</li></Link>
                    <Link to="/Signup"><li>Sign-Up</li></Link>
                    <Link to="/Signin"><li>Sign-In</li></Link>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
