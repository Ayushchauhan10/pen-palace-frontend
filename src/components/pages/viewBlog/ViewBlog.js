import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteBlog, fetchBlog } from '../../../services/operations/blogAPI';
import { FaDollarSign } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart, AiTwotoneDelete } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';
import { CiEdit } from "react-icons/ci";
import { dislikeBlog, likeBlog } from '../../../services/operations/likeAPI';
import CommentCard from './CommentCard';
import AddComment from './AddComment';
import Loader from '../../Loader';
const copy = require('copy-to-clipboard');

const ViewBlog = () => {

    const { blogId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token, id } = useSelector((state) => state.auth);
    const { blogInfo } = useSelector((state) => state.blogInfo);
    const editable = (blogInfo?.author?._id === id);

    const { likes } = useSelector((state) => state.like);
    const [liked, setLiked] = useState(false);
    const [likess, setLikess] = useState(0);
    const [loading, setLoading] = useState(false);


    const likeHandler = () => {
        dispatch(likeBlog(blogInfo?._id, setLoading, token, setLiked));
    }
    const dislikeHandler = () => {
        dispatch(dislikeBlog(blogInfo?._id, setLoading, token, setLiked));
    }


    useEffect(() => {
        dispatch(fetchBlog(blogId));
    }, [blogId, loading, dispatch]);


    useEffect(() => {
        if (blogInfo) {
            setLikess(blogInfo?.likes.length)
            const res = likes.some(like => {
                return like.blog?._id === blogInfo?._id;
            });
            setLiked(res);
        }
    }, [blogInfo?.likes]);

   
    
    if(!blogInfo)    return <div className='h-screen flex items-center justify-center'><Loader/></div>

    const { title, category, thumbnail, longDescription, comments, author, updatedAt } = blogInfo ?? {};
    const { firstName, lastName } = author;

    const dateObject = new Date(updatedAt);

    const date = dateObject.toLocaleDateString();
    const time = dateObject.toLocaleTimeString();


    const deleteHandler = () => {
        dispatch(deleteBlog(blogInfo._id, token, navigate));
    }

    if(loading)
    return <Loader/>;


    return (
        <div className=' w-full md:w-10/12 lg:w-10/12 flex flex-col  items-center gap-5 mx-auto  px-1 pb-10'>
            {/* blog */}
            <div className='relative flex flex-col gap-2 text-white md:w-8/12 mx-auto '>
                {
                    editable && (<div className='absolute top-10 right-2 text-lg sm:text-2xl gap-2 flex items-center justify-center'>
                        <button onClick={() => navigate('/updateBlog')}>
                            <CiEdit />
                        </button>
                        <button onClick={deleteHandler}>
                            <AiTwotoneDelete />
                        </button>
                    </div>)
                }
                {/* {title} */}
                <div className='mx-0'>
                    <h1 className='text-lg sm:text-xl text-headingColor  py-1 rounded-3xl font-bold italic'>
                        {title ? title : 'No Title'}
                    </h1>
                </div>

                {/* author */}
                <div className='text-xs sm:text-sm hover:underline cursor-pointer text-lightText'
                    onClick={() => navigate(`/author/${blogInfo?.author?._id}`)}>
                    By: {firstName ? firstName + ' ' + lastName : "authorname"}
                </div>

                {/* thumbnail */}
                <div className='mx-auto w-full sm:w-[60%] py-2 px-2 '>
                    <img src={thumbnail} alt=" thumbnail "
                        className="w-full  z-[-100] rounded-2xl aspect-video  sm:h-60 object-contain"
                    />
                </div>

                {/* likes and support */}
                <div className='flex flex-row gap-4  h-[2em] text-gray-300 text-sm sm:text-md'>
                    {/* likes */}
                    <div className='cursor-pointer flex flex-row items-center  gap-1 ' >

                        <button
                            // onClick={handleLikeClick}
                            disabled={loading}
                            className='w-6'
                        >
                            {liked ? (
                                <AiFillHeart className="mr-1 text-red-500  text-xl sm:text-2xl" onClick={dislikeHandler} />
                            ) : (
                                <AiOutlineHeart className="text-lg sm:text-xl" onClick={likeHandler} />
                            )}
                        </button>
                        {likess}
                    </div>

                    <div className="cursor-pointer flex flex-row items-center justify-around gap-2 w-auto ">
                        <FaDollarSign />
                        Support
                    </div>
                    <div className="cursor-pointer flex items-center w-auto gap-2 justify-center " onClick={() => copy(new URL(window.location.href))}>
                        <FaShare />
                        Share
                    </div>
                </div>

                <div className=' text-gray-300 mt-[-1] text-sm sm:text-md'>
                    <div>Last Updated : {date} at {" "} {time}</div>
                </div>

                <div className='mt-3  bg-lightNavy px-5 py-4 rounded-2xl flex flex-col gap-5'>
                    <div className='flex flex-row text-sm sm:text-md'>
                        <div>Categories :</div>
                        <div> {category}</div>
                    </div>
                    <div className='text-sm sm:text-[1rem] leading-relaxed'>
                        <div dangerouslySetInnerHTML={{ __html: longDescription }} />
                    </div>
                </div>
            </div>

            {/* comments */}
            <div className='md:w-8/12 flex flex-col w-full mx-0 gap-4'>

                <div className='font-bold '>
                    <h1 className='text-headingColor '>Comments :</h1>
                </div>

                <div className='flex flex-col gap-2 w-full'>
                    <AddComment blogId={blogId} loading={loading} setLoading={setLoading} />

                    {
                        comments.length > 0 && (
                            <div className='bg-lightNavy w-full h-auto px-3 py-2 rounded-2xl gap-2 '>
                                {comments?.map((comment, i) =>
                                    <div key={i} className={`${i !== comments.length ? "border-b-2 border-slate-500" : ""} w-full mb-2`}
                                    >
                                        <CommentCard comment={comment} loading={loading} setLoading={setLoading} />
                                    </div>
                                )}
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
};
export default ViewBlog;
