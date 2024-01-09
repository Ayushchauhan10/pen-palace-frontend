import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: localStorage.getItem("profile") ? JSON.parse(localStorage.getItem("profile")) : null, 
    loading: false,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile(state, value) {
            state.profile = value.payload;
        },
        setProfileLoading(state, value) {
            state.loading = value.payload;
        }
    }
});

export const { setProfile, setProfileLoading } = profileSlice.actions;
export default profileSlice.reducer;
