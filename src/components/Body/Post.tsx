import React from 'react';
import './body.css';
interface PostProps{
    title: string;
    description: string;
    image:string;
}
function Post(props: PostProps): JSX.Element {

    return (
        <div className="prew">
            <div className="img-prew">
                <img src={props.image} alt={props.title} title={props.title} />
            </div>
            <span className = "h2">{props.title}</span>
            <p>{props.description}</p>
        </div>
    );
};

export default Post;