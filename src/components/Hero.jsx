import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import Navbar from './navbar';



const Hero = () => {
  const navigate = useNavigate()
const goBackHandler = () => {
    navigate("/about")
    
    //* also use  navigate(-1); to go back
}
  return (
    <>
    <header className='h-screen bg-black'>
<Navbar/>
      <div className='h-fit flex flex-col lg:flex-row justify-between'>
            <div className='lg:w-1/2 lg:pl-36 pl-5 lg:flex lg:flex-col lg:justify-center'>
              <h1 className={`font-bold text-7xl md:text-8xl  text-zinc-700`}>I'am a</h1>
              <h1 className={`font-bold text-7xl md:text-8xl text-white`}>Student</h1>
              <p className= ' md:text-xl py-5 text-zinc-400'>Lorem ipsum dolor sit amet.</p>
              <button onClick={goBackHandler} className=' w-fit text-white p-2 border border-blue-300/30 shadow-md shadow-blue-400 rounded-md' ><i className="bg-blue-400 rounded mr-3 p-2 ri-user-line"></i> About</button>
            </div>
              <img className={`lg:w-[45%]`} src="https://ik.imagekit.io/itsaadi/Untitled%20design.png?updatedAt=1727683877469" alt="my img" />
      </div>
      </header>
    </>
  );
};

export default Hero;
