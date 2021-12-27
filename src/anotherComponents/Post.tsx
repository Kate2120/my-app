import React, {useState} from 'react';

function Post(porps) {
    return (
        
            <div className="product">
                    <h2>{item.title}</h2>
                    <div className="OneProduct">
                    <div className="img-one">
                        <img src={item.image} alt={item.title} title={item.title} />
                    </div>
                    <div className="description">
                        <p>
                            {item.description}
                        </p>
                    </div>
                    </div>
                </div>
        
    );
};

export default Post;