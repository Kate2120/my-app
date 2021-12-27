import React, {useState} from 'react';

function Post = (porps) => {
    return (
        <div className="post">
            <img className="post_image" href="{props.image}" width="" height="" alt="" />
            <h2>{props.title}</h2>
            <p>{props.descriptiom}</p>
        </div>
    );
};

export default Post;