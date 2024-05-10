import React, { useState } from 'react';
import '../css/randomizer.css';

const Randomizer = () => {
    const [ getSubreddit, setSubreddit ] = useState(null);

    const updateSubreddit = async () => {
        const subreddits = ["memes", "pokemon", "Books", "lotr", "cosplay", "gaming"];
        const rand = subreddits[Math.floor(Math.random() * subreddits.length)];
        setSubreddit(rand);
    }

    return (
        <> 
            <div className="randomize-container">
                <button id="randomize" name="randomize" onClick={updateSubreddit}>Randomize Sub</button>
                <div className="curr-sub">
                    <p id="subText">Current subreddit: <a id="subHolder" href={`https://www.reddit.com/r/${getSubreddit}`}>{getSubreddit}</a></p>
                </div>
            </div>
        </>
    );
}

export default Randomizer;