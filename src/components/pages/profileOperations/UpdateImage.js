import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDisplayPicture } from '../../../services/operations/profileAPI';
import Loader from '../../Loader';



const UpdateImage = ({ profile }) => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const { image } = profile;
    const [loading, setLoading] = useState(false)
    const [imageFile, setImageFile] = useState(null)
    const [previewSource, setPreviewSource] = useState(image)

    const fileInputRef = useRef(null)
    if(loading)
    return <div className='flex h-screen items-center justify-center'>
        <Loader/>
    </div>;
     
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
        dispatch(updateDisplayPicture(token, formData));
    };
    return (
        <div className='text-white w-full'>



            <div className='flex flex-row  max-w-max mx-auto justify-start items-center gap-x-0'>


                <div className=" flex items-center justify-between rounded-md border-[1px]   py-6 px-4   md:px-12 ">
                    <div className="flex justify-center items-center gap-4">
                        <img
                            src={previewSource}
                            className="aspect-square w-12 sm:w-16 rounded-full object-cover "
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
                                    className="cursor-pointer rounded-lg bg-richblack-700 py-1 px-4 text-sm text-richblack-50"
                                >
                                    Select
                                </button>

                                <button disabled={loading} onClick={handleOnSubmit}>
                                    {loading ? "Uploading..." : "Upload"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpdateImage
