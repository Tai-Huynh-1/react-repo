import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"

const Navbar = () => {
  return (
    <nav className='space-x-4 border-b flex justify-between py-2 px-4'>
        <div className='my-auto'>
            <Link to="/">
                <img src={logo} />
            </Link>
        </div>

        <div className='my-auto space-x-6'>
            <Link to="/pizza">Pizza</Link>
            <Link to="/user">User</Link>
        </div>
        
        <div className='my-auto space-x-3'>
            <Link to="/login">Login</Link>
            <Link to="/signup" className='bg-blue-600 text-white py-2 px-3 rounded-md'>Sign Up</Link>
        </div>
    </nav>
  )
}

export default Navbar