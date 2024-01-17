import React from 'react'
import { FaComments } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog, author }) => {
    const navigate = useNavigate();
    const dateObject = new Date(blog?.updatedAt);

    const date = dateObject.toLocaleDateString();
    const time = dateObject.toLocaleTimeString();

    

    if (!blog)
        return <>Loading...</>;


    return (
        <div
            onClick={() => { navigate(`/viewBlog/${blog._id}`) }}
            className="w-full p-2  xl:px-5 h-auto xl:py-5 gap-2 rounded-2xl border border-headingColor flex md:flex-row flex-col bg-gradient-to-br from-[#11172A] via-[#1F324D]  to-[#151C33] hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 items-center">

            <div className="  min-w-[250px] w-full rounded-3xl  sm:max-w-[40%] flex flex-col  text-sm gap-y-4 justify-center  items-center ">
                <div className="w-full rounded-3xl flex items-center justify-center mx-auto">
                    <img
                        src={blog.thumbnail}
                        alt="Featured Image"
                        className="w-full aspect-video mx-auto object-contain rounded-3xl  "
                    />
                </div>

                <div className='hidden sm:flex flex-row justify-start items-start gap-4 text-sm sm:text-md'>
                    <div className='flex flex-row items-center gap-2'>
                        <BiSolidLike />
                        <div >
                            {blog?.likes?.length} Likes
                        </div>
                    </div>
                 
                    <div className='flex flex-row items-center gap-2'>
                        <FaComments />
                        <div >
                            {blog?.comments ? blog?.comments.length : 0}  Comments
                        </div>
                    </div>
                
                </div>
            </div>

            <div className='relative gap-y-1 flex flex-col sm:gap-2 mt-4 w-full'>

                <div className=' text-md sm:text-xl sm:gap-01 flex flex-col '>
                    <div className=' text-xs  ml-2 sm:hidden mb-2 sm:mb-0 flex flex-row justify-start items-start gap-4 sm:text-sm sm:text-md'>
                            <div className='flex flex-row items-center gap-2'>
                                <BiSolidLike />
                                <div >
                                    {blog?.likes?.length} Likes
                                </div>
                            </div>
                        
                            <div className='flex flex-row items-center gap-2'>
                                <FaComments />
                                <div >
                                    {blog?.comments ? blog?.comments.length : 0}  Comments
                                </div>
                            </div>
                    </div>
                    <div className='font-semibold text-lg px-1 text-headingColor'>{blog?.title ? blog.title : "Blog Title here"}</div>
                    <div className='mr-2   text-xs sm:text-sm px-1 text-slate-400'> By: {author}</div>
                </div>

                <div className='max-w-[350px] pb-3 sm:pb-10 mt-2 sm:mt-2 sm:max-w-full text-sm sm:text-sm'>
                    {blog?.shortDescription
                        ? blog?.shortDescription
                            .split(' ')
                            .slice(0, 50)
                            .join(' ') + (blog.shortDescription.split(' ').length > 25 ? '...' : '')
                        : 'In the distant realm of Zyrkonia, luminescent crystals called Zythium thrived, granting mystical powers to its inhabitants ... '}
                </div>

                <div className='text-xs sm:text-sm xl:absolute sm:-bottom-3 sm:right-4 text-slate-400 flex flex-row justify-end items-end '>
                    Last Updated At: {date + " " + time}
                </div>
            </div>

        </div>
    )
}

export default BlogCard
