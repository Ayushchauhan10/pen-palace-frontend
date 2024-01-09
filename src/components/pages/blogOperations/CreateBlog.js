import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBlog, uploadThumbnail } from '../../../services/operations/blogAPI';
import Loader from '../../Loader';
const CreateBlog = () => {
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setdata] = useState({
        title: "",
        category: "",
        thumbnail: "",
        shortDescription: "",
        longDescription: "",
    });

    const { title, category, thumbnail, shortDescription, longDescription } = data;

    const handleOnChange = (e) => {
        setdata((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };



    const editor = useRef(null);
    const [content, setContent] = useState('');
    const placeholder = "Start tpying...";
    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: placeholder
        }),
        [placeholder]
    );

    const [loading, setLoading] = useState(false)
    const [imageFile, setImageFile] = useState(null)
    const [previewSource, setPreviewSource] = useState(null)

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
        const formData = new FormData();
        formData.append("displayPicture", imageFile);
        dispatch(uploadThumbnail(formData, token, setLoading))
            .then((image) => {
                dispatch(createBlog(title, category, image, shortDescription, content, navigate, token, setLoading));
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };


    useEffect(() => {
        if (imageFile) {
            previewFile(imageFile)
        }
    }, [imageFile])

  if(loading)
  return <Loader/>;
    return (
        <div className='w-full px-2 sm:w-8/12 mx-auto mt-8 flex flex-col justify-around space-y-6 pb-10 text-textColor'>
            <div className='font-semibold text-2xl text-headingColor sm:text-3xl mb-6'>
                Create Blog
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
                <input name="title" value={title} onChange={handleOnChange}
                placeholder="Title of the blog ..." type="text" className=' bg-lightNavy rounded-3xl h-[2rem] w-full px-4 placeholder:text-sm ' />
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
                <input name="category" value={category}
                placeholder="Category of the blog (ex: Science,Adventure)" onChange={handleOnChange} type="text" className=' bg-lightNavy rounded-3xl h-[2rem] w-full px-4 placeholder:text-sm  ' required={true} />
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

                <div className='flex flex-row w-full justify-start items-center gap-x-0  '>
                    <div className="w-full flex items-center justify-between rounded-3xl border-2 border-lightNavy   border-richblack-700 bg-richblack-800 py-6 px-4   md:px-12 text-richblack-5 ">
                        <div className="relative mx-auto flex flex-col  items-center gap-4 ">
                            <img
                                src={previewSource}
                                className="aspect-video w-full sm:h-60 rounded-xl object-contain"
                            />

                            <div className="space-y-2 space-x-2 flex flex-col justify-center items-center ">

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
                                        className="bg-slate-500 hover:text-slate-50  text-slate-200 cursor-pointer rounded-lg py-1 px-4 text-sm "
                                    >
                                        Choose Thumbnail
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
            <button onClick={handleOnSubmit}
                className='bg-slate-500 w-max mx-auto  py-1 px-4 rounded-3xl text-white'>
                {loading ? "Loading... " : "Submit"}
            </button>
        </div>
    );
}

export default CreateBlog;
