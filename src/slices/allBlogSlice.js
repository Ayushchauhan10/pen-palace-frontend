import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allBlog: localStorage.getItem("allBlog") ? JSON.parse(localStorage.getItem("allBlog")) : null,
    loading: false,
};

const allBlogSlice = createSlice({
    name: "allBlog",
    initialState,
    reducers: {
        setAllBlogData(state, value) {
            state.allBlog = value.payload;
        },
        setAllBlogLoading(state, value) {
            state.loading = value.payload;
        }
    }
});

export const { setAllBlogData, setAllBlogLoading } = allBlogSlice.actions;
export default allBlogSlice.reducer;
