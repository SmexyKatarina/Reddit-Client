import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/redditStatistics.css';
import { fetchSubreddits } from '../store/redditSlice';

const Statistics = () => {

    const dispatch = useDispatch();
    
    const subs = useSelector((state) => state.reddit.subreddits);
    const curSub = useSelector((state) => state.reddit.currentSub);

    const subreddit = subs.filter(x => x["display_name"].toLowerCase() === curSub)[0];

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, []);

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