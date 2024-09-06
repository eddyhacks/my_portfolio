import React from 'react'
import logo from "../assets/new_logo.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => (
    <nav className='flex items-center justify-between'>
        <div className='flex flex-shrink-0 items-center'>
            <a href=""><img className='mx-2 w-24' src={logo} alt="logo" /></a>
            
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.instagram.com/aditya__goyal/" target='_blank'>
        <FaInstagram />
        </a>

        <a href="https://www.github.com/eddyhacks" target='_blank'>
        <FaGithub />
        </a>
        
        <a href="https://www.linkedin.com/in/adityagoyal08/" target='_blank'>
        <FaLinkedin />
        </a>
        <a href="https://wwww.facebook.com" target='_blank'>
        <FaFacebook />
        </a>
        </div>
    </nav>
)

export default Navbar