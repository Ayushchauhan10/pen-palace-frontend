import React from 'react'
import { useSelector } from 'react-redux';
import Loader from '../../Loader';
import BlogCard from '../BlogCard';
const MyLikeSection = () => {
    const { likes } = useSelector((state) => state.like);

if(!likes)    return <div className='min-h-[300px] flex items-center justify-center'><Loader/></div>
    return (
        <>
            {
                likes?.map((like, i) => (
                    <div key={i} className='w-full'>
                        <BlogCard blog={like?.blog} author={like?.blog?.author?.firstName + ' ' + like?.blog?.author?.lastName} />
                    </div>
                ))
            }
        </>
    )
}

export default MyLikeSection
