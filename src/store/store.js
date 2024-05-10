import { configureStore, combineReducers } from '@reduxjs/toolkit';
import redditReducer from './redditSlice.js';

export default configureStore({
    reducer: combineReducers({
        reddit: redditReducer,
    }),
});
