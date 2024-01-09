import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../api"
const { CREATE_COMMENT_API, EDIT_COMMENT_API, DELETE_COMMENT_API } = endpoints;


export function addComment(description, blogId, setLoading, token) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        setLoading(true);
        try {
            const response = await apiConnector("POST", CREATE_COMMENT_API, { description, blogId }, {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`,
            })

            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }
            toast.success("Comment Posted!")

        } catch (error) {
            toast.error(error.response.data.message);
        }
        setLoading(false);
        toast.dismiss(toastId)
    }
}

export function editComment(description, commentId, setLoading, token) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        setLoading(true);
        try {
            const response = await apiConnector("PUT", EDIT_COMMENT_API, { description, commentId }, {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`,
            })

            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }
            toast.success("Comment Updated!")

        } catch (error) {
            toast.error(error.response.data.message);
        }
        setLoading(false);
        toast.dismiss(toastId)
    }
}


export function deleteComment(commentId, setLoading, token) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        setLoading(true);
        try {
            const response = await apiConnector("DELETE", DELETE_COMMENT_API, { commentId }, {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`,
            })

            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }
            toast.success("Comment Deleted!")

        } catch (error) {
            toast.error(error.response.data.message);
        }
        setLoading(false);
        toast.dismiss(toastId)
    }
}
