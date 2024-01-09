import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogInfo: localStorage.getItem("blogInfo") ? JSON.parse(localStorage.getItem("blogInfo")) : null, 
    loading: false,
};

const blogInfoSlice = createSlice({
    name: "blogInfo",
    initialState,
    reducers: {
        setBlogInfoData(state, value) {
            state.blogInfo = value.payload;
        },
        setBlogInfoLoading(state, value) {
            state.loading = value.payload;
        }
    }
});

export const { setBlogInfoData, setBlogInfoLoading } = blogInfoSlice.actions;
export default blogInfoSlice.reducer;
