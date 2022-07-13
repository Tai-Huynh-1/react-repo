import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"

const Navbar = () => {
  return (
    <nav className='border-b'>
        <div className='flex justify-between py-2 px-4 space-x-4 container mx-auto'>
            <div className='my-auto'>
                <Link to="/">
                    <img src={logo} />
                </Link>
            </div>

            <div className='my-auto space-x-6'>
                <Link to="/pizzas">Pizza</Link>
                <Link to="/users">User</Link>
            </div>
            
            <div className='my-auto space-x-3'>
                <Link to="/auth/login">Login</Link>
                <Link to="/auth/register" className='bg-indigo-500 text-white py-2 px-3 rounded-md'>Sign Up</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar