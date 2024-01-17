import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiEdit } from "react-icons/ci";
import { IoIosCheckmark } from "react-icons/io";
import { deleteComment, editComment } from '../../../services/operations/commentAPI';
import { AiOutlineDelete } from "react-icons/ai";



const CommentCard = ({ comment,loading,setLoading }) => {
    const { author, updatedAt } = comment;
    const { id } = useSelector((state) => state.auth)
    const calculateTimeDifference = (timestamp) => {
        const now = new Date();
        const commentDate = new Date(timestamp);
        const differenceInSeconds = Math.floor((now - commentDate) / 1000);

        if (differenceInSeconds < 60) {
            return `${differenceInSeconds} sec ago`;
        } else if (differenceInSeconds < 3600) {
            const minutes = Math.floor(differenceInSeconds / 60);
            return `${minutes} min ago`;
        } else if (differenceInSeconds < 86400) {
            const hours = Math.floor(differenceInSeconds / 3600);
            return `${hours} hr ago`;
        } else if (differenceInSeconds < 2592000) {
            const days = Math.floor(differenceInSeconds / 86400);
            return `${days} ${days === 1 ? 'day' : 'days'} ago`;
        } else {
            const months = Math.floor(differenceInSeconds / 2592000);
            return `${months} ${months === 1 ? 'month' : 'months'} ago`;
        }
    };
    const upDated = calculateTimeDifference(updatedAt);

    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const showEditIcon = (id == author._id)
    const [description, setDescription] = useState(comment.description)
    const [editable, setEditable] = useState(false);
    const editCommentHandler = () => {
        dispatch(editComment(description, comment._id, setLoading, token))
        setEditable(false);
    }
    const deleteCommentHandler = () => {
        dispatch(deleteComment(comment._id, setLoading, token));
    }

    return (
        <div className=" flex flex-row w-full items-center  sm:items-start sm:justify-start px-1 py-1 gap-x-2  ">


            <img
                src={author.image}
                alt={`${author.firstName} ${author.lastName}`}
                className="w-10 h-10 rounded-full"
            />


            <div className="flex flex-col items-start gap-y-1  w-full">
                <div className="flex flex-row items-center gap-x-2 justify-center">
                    <p className="text-xs font-semibold text-slate-200">{`${author.firstName} ${author.lastName}`}</p>
                    <span className="text-gray-400 text-xs ">{upDated}</span>

                </div>
                <div className='w-full flex  justify-between  items-center'>
                    <input type="text"
                        disabled={!editable}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='w-full bg-transparent outline-none text-sm   rounded-md  text-stone-100 '
                    />
                    <div className='flex flex-row gap-1 text-slate-200 cursor-pointer  '>
                        {
                            editable ? (
                                <button onClick={editCommentHandler}>
                                    <IoIosCheckmark className={`${!showEditIcon ? "hidden" : " top-2 right-2 text-3xl  "}`} />
                                </button>) :
                                (
                                    <button onClick={() => setEditable(true)}>
                                        <CiEdit className={`${!showEditIcon ? "hidden" : " top-2 right-2  text-lg "}`} />
                                    </button>)
                        }
                        {
                            showEditIcon && <button onClick={deleteCommentHandler}><AiOutlineDelete /></button>
                        }

                    </div>
                </div>
            </div>
        </div >
    );
};

export default CommentCard;
