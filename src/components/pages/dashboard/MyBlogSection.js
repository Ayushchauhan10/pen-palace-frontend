import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../Loader';
import BlogCard from '../BlogCard';
const MyBlogSection = () => {
    const { blogs } = useSelector((state) => state.blog);
    const { profile } = useSelector((state) => state.profile);
    const { firstName, lastName } = profile ?? {};
    if(!blogs)   
       return <div className='min-h-[300px] flex items-center justify-center'><Loader/></div>
    return (
        <>
            {
                blogs?.map((blog, i) => (
                    <div key={i} className='w-full' >
                        <BlogCard blog={blog} author={firstName + ' ' + lastName}/>
                    </div>
                ))
            }
        </>
    )
}

export default MyBlogSection
