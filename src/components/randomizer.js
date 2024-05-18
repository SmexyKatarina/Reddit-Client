import { useSelector, useDispatch } from 'react-redux'; 
import '../css/randomizer.css';
import { setCurrentSubreddit } from '../store/redditSlice';

const Randomizer = () => {

    const reddit = useSelector((state) => state.reddit);

    const dispatch = useDispatch();

    const updateSubreddit = async () => {
        const rand = reddit.subreddits[Math.floor(Math.random() * reddit.subreddits.length)].display_name;
        dispatch(setCurrentSubreddit(rand));
    }

    return (
        <> 
            <div className="randomize-container">
                <button id="randomize" name="randomize" onClick={updateSubreddit}>Randomize Sub</button>
                <div className="curr-sub"> 
                    <p id="subText">Current subreddit: <a id="subHolder" rel="noreferrer" target="_blank" href={`https://www.reddit.com/r/${reddit.currentSub}`}>{reddit.currentSub}</a></p>
                </div>
            </div>
        </>
    );
}

export default Randomizer;