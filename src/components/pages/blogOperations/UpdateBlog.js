import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateBlog, uploadThumbnail } from '../../../services/operations/blogAPI';
import Loader from '../../Loader';
const UpdateBlog = () => {
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { blogInfo } = useSelector((state) => state.blogInfo);
    const [data, setdata] = useState({
        title: blogInfo?.title,
        category: blogInfo?.category,
        thumbnail: blogInfo?.thumbnail,
        shortDescription: blogInfo?.shortDescription,
        longDescription: blogInfo?.longDescription,
    });

    const { title, category, thumbnail, shortDescription, longDescription } = data;

    const handleOnChange = (e) => {
        setdata((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };



    const editor = useRef(null);
    const [content, setContent] = useState(blogInfo?.longDescription);
    const placeholder = blogInfo.longDescription;
    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: placeholder
        }),
        [placeholder]
    );

    const [loading, setLoading] = useState(false)
    const [imageFile, setImageFile] = useState(null)
    const [previewSource, setPreviewSource] = useState(blogInfo?.thumbnail)

    const fileInputRef = useRef(null)

    const handleClick = () => {
        fileInputRef.current.click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImageFile(file)
            previewFile(file)
        }
    }

    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const handleOnSubmit = () => {
        setLoading(true);
        const formData = new FormData();
        formData.append("displayPicture", imageFile);
        if (!imageFile) {
            try {
                dispatch(updateBlog(blogInfo?._id, title, category, previewSource, shortDescription, content, navigate, token));
            }
            catch (error) {
                console.error("Error:", error);

            }
            setLoading(false);
            return;

        }
        dispatch(uploadThumbnail(formData, token))
            .then((image) => {
                dispatch(updateBlog(blogInfo?._id, title, category, image, shortDescription, content, navigate, token));
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        setLoading(false);
    };


    useEffect(() => {
        if (imageFile) {
            previewFile(imageFile)
        }
    }, [imageFile])

    if (loading)
        return <div className='flex h-screen items-center justify-center'>
            <Loader />
        </div>;

    return (
        <div className='w-full px-2 sm:w-8/12 mx-auto mt-8 flex flex-col justify-around space-y-6 pb-10 text-textColor'>
            <div className='font-semibold text-2xl text-headingColor sm:text-3xl mb-6'>
                Update Blog
            </div>

            {/* Title */}
            <div className='flex flex-col sm:flex-row justify-around items-center gap-x-10 gap-y-4 px-2'>
                <div className='sm:text-md font-medium flex flex-row justify-between sm:w-[200px]'>
                    <div>
                        Title
                    </div>
                    <div>
                        :
                    </div>
                </div>
                <input name="title" value={title} onChange={handleOnChange} type="text" className=' bg-lightNavy rounded-3xl h-[2rem] w-full px-4 ' />
            </div>

            {/* Categories */}
            <div className='flex flex-col sm:flex-row justify-around items-center gap-x-10 gap-y-4 px-2'>
                <div className='sm:text-md font-medium flex flex-row justify-between sm:w-[200px]'>
                    <div>
                        Categories
                    </div>
                    <div>
                        :
                    </div>
                </div>
                <input name="category" value={category} onChange={handleOnChange} type="text" className=' bg-lightNavy rounded-3xl h-[2rem] w-full px-4 ' required={true} />
            </div>

            {/* FeaturedImage */}
            <div className='flex flex-col sm:flex-row justify-around  items-center gap-x-10 gap-y-4 px-2'>
                <div className='sm:text-md font-medium flex flex-row justify-between sm:w-[200px]'>
                    <div>
                        FeaturedImage
                    </div>
                    <div>
                        :
                    </div>
                </div>

                <div className='flex flex-row w-full justify-start items-center gap-x-0 '>
                    <div className="w-full flex items-center justify-between rounded-md border-[1px]  border-richblack-700 bg-richblack-800 py-6 px-4   md:px-12 text-richblack-5 ">
                        <div className="mx-auto flex flex-col  items-center gap-4 ">
                            <img
                                src={previewSource}
                                className="aspect-video w-full sm:h-60 rounded-xl object-contain"
                            />
                            <div className="space-y-2 space-x-2 flex flex-col justify-center items-center">

                                <div className="flex flex-row gap-4">
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden"
                                        accept="image/png, image/gif, image/jpeg"
                                    />
                                    <button
                                        onClick={handleClick}
                                        disabled={loading}
                                        className="bg-slate-500 hover:text-slate-50  text-slate-300 cursor-pointer rounded-lg py-1 px-4 text-sm text-richblack-50"
                                    >
                                        Change Thumbnail
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Short Description */}
            <div className='flex flex-col sm:flex-row justify-around  gap-x-10 gap-y-4 px-2'>
                <div className='sm:text-md font-medium flex flex-row justify-between sm:w-[200px]'>
                    <div>
                        Short Description
                    </div>
                    <div>
                        :
                    </div>
                </div>

                <textarea name="shortDescription" value={shortDescription} onChange={handleOnChange}
                    className=" overflow-hidden w-full px-4 py-2 border rounded-3xl bg-lightNavy text-white"
                    placeholder="Enter your paragraph here..."
                    rows="5"
                />

            </div>

            <div className=' flex flex-col text-black justify-around gap-x-10 gap-y-4 px-2'>
                <div className='sm:text-md font-medium text-textColor flex flex-row gap-5 items-start text-left sm:w-[200px]'>
                    <div>
                        Write blog
                    </div>
                    <div>
                        :
                    </div>
                </div>

                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1}
                    onBlur={newContent => setContent(newContent)}
                    onChange={newContent => { }}
                    className='text-black'
                />

            </div>
            <div className='w-full  flex  justify-center'>
                <button onClick={handleOnSubmit}
                    className='rounded-xl bg-slate-400 hover:text-slate-50 transition-all duration-200 max-w-max'>
                    <div className='py-1 px-6 '>
                        {loading ? <>Loading...</> : <>Submit</>}
                    </div>
                </button>
            </div>
        </div>
    );
}

export default UpdateBlog;
