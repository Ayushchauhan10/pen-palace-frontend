import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../api"
import { setId, setLoading, setToken } from "../../slices/authSlice"
import { setProfileLoading, setProfile } from "../../slices/profileSlice"
import { setBlogData, setBlogLoading } from "../../slices/blogSlice"
import { setCommentData, setCommentLoading } from "../../slices/commentSlice"
import { setLikeData, setLikeLoading } from "../../slices/likeSlice"

const {
    SIGNUP_API,
    LOGIN_API,
    PROFILE_API,
    BLOG_API,
    COMMENT_API,
    LIKE_API,
} = endpoints


export function signUp(
    firstName,
    lastName,
    email,
    userId,
    password,
    confirmPassword,
    navigate
) {
    return async (dispatch) => {
        if (password != confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", SIGNUP_API, {
                firstName,
                lastName,
                email,
                userId,
                password,
            })

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("Signup Successful")
            navigate("/login")
        } catch (error) {
            toast.error(error.response.data.message);
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function login(email, password, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", LOGIN_API, {
                email,
                password,
            })
            // console.log(response);
            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }

            toast.success("Login Successful")
            dispatch(setToken(response.data.token))
            dispatch(setId(response.data.user._id))
            localStorage.setItem('id', response.data.user._id)
            localStorage.setItem("token", JSON.stringify(response.data.token))
            navigate("/dashboard")
        } catch (error) {
            toast.error(error.response.data.message);
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}


// export function resetPassword(password, confirmPassword, token, navigate) {
//     return async (dispatch) => {
//         const toastId = toast.loading("Loading...")
//         dispatch(setLoading(true))
//         try {
//             const response = await apiConnector("POST", RESETPASSWORD_API, {
//                 password,
//                 confirmPassword,
//                 token,
//             })

//             // //console.log("RESET PASSWORD RESPONSE............", response)

//             if (!response.data.success) {
//                 throw new Error(response.data.message)
//             }

//             toast.success("Password Reset Successfully")
//             navigate("/login")
//         } catch (error) {
//             // //console.log("RESETPASSWORD ERROR............", error)
//             toast.error(error.response.data.message);
//         }
//         toast.dismiss(toastId)
//         dispatch(setLoading(false))
//     }
// }


export function getUserProfile(token, id) {
    return async (dispatch) => {

        dispatch(setProfileLoading(true))
        try {
            const response = await apiConnector("POST", PROFILE_API, {
                id,
            }, {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`,
            })
           
            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }
            // toast.success("Prifile fetched")
            const userImage = response.data?.profile?.image
                ? response.data.profile.image
                : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.profile.firstName} ${response.data.profile.lastName}`
            dispatch(setProfile({ ...response?.data?.profile, image: userImage }))
            localStorage.setItem("profile", JSON.stringify(response.data.profile))
        } catch (error) {
            toast.error(error.response.data.message);
        }
        dispatch(setProfileLoading(false))
    }
}

export function getUserBlog(token, id) {
    return async (dispatch) => {

        dispatch(setBlogLoading(true))
        try {
            const response = await apiConnector("POST", BLOG_API, { id }, {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`,
            })
            // console.log(response);
            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }

            dispatch(setBlogData(response.data.blogs))
            localStorage.setItem("blogs", JSON.stringify(response.data.blogs))
        } catch (error) {
            toast.error(error.response.data.message);
        }
        dispatch(setBlogLoading(false))
    }
}

export function getUserComment(token, id) {
    return async (dispatch) => {

        dispatch(setCommentLoading(true))
        try {
            const response = await apiConnector("POST", COMMENT_API, { id }, {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`,
            })
            // console.log(response);
            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }

            dispatch(setCommentData(response.data.comments))
            localStorage.setItem("comments", JSON.stringify(response.data.comments))
        } catch (error) {
            toast.error(error.response.data.message);
        }
        dispatch(setBlogLoading(false))
    }
}

export function getUserLike(token, id) {
    return async (dispatch) => {

        dispatch(setLikeLoading(true))
        try {
            const response = await apiConnector("POST", LIKE_API, { id }, {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`,
            })
            // console.log(response);
            if (!response.data.success) {
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }

            dispatch(setLikeData(response.data.likes))
            localStorage.setItem("likes", JSON.stringify(response.data.likes))
        } catch (error) {
            toast.error(error.response.data.message);
        }
        dispatch(setLikeLoading(false))
    }
}

export function logout(navigate) {
    return (dispatch) => {
        dispatch(setToken(null))
        dispatch(setId(null))
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success("Logged Out")
        navigate("/");
    }
}

