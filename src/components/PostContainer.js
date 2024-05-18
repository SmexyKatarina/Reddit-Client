import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchPosts,
    fetchSubreddits,
    setCurrentPage,
} from '../store/redditSlice.js';

import Post from './Post.js';
import '../css/PostContainer.css';

const PostContainer = () => {
    const reddit = useSelector((state) => state.reddit);
 
    /*console.log(posts);*/

    const { isLoading, hasError, currentSub, currentPage, posts } = reddit;

    const dispatch = useDispatch();

    const updatePage = (action) => {
        const curr = currentPage;
        const val = action ? 1 : -1;
        if (curr + val < 0 || curr + val >= Math.ceil(posts.length / 5)) {
            return;
        }
        dispatch(setCurrentPage(currentPage + val));
    }

    const range = (start, end) => {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, []);

    useEffect(() => {
        dispatch(fetchPosts(currentSub));
        dispatch(setCurrentPage(0));
    }, [currentSub, dispatch]);

    if (hasError) {
        return (
            <>
                <h1 style={{color: "white"}}>Error loading the reddit posts</h1>
                <button name="try-again" onClick={() => {
                    dispatch(fetchPosts(currentSub))
                }}>Try again</button> 
            </>
        ); 
    }

    if (isLoading) {
        return (
            <div className="container">
                <div className="post-container">
                    <div className="empty-post">Loading...</div>
                    <div className="empty-post">Loading...</div>
                    <div className="empty-post">Loading...</div>
                    <div className="empty-post">Loading...</div>
                    <div className="empty-post">Loading...</div>
                </div>
                
                <div className="page-chooser">
                    <button className="page-button" onClick={() => { updatePage(false); }}>{"<"}</button>
                    <div className="page-backing">
                        <p className="pages">{currentPage + 1} / {Math.ceil(posts.length / 5)}</p>
                    </div>
                    <button className="page-button" onClick={() => { updatePage(true); }}>{">"}</button>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="post-container">
                    {posts.map((post, index) => {
                        if (range(currentPage * 5, currentPage * 5 + 4).includes(index)) {
                            return <Post key={index} post={post} />
                        }
                        return null;
                    })}
            </div>
            <div className="page-chooser">
                <button className="page-button" onClick={() => { updatePage(false); }}>{"<"}</button>
                <div className="page-backing">
                    <p className="pages">{currentPage + 1} / {Math.ceil(posts.length / 5)}</p>
                </div>
                <button className="page-button" onClick={() => { updatePage(true); }}>{">"}</button>
            </div>
        </div>
    )
}

export default PostContainer;

