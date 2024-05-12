import { useSelector, useDispatch } from 'react-redux'; 
import '../css/randomizer.css';
import { setCurrentSubreddit } from '../store/redditSlice';

const Randomizer = () => {

    const reddit = useSelector((state) => state.reddit);

    const dispatch = useDispatch();

    const updateSubreddit = async () => {
        const subreddits = ["memes", "pokemon", "Books", "lotr", "cosplay", "gaming"];
        const rand = subreddits[Math.floor(Math.random() * subreddits.length)];
        dispatch(setCurrentSubreddit(rand));
    }

    return (
        <> 
            <div className="randomize-container">
                <button id="randomize" name="randomize" onClick={updateSubreddit}>Randomize Sub</button>
                <div className="curr-sub">
                    <p id="subText">Current subreddit: <a id="subHolder" target="_blank" href={`https://www.reddit.com/r/${reddit.currentSub}`}>{reddit.currentSub}</a></p>
                </div>
            </div>
        </>
    );
}

export default Randomizer;