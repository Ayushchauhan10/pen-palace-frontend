import React from 'react'
import { useSelector } from 'react-redux';
import UserCommentCard from './UserCommentCard';
import Loader from '../../Loader';
const MyCommentSection = () => {
    const { comments } = useSelector((state) => state.comment);

    if(!comments)    return <div className='min-h-[300px] flex items-center justify-center'><Loader/></div>
    return (
        <div className='flex flex-col gap-2 items-start justify-start w-full  '>

            {comments?.map((comment, index) => (
                <UserCommentCard key={index} comment={comment} />
            ))}

        </div>
    )
}

export default MyCommentSection
