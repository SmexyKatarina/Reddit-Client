import React from 'react';

import "../css/Post.css";

const Post = (props) => {
    const { post } = props;

    return (
        <>
            <div className="container">
                <h1 className="post-title"><a target="_blank" rel="noreferrer" href={`https://www.reddit.com${post.permalink}`}>{post.title}</a></h1>
                <p className="post-author"><a target="_blank" rel="noreferrer" href={`https://www.reddit.com/user/${post.author}`}>{post.author} <span className="strikethrough">---</span> {new Date(post.created * 1000).toDateString()}</a></p>
            </div>
        </>
    );
}

export default Post;