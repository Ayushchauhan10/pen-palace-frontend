import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ThirdPersonMyProfileSection from './ThirdPersonMyProfileSection';
import { getAuthorProfile } from '../../../services/operations/authorAPI';
import { useParams } from 'react-router-dom';
import BlogCard from '../BlogCard'
import Loader from '../../Loader';
const ThirdPersonDashboard = () => {
    const dispatch = useDispatch();
    const { author } = useSelector((state) => state.author)
    const { authorId } = useParams();


    useEffect(() => {
        dispatch(getAuthorProfile(authorId));
    }, []);
    if(!author)
    return <div className='flex h-screen items-center justify-center'>
        <Loader/>
    </div>;
    return (
        <div className=' w-full sm:w-10/12 px-2 flex flex-col gap-y-10 mx-auto mt-3 text-white'>
            <ThirdPersonMyProfileSection profile={author} />

            <div className='w-full relative flex flex-col gap-5 items-start justify-start px-1 pb-10 md:w-8/12 mx-auto'>
                <div className=' text  py-2 sm:py-0 text-headingColor items-start justify-start text-xs sm:text-lg rounded-[1em]  flex gap-2 sm:gap-0'>

                    <div
                        className={'w-full  cursor-pointer  z-10 px-3  sm:px-4 sm:py-2 rounded-full'}
                    >
                        <h2 className='text-center font-bold'>My Blogs ({author?.blog?.length}) :</h2>
                    </div>


                </div>

                <div className=" flex flex-col  w-full   items-center justify-center flex-wrap gap-x-10 gap-y-5 mx-auto  overflow-y-hidden ">
                    <>
                        {
                            author?.blog?.map((blog, i) => (
                                <div key={i} className='w-full' >
                                    <BlogCard blog={blog} author={author?.firstName + ' ' + author?.lastName} />
                                </div>
                            ))
                        }
                    </>
                </div>


            </div>
        </div >
    )
}

export default ThirdPersonDashboard;
