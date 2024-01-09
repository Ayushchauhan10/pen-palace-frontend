import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../api"
import { setAuthor, setLoading } from "../../slices/authorSlice";
import { setAllAuthorData, setAllAuthorLoading } from "../../slices/allAuthorSlice";

const { GET_AUTHOR_PROFILE_API,ALL_AUTHOR_API } = endpoints;


export function getAuthorProfile(id) {
    return async (dispatch) => {
        setLoading(true);
        const toastId = toast.loading("Loading...")
        try {
            const response = await apiConnector("POST", GET_AUTHOR_PROFILE_API, { id })

            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }
            dispatch(setAuthor(response.data.profile));
            localStorage.setItem("author", JSON.stringify(response.data.profile))
        } catch (error) {
            toast.error(error.response.data.message);
        }
        setLoading(false)
        toast.dismiss(toastId)
    }
}
export function fetchAllAuthor(id) {
    return async (dispatch) => {
        setLoading(true);
        const toastId = toast.loading("Loading...")
        // console.log("hi")
        dispatch(setAllAuthorLoading(true))
        try {
            const response = await apiConnector("GET", ALL_AUTHOR_API)

            if (!response?.data?.success) {
                toast.error(response?.data?.message)
                throw new Error(response?.data?.message)
            }

            // toast.success("All Authors Fetched Successfully");

            dispatch(setAllAuthorData(response?.data?.data))
            localStorage.setItem("allAuthor", JSON.stringify(response?.data?.data))

        } catch (error) {
            toast.error(error.response?.data?.message);
        }
        dispatch(setAllAuthorLoading(false))
        toast.dismiss(toastId)
    }
}
