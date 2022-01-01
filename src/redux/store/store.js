import { configureStore } from '@reduxjs/toolkit';
import blogThunk from '../slices/blogThunk';

const store = configureStore({
    reducer: {
        post: blogThunk,
    }
});

export default store;