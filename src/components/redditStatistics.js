import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/redditStatistics.css';
import { fetchSubreddits } from '../store/redditSlice';

const Statistics = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);
        
    const slice = useSelector((state) => state.reddit);

    const { currentSub, isLoading, hasError } = slice;

    const subreddit = slice.subreddits.filter(x => x["display_name"].toLowerCase() === currentSub)[0];
    
    if (isLoading || !subreddit) {
        return (
            <div className="stats-container">
                <h1>Loading...</h1>
            </div>
        )
    }

    if (hasError) {
        return ( 
            <div className="stats-container">
                <h1>Error</h1>
            </div>
        );
    }

    return (
        <>
            <div className="stats-container">
                <h3>Total Followers: <span id="stats-currSubs">{subreddit.subscribers}</span></h3>
                <h5>Created at: <span id="stats-active">{subreddit.created}</span></h5>
            </div>
        </>
    )
}

export default Statistics;