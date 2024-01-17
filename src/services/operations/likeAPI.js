import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../api"


const { LIKE_A_BLOG_API, DISLIKE_A_BLOG_API } = endpoints;


export function likeBlog(blogId, setLoading, token) {
    return async (dispatch) => {
        setLoading(true);
        const toastId = toast.loading("Loading...")
        try {
            const response = await apiConnector("POST", LIKE_A_BLOG_API, {
                blogId,
            }, {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`,
            })

            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }
            // setLiked(true);
        } catch (error) {
            toast.error(error.response.data.message);
        }
        setLoading(false)
        toast.dismiss(toastId)
    }
}


export function dislikeBlog(blogId, setLoading, token) {
    return async (dispatch) => {
       
        setLoading(true);
        const toastId = toast.loading("Loading...")
        try {
            const response = await apiConnector("POST", DISLIKE_A_BLOG_API, {
                blogId,
            }, {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`,
            })

            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }
            console.log(response.data.message)
            // setLiked(false);
        } catch (error) {
            toast.error(error.response.data.message);
        }
        setLoading(false)
        toast.dismiss(toastId)
    }
}


