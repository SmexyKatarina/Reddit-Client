import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const PostContainer = () => {
    const reddit = useSelector((state) => state.reddit);

    const { isLoading, hasError } = reddit;

    return (
        <>

        </>
    )
}

