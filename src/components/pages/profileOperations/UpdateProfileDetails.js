import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../../services/operations/profileAPI';

const UpdateProfileDetails = ({ profile }) => {
    const { firstName, lastName, email, userId, about, mobileNumber } = profile;
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstName: firstName,
        lastName: lastName,
        email: email,
        userId: userId,
        about: about,
        mobileNumber: mobileNumber,
    });



    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile(token, formData));
    }

    return (
        <div className="w-full sm:w-6/12 flex flex-col mx-auto items-center justify-around gap-5 my-auto">

            <form
                onSubmit={handleOnSubmit}
                className="mt-6 flex w-full flex-col gap-y-4 items-center px-3 sm:px-0">
                <div className="bg-lightNavy px-5 py-4 sm:py-8 flex flex-col gap-5 sm:gap-10 rounded-[1em] w-full ">

                    <div className="flex flex-col sm:flex-row gap-4  w-full">
                        <div className="flex flex-col sm:flex-row  gap-1 sm:gap-4 justify-center sm:px-4 w-full">
                            <div className="w-[120px] flex flex-row justify-between items-center text-[0.875rem] text-slate-400">
                                <div className="" >
                                    FirstName
                                </div>
                                <div className="hidden sm:block">
                                    :
                                </div>

                            </div>

                            <input required
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleOnChange}
                                placeholder="Enter First Name"
                                className=" text-xs w-full py-1 rounded-xl bg-richblack-800 px-3  placeholder-slate-400 outline-none"
                            />

                        </div>
                        <div className="flex flex-col sm:flex-row  gap-1 sm:gap-4 justify-center sm:px-4 w-full">
                            <div className="w-[120px] flex flex-row justify-between items-center text-[0.875rem] text-slate-400">
                                <div className="" >
                                    LastName
                                </div>
                                <div className="hidden sm:block">
                                    :
                                </div>

                            </div>

                            <input required
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleOnChange}
                                placeholder="Enter Last Name"
                                className=" text-xs w-full py-1 rounded-xl bg-richblack-800 px-3  placeholder-slate-400 outline-none"
                            />

                        </div>
                    </div>


                    <div className="flex flex-col sm:flex-row  gap-1 sm:gap-4 justify-center sm:px-4">
                        <div className="w-[150px] flex flex-row justify-between items-center text-[0.875rem] text-slate-400">
                            <div className="" >
                                Email
                            </div>
                            <div className="hidden sm:block">
                                :
                            </div>

                        </div>

                        <input required
                            type="text"
                            name="email"
                            value={formData.email}
                            disabled
                            onChange={handleOnChange}
                            placeholder="Enter email address"
                            className="cursor-not-allowed text-xs w-full py-1 rounded-xl bg-richblack-800 px-3  placeholder-slate-400 outline-none"
                        />

                    </div>

                    <div className="flex flex-col sm:flex-row  gap-1 sm:gap-4 justify-center sm:px-4">
                        <div className="w-[150px] flex flex-row justify-between items-center text-[0.875rem] text-slate-400">
                            <div className="" >
                                UserID
                            </div>
                            <div className="hidden sm:block">
                                :
                            </div>

                        </div>

                        <input required
                            type="text"
                            name="userId"
                            value={formData.userId}
                            onChange={handleOnChange}
                            placeholder="Enter User ID"
                            className=" text-xs w-full py-1 rounded-xl bg-richblack-800 px-3  placeholder-slate-400 outline-none"
                        />

                    </div>

                    <div className="flex flex-col sm:flex-row  gap-1 sm:gap-4 justify-center sm:px-4">
                        <div className="w-[150px] flex flex-row justify-between items-center text-[0.875rem] text-slate-400">
                            <div className="" >
                                About
                            </div>
                            <div className="hidden sm:block">
                                :
                            </div>

                        </div>

                        <textarea required
                            type="text"
                            name="about"
                            value={formData.about}
                            onChange={handleOnChange}
                            placeholder="Enter User ID"
                            className="text-xs w-full py-1 rounded-xl bg-richblack-800 px-3  placeholder-slate-400 outline-none"
                        />

                    </div>

                    <div className="flex flex-col sm:flex-row gap-4  w-full">
                        <div className="flex flex-col sm:flex-row  gap-1 sm:gap-4 justify-center sm:px-4 w-full">
                            <div className="w-[120px] flex flex-row justify-between items-center text-[0.875rem] text-slate-400">
                                <div className="" >
                                    Ph No
                                </div>
                                <div className="hidden sm:block">
                                    :
                                </div>

                            </div>

                            <input required
                                type="tel"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleOnChange}
                                placeholder="Update Your Mobile Number"
                                className=" text-xs w-full py-1 rounded-xl bg-richblack-800 px-3  placeholder-slate-400 outline-none"
                            />

                        </div>

                    </div>


                </div>

                <div className="flex flex-col gap-2 ">
                    <button
                        type="submit"
                        className="bg-slate-500 px-7 py-2 text-headingColor font-bold rounded-[1em] text-[1rem] hover:bg-slate-600">
                        Save Changes
                    </button>

                </div>

            </form>


        </div>
    )

}

export default UpdateProfileDetails
