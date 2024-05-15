import { createSlice } from "@reduxjs/toolkit";

const init = {
    currentSub: "home",
    posts: [],
    subreddits: [],
    isLoading: false,
    hasError: false   
};

const redditSlice = createSlice({
    name: 'redditSlice',
    initialState: init,
    reducers: {
        getPosts(state) {
            state.isLoading = true;
            state.hasError = false;
        },
        successGetPosts(state, action) {
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload;
        },
        failedGetPosts(state) {
            state.isLoading = false;
            state.hasError = true;
        },
        getSubreddits(state) {
            state.isLoading = true;
            state.hasError = false;
        },
        successGetSubreddits(state, action) {
            state.isLoading = false;
            state.hasError = false;
            state.subreddits = action.payload;
        },
        failedGetSubreddits(state) {
            state.isLoading = false;
            state.hasError = true;
        },
        setCurrentSubreddit(state, action) {
            state.currentSub = action.payload;
        },
    },
});

export const {
    getPosts,
    successGetPosts,
    failedGetPosts,
    getSubreddits,
    successGetSubreddits,
    failedGetSubreddits,
    setCurrentSubreddit,
} = redditSlice.actions;

export default redditSlice.reducer;

export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        dispatch(getPosts());
        const posts = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const res = await posts.json();
        dispatch(successGetPosts(res.data.children.map((post) => post.data)));
    } catch (err) {
        dispatch(failedGetPosts());
    }
}

export const fetchSubreddits = () => async (dispatch) => {
    try {
        dispatch(getSubreddits());
        const subs = await fetch(`https://www.reddit.com/subreddits.json`);
        const res = await subs.json();
        dispatch(successGetSubreddits(res.data.children.map((sub) => sub.data)));
    } catch (err) {
        dispatch(failedGetSubreddits);
    }
}