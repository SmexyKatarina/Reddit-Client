import React from 'react';
import { useSelector} from 'react-redux';
import '../css/redditStatistics.css';

const Statistics = () => {

    const slice = useSelector((state) => state.reddit);

    const { currentSub, isLoading, hasError, subreddits } = slice;

    const subreddit = subreddits.filter(x => x["display_name"].toLowerCase() === currentSub.toLowerCase())[0];

    if (isLoading) {
        return (
            <div className="stats-container">
                <h1>Loading...</h1>
            </div>
        )
    }

    if (hasError || !subreddit) {
        return ( 
            <div className="stats-container">
                <h4>Error loading statistics</h4>
            </div>
        );
    }

    return (
        <>
            <div className="stats-container">
                <h3>Total Followers: <span id="stats-currSubs">{subreddit.subscribers}</span></h3>
                <h5>Created at: <span id="stats-date-created">{new Date(subreddit.created * 1000).toDateString()}</span></h5>
            </div>
        </>
    )
}

export default Statistics;