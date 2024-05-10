import { useSelector } from 'react-redux'; 
import '../css/randomizer.css';

const Randomizer = (props) => {

    const reddit = useSelector((state) => state.reddit);

    const { updateSubreddit } = props;

    // const updateSubreddit = async () => {
    //     const subreddits = ["memes", "pokemon", "Books", "lotr", "cosplay", "gaming"];
    //     const rand = subreddits[Math.floor(Math.random() * subreddits.length)];
    // }

    return (
        <> 
            <div className="randomize-container">
                <button id="randomize" name="randomize" onClick={() => {}}>Randomize Sub</button>
                <div className="curr-sub">
                    <p id="subText">Current subreddit: <a id="subHolder" href={`https://www.reddit.com/r/${"getSubreddit"}`}>{"getSubreddit"}</a></p>
                </div>
            </div>
        </>
    );
}

export default Randomizer;