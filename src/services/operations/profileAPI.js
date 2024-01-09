import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../api";
import { setProfile } from "../../slices/profileSlice";

const { UPDATE_PROFILE_PHOTO_API, UPDATE_PROFILE_API, UPDATE_PASSWORD_API } = endpoints;


// // Working 
export function updateDisplayPicture(token, formData) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        try {
            const response = await apiConnector(
                "PUT",
                UPDATE_PROFILE_PHOTO_API,
                formData,
                {
                    "Content-Type": "multipart/form-data",
                    authorization: `Bearer ${token}`,
                }
            )

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            const userImage = response.data.profile.image
                ? response.data.profile.image
                : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.profile.firstName} ${response.data.profile.lastName}`
            dispatch(setProfile({ ...response.data.profile, image: userImage }))
            toast.success("Profile Photo Updated..!")
        } catch (error) {
            toast.error(error.response.data.message)
        }
        toast.dismiss(toastId)
    }
}

export function updateProfile(token, formData) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        try {
            const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${token}`,
            })
           
            if (!response.data.success) {
                console.log(response);
                throw new Error(response.data.message)
            }
            
            const userImage = response.data.profile.image
                ? response.data.profile.image
                : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.profile.firstName} ${response.data.profile.lastName}`


            dispatch(setProfile({ ...response.data.profile, image: userImage }))
            toast.success("Profile Updated Successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }
        toast.dismiss(toastId)
    }
}

export function updatePassword(token, formData) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
       
        try {
            const response = await apiConnector("PUT", UPDATE_PASSWORD_API, formData, {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${token}`,
            })
           
            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("Password Updated Successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }
        toast.dismiss(toastId)
    }
}
