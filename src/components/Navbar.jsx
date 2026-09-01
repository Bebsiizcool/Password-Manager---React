import React from 'react'
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-500'> &lt;</span>
                    <span>Pass</span><span className='text-green-500'>OP/&gt; </span>

                </div>
                <ul>
                    <li className='hidden md:flex gap-4'>
                        <a className='hover:font-bold' href="">Home</a>
                        <a className='hover:font-bold' href="">About</a>
                        <a className='hover:font-bold' href="">Contact</a>
                    </li>
                </ul>
                <a href="https://github.com/Bebsiizcool/PasswordManager-React" target='_blank'>
                <button className='text-white bg-green-700 flex items-center rounded-lg gap-2 px-3 py-1 cursor-pointer'>
                    <FaGithub className='text-3xl' />
                    GitHub
                </button>
                    </a>
            </div>
        </nav>
    )
}

export default Navbar
