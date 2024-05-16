import React from 'react';
import { useSelector } from 'react-redux';

const CommentsContainer = () => {

    const reddit = useSelector((state) => state.reddit);

    const { isLoading, hasError } = reddit;

    if (isLoading) {
        return (
            <div className="comments-container">
                <h1>Loading...</h1>
            </div>
        );
    }

    if (hasError) {
        return (
            <div className="comments-container">
                <h1>Error loading comments!</h1>
            </div>
        );
    }

    return (
        <div className="comments-container">
            {
                
            }
        </div>
    );
}

export default CommentsContainer;