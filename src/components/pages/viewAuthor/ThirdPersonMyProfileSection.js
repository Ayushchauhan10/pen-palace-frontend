import React from 'react'
import { useSelector } from 'react-redux';

const ThirdPersonMyProfileSection = ({profile}) => {
  
    const { firstName, lastName, email, userId, accountType, about, mobileNumber, image } = profile ?? {};

    
    return (
        <div className='flex flex-col  items-center sm:items-start mx-auto  gap-y-3 gap-x-4'>
            <div className='font-bold text-headingColor text-[1.7rem] mb-2 text-left'>{firstName + ' ' + lastName}</div>
            <div className='relative w-full  flex sm:flex-row flex-col sm:gap-y-1 gap-y-2 gap-x-5 items-center justify-between mb-2 '>

                <div className='w-full flex items-center justify-center  overflow-hidden rounded-3xl '>
                    <img src={image} alt="dp" className='w-[100px] my-auto  sm:w-[180px] aspect-square rounded-3xl ' />
                </div>

                <div className='w-full flex flex-row text-sm sm:text-lg py-2 px-2 sm:px-8 sm:py-3 h-auto items-center justify-center  sm:items-start gap-2 rounded-2xl sm:gap-4'>

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



            </div>

            <div className='mt-3 flex flex-row items-center justify-around sm:gap-x-2 gap-x-5 gap-y-2 sm:w-full mx-4'>
                <div className='text-lightHeading sm:w-[15%]'>
                    About :
                </div>
                <div className=' px-5 py-1 sm:w-full rounded-3xl text-md'>
                    {about ? about : 'About'}
                </div>
            </div>
        </div >
    )
}

export default ThirdPersonMyProfileSection;
