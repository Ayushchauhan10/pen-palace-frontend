import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Link,useNavigate } from 'react-router-dom'
import { FaBlog } from "react-icons/fa6";
import './../index.css';
import { BsPersonCircle } from "react-icons/bs";
import { RiLogoutCircleRFill } from 'react-icons/ri'
import { IoMdLogOut } from "react-icons/io";

import { MdDashboardCustomize } from "react-icons/md";
import { PiPencilSimpleLineFill } from "react-icons/pi";

import { logout } from '../services/operations/authAPI';
import { AiFillHome } from "react-icons/ai";
import HamburgerIcon from '../constants/HamburgerIcon';

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [showNav,setShowNav] =useState(false);
  const handleShowNav = ()=>{
       setShowNav(!showNav);
  }
  return (
    <div className='w-full sm:w-10/12 mx-auto flex flex-row justify-between  mt-4 px-2 text-xl sm:text-3xl z-[100]'>
      <Link to='/'>
        <div className='flex flex-row gap-2 text-headingColor  items-baseline justify-center '>
          <FaBlog className='animate-pulse'/>
          <div className='font-cursive-style' >
            PenPalace
          </div>
        </div>
        </Link>
        <div>
          <button onClick={handleShowNav} className='relative'>
            <HamburgerIcon handleShowNav={handleShowNav} showNav={showNav}  />
          </button>
        {
          showNav?
          <div onClick={handleShowNav} className='relative'>
          

          <div className="absolute right-10 flex flex-col gap-x-1 gap-y-2 ">
              <Link to='/'>
              <div className='group relative z-[10]'>
                <div className=" absolute bg-headingColor w-[3.2rem] h-[3.2rem]  sm:w-[3.8rem] sm:h-[3.8rem] rounded-full flex items-center justify-center animate-navBarItems1">
                  <AiFillHome className="text-white text-3xl sm:text-4xl" />
                </div>
                <span className="absolute w-[3.2rem] hidden bg-white text-xs sm:top-[-0.5rem] sm:right-[3rem] px-2 py-1 rounded-xl group-hover:block">
                    Home
                </span>
              </div>
              </Link>

              <Link to='/createBlog' >
                <div className='group relative z-[10]'>
                  <div className="absolute bg-headingColor w-[3.2rem] h-[3.2rem] sm:w-[3.8rem] sm:h-[3.8rem] rounded-full flex items-center justify-center animate-navBarItems2">
                    <PiPencilSimpleLineFill className="text-white text-3xl sm:text-4xl" />
                  </div>
                  <span className="absolute w-max hidden bg-white text-xs sm:top-[3.2rem] sm:right-[0rem] px-2 py-1 rounded-xl group-hover:block">
                    Write a Blog
                  </span>
                  </div>
                </Link>


              <Link to='/dashboard'>
              <div className='group relative z-[10]'>
                <div className="absolute bg-headingColor  w-[3.2rem] h-[3.2rem]  sm:w-[3.8rem] sm:h-[3.8rem] rounded-full flex items-center justify-center animate-navBarItems3 ">
                    <MdDashboardCustomize className="text-white text-3xl sm:text-4xl" />
                  </div>
                <span className="absolute w-max text-start hidden bg-white text-xs sm:top-[4.4rem] sm:right-[-0.5rem] px-2 py-1 rounded-xl group-hover:block">
                  Dashboard
                </span>
              </div>
              </Link>
            

              <div className='group relative z-[10]'>

              <div className="absolute bg-headingColor  w-[3.2rem]  h-[3.2rem]  sm:w-[3.8rem] sm:h-[3.8rem] rounded-full flex items-center justify-center animate-navBarItems4 ">
                  
                { 
                token ?  
                  <button
                    onClick={() => dispatch(logout(navigate))}>
                    <IoMdLogOut className="text-white text-3xl sm:text-4xl" />
                  </button>
                :
                
                <Link to='/login'>
                    <BsPersonCircle className="text-white text-3xl sm:text-4xl" />
                </Link>
                  
                  
                  }
                
                </div>
                <span className="absolute w-max justify-center items-center hidden bg-white text-xs sm:top-[5.5rem] sm:-right-[3rem] px-2  py-1 rounded-xl group-hover:block">
                {token?'Logout':'LogIn'}
                </span>
                </div>

            
            
          </div> 
        
          </div>
          : 
        ''
        }
        </div>
      
    </div>
  )
}
