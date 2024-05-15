import React from 'react';
import { useSelector } from 'react-redux';
import '../css/redditStatistics.css';

const Statistics = () => {
    const sub = useSelector((state) => state.reddit.currentSub);

    return (
        <>
            <div className="stats-container">
                <h3>Total Followers: <span id="stats-currSubs">{ /* SUBS */ "h"}</span></h3>
                <h5>Active Followers: <span id="stats-active">{ /* */ "h"}</span></h5>
            </div>
        </>
    )
}

export default Statistics;