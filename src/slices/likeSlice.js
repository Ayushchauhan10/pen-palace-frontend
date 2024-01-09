import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likes: localStorage.getItem("likes") ? JSON.parse(localStorage.getItem("likes")) : null, 
    loading: false,
};

const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        setLikeData(state, value) {
            state.likes = value.payload;
        },
        setLikeLoading(state, value) {
            state.loading = value.payload;
        }
    }
});

export const { setLikeData, setLikeLoading } = likeSlice.actions;
export default likeSlice.reducer;
