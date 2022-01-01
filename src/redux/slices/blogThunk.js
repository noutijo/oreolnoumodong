import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

//create action
export const fetchPost = createAsyncThunk(
    "post/list",

    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/photos"
            );
            return data;
        } catch (error) {
            return error?.reponse;
        }
    }
);

//slices
const blogThunk = createSlice({
    name: "post",
    initialState: {},
    extraReducers: {
        //Handeling pending state
        [fetchPost.pending]: (state, action) => {
            state.loading = true;
        },
        //Handeling fulfilled state
        [fetchPost.fulfilled]: (state, action) => {
            state.postsList = action.payload;
            state.loading = false;
            state.noconnexion = false;
        },
        //Handeling rejection
        [fetchPost.rejected]: (state, action) => {
            state.loading = false;
            state.noconnexion = true;
            state.error = action.payload;
        },
    },
});

export default blogThunk.reducer;
