import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAuthor } from '../../../services/operations/authorAPI';
import AuthorCard from './AuthorCard';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import Loader from '../../Loader';

const AllAuthor = () => {
  const dispatch = useDispatch();
  const { allAuthor } = useSelector((state) => state.allAuthor);

  useEffect(() => {
    dispatch(fetchAllAuthor());
  }, [dispatch]);
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "center",
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  


  return (
    <div className='text-white py-4 w-full mx-auto mt-4 px-2 '>
      <div className='text-md font-semibold sm:text-2xl text-headingColor mb-4'>
        Meet the Minds
      </div>
      <div className='mx-auto lg:w-[900px] md:w-[800px] w-[350px] px-3  '>

              {
          allAuthor ? (
            <Slider {...settings}>
             { allAuthor?.map((author, index) => (
                <div className='flex  gap-1' key={author._id}>
                  <AuthorCard author={author} />
                </div>
              ))}
            </Slider>
          ) : (
            <div className='w-full flex items-center justify-center'>
              <Loader />
            </div>
  )
}


      </div>
    </div>
  );
};

export default AllAuthor;
