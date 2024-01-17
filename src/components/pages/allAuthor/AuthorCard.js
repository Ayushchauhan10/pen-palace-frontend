import React from 'react'
import { useNavigate } from 'react-router-dom'
const AuthorCard = ({author}) => {
  const navigate=useNavigate();


  return (
        <div onClick={()=>{ navigate(`/author/${author?._id}`)}}
        className='max-w-[250px] bg-white  gap-10 flex flex-col h-[180px] sm:h-[220px] items-center justify-center rounded-3xl overflow-hidden'>
            
              <div className='h-[100%] relative sm:h-[220px] bg-headingColor w-full flex items-center justify-center  '>
                    <div className=' absolute  top-8 sm:top-12 rounded-full '>
                      <img src={author.image} alt="images" className='  w-20  aspect-square object-cover  rounded-full border-2 border-headingColor' />
                    </div>
              </div>

              <div className='bg-white h-[100%] flex flex-col items-center justify-center gap-2 '>


                  <div className='text-lightNavy font-semibold text-md '>
                    {author.firstName+' '+author.lastName}
                  </div>

                  <div className='flex flex-col items-center justify-center text-xs text-center px-3'>
                    <div className='text-slate-500'>
                        {author.about? ' ~  '+author.about:''}
                    </div>
                    <div className='text-slate-500 text-xs'>
                        {author.blog.length? 'Written '+ author.blog.length +'+ blogs':'Loves to read'}
                    </div>
                  </div>
              </div>
        
        </div>
  )
}

export default AuthorCard