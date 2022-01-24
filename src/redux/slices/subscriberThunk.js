import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

//create action
export const addSubscriber = createAsyncThunk(
    "subscribe/add",

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
const subscriberThunk  = createSlice({
    name: "subscribe",
    initialState: {},
    extraReducers: {
        //Handeling pending state
        [addSubscriber.pending]: (state, action) => {
            state.loading = true;
        },
        //Handeling fulfilled state
        [addSubscriber.fulfilled]: (state, action) => {
            state.postsList = action.payload;
            state.loading = false;
            state.noconnexion = false;
        },
        //Handeling rejection
        [addSubscriber.rejected]: (state, action) => {
            state.loading = false;
            state.noconnexion = true;
            state.error = action.payload;
        },
    },
});

export default subscriberThunk.reducer;
