import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
const AuthorCard = ({author}) => {
  const navigate=useNavigate();


  return (
    <div onClick={()=>{ navigate(`/author/${author?._id}`)}}
     className='max-w-[250px] bg-white relative gap-10 flex flex-col h-[220px] items-center justify-center rounded-3xl overflow-hidden'>
         
          <div className=' h-[220px] bg-headingColor w-full flex items-center justify-center '>
                <div className=' absolute  top-12 rounded-full '>
                   <img src={author.image} alt="image" className='  w-20 h-20 object-cover  rounded-full border-2 border-headingColor' />
                </div>
          </div>

          <div className='bg-white h-[70%] flex flex-col items-center justify-center gap-2 '>


              <div className='text-lightNavy font-semibold '>
                {author.firstName+' '+author.lastName}
              </div>

              <div className='flex flex-col items-center justify-center '>
                <div className='text-slate-500'>
                    {author.about? ' ~  '+author.about:''}
                    {/* {JSON.stringify(author?._id)} */}
                </div>
                <div className='text-slate-500 text-sm'>
                    {author.blog.length? 'Written '+ author.blog.length +'+ blogs':'Loves to read'}
                </div>
              </div>
          </div>
     
    </div>
  )
}

export default AuthorCard