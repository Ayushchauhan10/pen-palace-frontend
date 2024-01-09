import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: localStorage.getItem("blogs") ? JSON.parse(localStorage.getItem("blogs")) : null, 
    loading: false,
};

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        setBlogData(state, value) {
            state.blogs = value.payload;
        },
        setBlogLoading(state, value) {
            state.loading = value.payload;
        },
    }
});

export const { setBlogData, setBlogLoading } = blogSlice.actions;
export default blogSlice.reducer;
