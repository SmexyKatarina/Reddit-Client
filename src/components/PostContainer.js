import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchPosts
} from '../store/redditSlice.js';

export const PostContainer = () => {
    const reddit = useSelector((state) => state.reddit);

    const { isLoading, hasError } = reddit;

    useEffect(() => {
        useDispatch(fetchPosts());
    });

    return (
        <>

        </>
    )
}

