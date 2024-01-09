import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UpdateImage from './UpdateImage';
import UpdateProfileDetails from './UpdateProfileDetails';
import UpdatePassword from './UpdatePassword';
const EditProfile = () => {
    const { profile } = useSelector((state) => state.profile);
    const { firstName, lastName, email, userId, accountType, about, mobileNumber, image } = profile;
    return (
        <div className='flex flex-col items-center w-full gap-4 mt-8 pb-12'>

            <div className='text-2xl font-bold  mx-auto text-headingColor sm:w-6/12 w-9/12 text-left'>
                <h1 className=" ">Edit Profile</h1>
            </div>
            <UpdateImage profile={{ image }} />
            <UpdateProfileDetails profile={{ firstName, lastName, email, userId, accountType, about, mobileNumber }} />
            <UpdatePassword />
        </div>
    );
};

export default EditProfile;
