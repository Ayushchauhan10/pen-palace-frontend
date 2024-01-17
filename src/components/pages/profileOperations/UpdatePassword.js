import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword } from '../../../services/operations/profileAPI';

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({ oldPassword: "", newPassword: "" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleOnSubmit = () => {
        dispatch(updatePassword(token, formData));
    }
    return (
        <div className='flex flex-col justify-center items-center gap-y-2'>
                    <div className=" ">
                        <label className="block sm:text-sm text-xs  mb-2 font-semibold text-slate-400 ">OldPassword:</label>
                        <input
                            type="text"
                            name="oldPassword"
                            value={formData.oldPassword}
                            onChange={handleChange}
                            className="sm:min-w-[400px]  min-w-full  px-4 py-1 text-sm bg-slate-300 border rounded-3xl "
                        />
                    </div>
                
                    <div className=" ">
                        <label className="block sm:text-sm text-xs  mb-2 font-semibold text-slate-400 ">NewPassword:</label>
                        <input
                            type="text"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className="sm:min-w-[400px]  min-w-full  px-4 py-1 text-sm bg-slate-300 border rounded-3xl "
                        />
                    </div>
                
                    <button onClick={handleOnSubmit} 
                className="bg-slate-500 px-7 py-2 text-headingColor font-bold rounded-[1em] text-[1rem] mx-auto hover:bg-slate-600">
                        Update Password
                    </button>
        </div>
    )
}

export default UpdatePassword
