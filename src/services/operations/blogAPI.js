import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../api"
import { setBlogInfoLoading, setBlogInfoData } from "../../slices/blogInfoSlice"
import { setAllBlogLoading, setAllBlogData } from "../../slices/allBlogSlice"
const { ALL_BLOG_API, VIEW_BLOG, CREATE_BLOG_API, UPDATE_BLOG_API, DELETE_BLOG_API, UPLOAD_THUMBNAIL_API } = endpoints;


export function fetchBlog(id) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setBlogInfoLoading(true))
        try {
            const response = await apiConnector("POST", VIEW_BLOG, { id })

            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }

            // toast.success("Fetched Blog Successful")

            dispatch(setBlogInfoData(response.data.data))
            localStorage.setItem("blogInfo", JSON.stringify(response.data.data))

        } catch (error) {
            toast.error(error.response.data.message);
        }
        dispatch(setBlogInfoLoading(false))
        toast.dismiss(toastId)
    }
}


export function fetchAllBlog(id) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        // console.log("hi")
        dispatch(setAllBlogLoading(true))
        try {
            const response = await apiConnector("GET", ALL_BLOG_API)

            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }

            toast.success("Blogs Fetched Successful")

            dispatch(setAllBlogData(response.data.data))
            localStorage.setItem("allBlog", JSON.stringify(response.data.data))

        } catch (error) {
            toast.error(error.response.data.message);
        }
        dispatch(setAllBlogLoading(false))
        toast.dismiss(toastId)
    }
}

export function createBlog(title, category, thumbnail, shortDescription, longDescription, navigate, token, setLoading) {
    return async (dispatch) => {

        const toastId = toast.loading("Loading...")
        setLoading(true);
        try {
            const response = await apiConnector("POST", CREATE_BLOG_API,
                { title, category, thumbnail, shortDescription, longDescription },
                {
                    'content-type': 'application/json',
                    authorization: `Bearer ${token}`,
                }
            );

            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }
            toast.success("Blogs Created Successful")
            navigate('/dashboard');
        } catch (error) {
            toast.error(error.response.data.message);
        }
        toast.dismiss(toastId)
        setLoading(false);
    }
}


export function uploadThumbnail(formData, token) {
    return async (dispatch) => {
        try {
            const response = await apiConnector(
                "PUT",
                UPLOAD_THUMBNAIL_API,
                formData,
                {
                    "Content-Type": "multipart/form-data",
                    authorization: `Bearer ${token}`,
                }
            )
            // console.log(response?.data)
            return response?.data?.thumbnail
        }
        catch (error) {
            toast.error(error.response.data.message)
        }
    }
}

export function updateBlog(blogId, title, category, thumbnail, shortDescription, longDescription, navigate, token) {
    return async (dispatch) => {

        const toastId = toast.loading("Loading...")
        try {
            const response = await apiConnector("PUT", UPDATE_BLOG_API,
                { title, category, thumbnail, shortDescription, longDescription, blogId },
                {
                    'content-type': 'application/json',
                    authorization: `Bearer ${token}`,
                }
            );

            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }
            toast.success("Blogs Updated Successful")
            setTimeout(() => { navigate('/dashboard'); }, 2000);
        } catch (error) {
            toast.error(error.response.data.message);
        }
        toast.dismiss(toastId)
    }
}


export function deleteBlog(blogId, token, navigate) {
    return async (dispatch) => {

        const toastId = toast.loading("Loading...")
        try {
            const response = await apiConnector("DELETE", DELETE_BLOG_API,
                { blogId },
                {
                    'content-type': 'application/json',
                    authorization: `Bearer ${token}`,
                }
            );

            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }
            toast.success("Blog Deleted!")
            navigate('/dashboard');

        } catch (error) {
            toast.error(error.response.data.message);
        }
        toast.dismiss(toastId)
    }
}



