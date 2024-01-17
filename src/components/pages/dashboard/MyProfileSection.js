import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { FaEdit } from "react-icons/fa";
const MyProfileSection = () => {
    
    const { profile } = useSelector((state) => state.profile);
    const { firstName, lastName, email, userId, about, mobileNumber, image } = profile ?? {};



    return (
        <div className='w-full lg:w-8/12 flex flex-col  items-center sm:items-start mx-auto  gap-y-3 gap-x-4'>
            <div className='font-bold text-headingColor text-[1.7rem] mb-2 text-left'>{firstName + ' ' + lastName}</div>
            <div className='relative w-full  flex sm:flex-row flex-col sm:gap-y-1 gap-y-2 gap-x-5 items-center justify-between mb-2 '>

                <div className='w-full  flex items-center justify-center  overflow-hidden rounded-3xl  '>

                    <img src={image} alt="dp" className=' my-auto w-[100px] sm:w-[180px]   aspect-square object-cover rounded-3xl ' />
                </div>

                <div className='w-full flex flex-row text-sm sm:text-lg py-2 px-2 sm:px-8 sm:py-3 h-auto items-center justify-center md:justify-start   sm:items-start gap-2 rounded-2xl sm:gap-4'>

                    <div className='flex flex-col text-[0.7rem] text-lightText sm:gap-3 sm:text-[0.9rem]'>
                        <div>
                            UserID
                        </div>
                        <div>
                            Email
                        </div>
                        <div>
                            Ph No
                        </div>
                    </div>
                    <div className='flex flex-col text-[0.7rem] text-lightText  sm:gap-3 sm:text-[0.9rem]'>
                        <div>
                            :
                        </div>
                        <div>
                            :
                        </div>
                        <div>
                            :
                        </div>
                    </div>
                    <div className='flex flex-col text-textColor sm:gap-3'>
                        <div>
                            {userId ? userId : 'userID'}
                        </div>
                        <div className=''>
                            {email ? email : "emailhere"}
                        </div>
                        <div>
                            {mobileNumber ? mobileNumber : "phoneNumber"}
                        </div>
                    </div>


                </div>

                <div className='absolute  sm:top-5 right-1 sm:-right-10 flex flex-row items-center gap-2 bg-navyBlue p-2 rounded-2xl px-5'>

                    <Link to={`editProfile`}>
                        <FaEdit className='text-headingColor text-sm sm:text-lg ' />
                    </Link>
                </div>

            </div>

            <div className='text-sm sm:text-lg mt-1 px-5  flex justify-center sm:w-full rounded-3xl text-mdtext-center'>
                <div className='mx-auto'>~ {about ? about : 'About'}</div>
            </div>
        </div >
    )
}

export default MyProfileSection;
