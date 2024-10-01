import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import SocialLink from './SocialLink';



const Navbar = ({navBgColor}) => {
    const [showNav, setShowNav] = useState(false);
  return (
    <>
                <nav >
          <div className={`${navBgColor} h-16 flex items-center justify-between px-2 lg:px-10`}>
            <NavLink to='/'>
              <img className='lg:w-28 w-24' src="https://ik.imagekit.io/itsaadi/aditya%20logo.png?updatedAt=1726630091743" alt="" />
            </NavLink>
            <div onClick={() => { setShowNav(!showNav) }} className=' w-10 h-10 bg-white rounded-full p-2 flex items-center justify-center cursor-pointer'>
              <i className={`${showNav ? "ri-close-line " : "ri-menu-3-fill "}text-2xl`}></i>
            </div>
          </div>
          <div className={`${showNav ? "lg:w-1/3 w-full border " : "w-0"} border-gray-700 lg:bg-zinc-900/30 bg-zinc-900/60  backdrop-blur-sm absolute text-white right-0 overflow-hidden duration-500 flex flex-col items-center gap-2 py-10 lg:my-1 lg:mx-3  rounded-2xl`}>
            <NavLink
              className={` p-2 relative inline-block duration-700 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full`}
              to='/'>Home</NavLink>

            <NavLink
              className={`p-2 relative inline-block duration-700 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full`}
              to='/about'>About</NavLink>

            <NavLink
              className={`p-2 relative inline-block duration-700 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full`}
              to='/project'>Project</NavLink>

            <NavLink
              className={`p-2 relative inline-block duration-700 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full`}
              to='/contact'>Contact</NavLink>

            <div className='my-2'>
            <SocialLink/>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar