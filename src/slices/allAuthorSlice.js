import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allAuthor: localStorage.getItem("allAuthor") ? JSON.parse(localStorage.getItem("allAuthor")) : null,
    loading: false,
};

const allAuthorSlice = createSlice({
    name: "allAuthor",
    initialState,
    reducers: {
        setAllAuthorData(state, value) {
            state.allAuthor = value.payload;
        },
        setAllAuthorLoading(state, value) {
            state.loading = value.payload;
        }
    }
});

export const { setAllAuthorData, setAllAuthorLoading } = allAuthorSlice.actions;
export default allAuthorSlice.reducer;
