import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import AllAuthor from './pages/allAuthor/AllAuthor';
import AllBlog from './pages/allBlogs/AllBlog';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import { Link } from 'react-router-dom';
import Loader from './Loader';
const Home = () => {
  const [text] = useTypewriter({
    words: ["Explore the World of Words . . .", " Unleash Your Imagination. . .", "Read ,Write & Explore. . ."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className='w-full text-white flex  flex-col items-center justify-center mt-10 gap-10'>
        <div className='flex flex-col'>
          <div className='font-bold sm:text-[2rem] mx-auto'>
            Welcome to <span className='sm:px-2 px-1 text-headingColor text-[1.5rem] sm:text-[2.5rem] font-cursive-style animate-pulse '>PenPalace</span>!!
          </div>
          <div className='text-start sm:text-[2rem] mx-auto flex items-center'>
            {text}  
            <Cursor cursorBlinking="false" cursorStyle="|" cursorColor='#4DCAF9'/>
          </div>
        </div>
        
        <div className='relative flex flex-col items-center justify-center  '>
            <AllBlog size={5}/>
            <Link to='/allBlog' className='mx-auto flex flex-col  items-center justify-center  w-[200px]'>
           
              <div className=' absolute -bottom-10 flex flex-col  items-center justify-center animate-bounce text-center bg-red-400 rounded-2xl px-5 py-2  shadow-orange-200 shadow-2xl '>
                See  More Blogs
              </div>
              <MdKeyboardDoubleArrowDown className='text-[2rem] absolute -bottom-20 animate-bounce ' />
            </Link>
        </div>
        <div>
          <AllAuthor/>
        </div>
       
    </div>


  )
}

export default Home
