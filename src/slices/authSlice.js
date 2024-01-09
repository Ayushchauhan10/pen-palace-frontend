import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    id: localStorage.getItem('id') ? localStorage.getItem('id') : null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken(state, value) {
            state.token = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
        },
        setId(state, value) {
            state.id = value.payload;
        }
    }
});

export const { setToken, setLoading, setId } = authSlice.actions;
export default authSlice.reducer;
