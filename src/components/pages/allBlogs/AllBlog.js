import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBlog } from '../../../services/operations/blogAPI';
import Loader from '../../Loader';
import BlogCard from '../BlogCard';

const AllBlog = ({ size = 0 }) => {
  const dispatch = useDispatch();
  const { allBlog } = useSelector((state) => state.allBlog);

  

  useEffect(() => {
    dispatch(fetchAllBlog());
  }, [dispatch]);

  const renderBlogs = () => {
    if (size > 0) {
      return allBlog.slice(0, size).map((blog) => (
        <BlogCard key={blog._id} blog={blog} author={`${blog?.author?.firstName} ${blog?.author?.lastName}`} />
      ));
    } else {
      return allBlog.map((blog) => (
        <BlogCard key={blog._id} blog={blog} author={`${blog?.author?.firstName} ${blog?.author?.lastName}`} />
      ));
    }
    
  };
  if(!allBlog)
  return <div className='min-h-[300px] flex items-center justify-center'><Loader/></div>

  return (
    <div className='text-white py-4 w-full sm:w-8/12 mx-auto flex flex-col justify-between gap-6 mt-4 px-2'>
      <div className='text-md sm:text-2xl text-headingColor font-semibold'>
        Explore Our Blogosphere
      </div>
      <div className='flex flex-col w-full items-center justify-center flex-wrap gap-x-10 gap-y-5 mx-auto overflow-y-hidden'>
        {renderBlogs()}

      </div>
    </div>
  );
};

export default AllBlog;
