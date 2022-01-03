import { configureStore } from '@reduxjs/toolkit';
import blogThunk from '../slices/blogThunk';
import subscriberThunk  from '../slices/subscriberThunk';

const store = configureStore({
    reducer: {
        post: blogThunk,
        subscriber: subscriberThunk,
    }
});

export default store;