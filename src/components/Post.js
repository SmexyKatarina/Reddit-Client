import React from 'react';

import "../css/Post.css";

const Post = (props) => {
    const { post } = props;

    return (
        <>
            <div className="container">
                <h1 className="post-title"><a target="_blank" href={`https://www.reddit.com${post.permalink}`}>{post.title}</a></h1>
                <p className="post-author"><a target="_blank" href={`https://www.reddit.com/user/${post.author}`}>{post.author}</a></p>
            </div>
        </>
    );
}

export default Post;