import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: localStorage.getItem("comments") ? JSON.parse(localStorage.getItem("comments")) : null, 
    loading: false,
};

const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        setCommentData(state, value) {
            state.comments = value.payload;
        },
        setCommentLoading(state, value) {
            state.loading = value.payload;
        }
    }
});

export const { setCommentData, setCommentLoading } = commentSlice.actions;
export default commentSlice.reducer;
