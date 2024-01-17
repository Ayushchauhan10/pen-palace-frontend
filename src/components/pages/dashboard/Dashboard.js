import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserBlog, getUserComment, getUserLike, getUserProfile } from '../../../services/operations/authAPI';
import MyProfileSection from './MyProfileSection';
import MyBlogSection from './MyBlogSection';
import MyCommentSection from './MyCommentSection';
import MyLikeSection from './MyLikeSection';
import Loader from '../../Loader';


const Dashboard = () => {
    const { token, id } = useSelector((state) => state.auth);
    const { profile } = useSelector((state) => state.profile);
    const { blogs } = useSelector((state) => state.blog);
    const { likes } = useSelector((state) => state.like);
    const { comments } = useSelector((state) => state.comment);
    const dispatch = useDispatch();

    const [activeDiv, setActiveDiv] = useState(1);
    const handleDivClick = (divNumber) => {
        setActiveDiv(divNumber);
    };
    useEffect(() => {
        dispatch(getUserProfile(token, id));
        dispatch(getUserBlog(token, id));
        dispatch(getUserComment(token, id));
        dispatch(getUserLike(token, id));
    }, []);

    if(!profile)
    return <div className='flex h-screen items-center justify-center'>
    <Loader/>
</div>;

    return (
        <div className='no-scrollbar w-full md:w-10/12 lg:w-8/12 px-2 flex flex-col gap-y-10 mx-auto mt-3 text-white'>
            <MyProfileSection />

            <div className='w-full relative flex flex-col gap-5 items-center justify-center px-1 pb-10  mx-auto'>
                <div className='relative text  w-full py-2  items-center justify-around text-xs 
                          sm:text-[1rem] rounded-full  flex gap-2 sm:gap-0 bg-gradient-to-br from-[#11172A] via-[#1F324D]  to-[#151C33] border border-headingColor'>
                    {/* Blue background div for smooth transition */}
                    <div
                        className={`absolute top-0 left-0 h-full bg-headingColor transition-transform ease-in-out duration-300 rounded-full w-[33.33%] 
                         ${activeDiv == 1 && 'translate-x-0'}  
                         ${activeDiv == 2 && 'translate-x-[100%]'}
                         ${activeDiv == 3 && 'translate-x-[200%]'}`}
                    />

                    <div
                        className={`w-full  cursor-pointer relative z-10 px-3  sm:px-4 sm:py-2 rounded-full
                            ${activeDiv === 1 ? `text-navyBlue` : `text-textColor`}`}
                        onClick={() => handleDivClick(1)}
                    >
                        <h2 className='text-center'>My Blogs ({blogs?.length})</h2>
                    </div>

                    <div
                        className={`w-full cursor-pointer relative z-10 px-3 sm:px-4 sm:py-2 rounded-full
                            ${activeDiv === 2 ? `text-navyBlue` : `text-textColor`}`}
                        onClick={() => handleDivClick(2)}
                    >
                        <h2 className='text-center'>Likes ({likes?.length})</h2>
                    </div>

                    <div
                        className={`w-full cursor-pointer relative z-10  sm:px-4 sm:py-2 rounded-full
                            ${activeDiv === 3 ? `text-navyBlue` : `text-textColor`}`}
                        onClick={() => handleDivClick(3)}
                    >
                        <h2 className='text-center'>Comments ({comments?.length})</h2>
                    </div>
                </div>
                <div
                    className=" flex flex-col  w-full   items-center justify-center flex-wrap gap-x-10 gap-y-5 mx-auto  overflow-y-hidden "
                >
                    {activeDiv === 1 ? <MyBlogSection /> : ''}
                    {activeDiv === 2 ? <MyLikeSection /> : ''}
                    {activeDiv === 3 ? <MyCommentSection /> : ''}

                </div>


            </div>
        </div >
    )
}

export default Dashboard
