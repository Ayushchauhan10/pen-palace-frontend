import React, { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../services/operations/commentAPI';


const AddComment = ({ blogId, loading, setLoading }) => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth)
    const [description, setDescription] = useState("");

    const addCommentHandler = () => {
        dispatch(addComment(description, blogId, setLoading, token))
        setDescription("");
    }
    return (
        <div className='bg-lightNavy px-4 py-1 sm:py-2  rounded-2xl flex flex-row gap-2  items-center w-full'>
            <button onClick={loading ? undefined : addCommentHandler}>
                <IoIosAddCircle className='text-textColor text-2xl' />
            </button>
            <input
                className='bg-transparent outline-none border-b-2 border-slate-500 transition-all duration-200 text-slate-50 text-sm  focus:border-slate-300 w-full  '
                placeholder='Add Comment...'
                disabled={loading}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>
    )
}

export default AddComment
