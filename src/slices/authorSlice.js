import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    author: localStorage.getItem("author") ? JSON.parse(localStorage.getItem("author")) : null,
};

const authorSlice = createSlice({
    name: "author",
    initialState,
    reducers: {
        setLoading(state, value) {
            state.loading = value.payload;
        },
        setAuthor(state, value) {
            state.author = value.payload;
        }
    }
});

export const { setLoading, setAuthor } = authorSlice.actions;
export default authorSlice.reducer;
