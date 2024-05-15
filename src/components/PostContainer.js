import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchPosts,
    fetchSubreddits,
} from '../store/redditSlice.js';

import Post from './Post.js';
import '../css/PostContainer.css';

const PostContainer = () => {
    const reddit = useSelector((state) => state.reddit);

    const posts = useSelector((state) => state.reddit.posts);
 
    /*console.log(posts);*/

    const [ getPage, setPage ] = useState(0);

    const { isLoading, hasError, currentSub } = reddit;

    const dispatch = useDispatch();

    const updatePage = (action) => {
        const curr = getPage;
        const val = action ? 1 : -1;
        if (curr - val < 0 || curr + val >= Math.floor(posts.length / 5)) {
            return;
        }
        setPage(curr + 1);
    }

    useEffect(() => {
        dispatch(fetchPosts(currentSub));
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
                    <button className="page-button" onClick={updatePage(false)}>{"<"}</button>
                    <div className="page-backing">
                        <p className="pages"># / #</p>
                    </div>
                    <button className="page-button" onClick={updatePage(true)}>{">"}</button>
                </div>
            </div>
        )
    }

    let count = 0;

    return (
        <div className="container">
            <div className="post-container">
                <div className="posts">
                    {posts.map((post, index) => {
                        if (index <= 4) {
                            return <Post key={index} post={post} />
                        }
                    })}
                </div>
            </div>
            <div className="page-chooser">
                <button className="page-button" onClick={updatePage(false)}>{"<"}</button>
                <div className="page-backing">
                    <p className="pages"># / #</p>
                </div>
                <button className="page-button" onClick={updatePage(true)}>{">"}</button>
            </div>
        </div>
    )
}

export default PostContainer;

