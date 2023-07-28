import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='flex justify-between items-center h-[50px]'>
        <div className="logo flex items-center justify-between w-[350px]">
            <img src={logo} className='h-[50px] w-[50px] rounded-full'  alt="" />
            <p className='text-[23px]'>Physics And Astronomy Club</p>
        </div>
        <div className={`sm:flex hidden`}>
            <ul id='navLinks' className="text-primary flex flex-row">
                <li className="list-none navItem"><a className='p-2 py-2 m-2 cursor-pointer text-[18px]' href='#'>Home</a></li>
                <li className="list-none navItem"><a className='p-2 py-2 m-2 cursor-pointer text-[18px]' href='#'>About</a></li>
                <li className="list-none navItem"><a className='p-2 py-2 m-2 cursor-pointer text-[18px]' href='#events'>Events</a></li>
                <li className="list-none navItem"><a className='p-2 py-2 m-2 cursor-pointer text-[18px]' href='#'>Contact</a></li>
            </ul>
        </div>


        <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close: menu} alt="menu" className="h-[28px] w-[28px] object-contain" onClick={()=> {setToggle((prev) => !prev)}}/>
        <div className={`${toggle ? 'block' : 'hidden'} toggle-menu p-6 absolute top-20 right-0 mx-6 my-2 min-w-[140px] rounded-xl `}>
        <ul id='navLinks' className="list-none flex-col justify-center items-center text-primary">
                <li className="text-center list-none navItem mb-3"><a className='cursor-pointer text-[18px]' href='#'>Home</a></li>
                <li className="text-center list-none navItem mb-3"><a className='cursor-pointer text-[18px]' href='#'>About</a></li>
                <li className="text-center list-none navItem mb-3"><a className='cursor-pointer text-[18px]' href='#events'>Events</a></li>
                <li className="text-center list-none navItem mb-3"><a className='cursor-pointer text-[18px]' href='#'>Contact</a></li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar   