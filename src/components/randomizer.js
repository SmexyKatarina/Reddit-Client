import React from 'react';
import '../css/randomizer.css';

const fetchSubreddit = async (subreddit) => {
    const req = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const res = await req.json();
    console.log(res);
    return res;
}

const updateSubreddit = async () => {
    const redditInformation = await fetchSubreddit("memes");
    updateText(redditInformation);
}

const updateText = (text) => {
    document.getElementById("subText").innerHTML = "Current subreddit: " + text;
}

const Randomizer = () => {
    return (
        <> 
            <div className="randomize-container">
                <button id="randomize" name="randomize" onClick={updateSubreddit}>Randomize Sub</button>
                <div className="curr-sub">
                    <p id="subText">Current subreddit: {/* PUT SUB HERE */}</p>
                </div>
            </div>
        </>
    );
}

export default Randomizer;