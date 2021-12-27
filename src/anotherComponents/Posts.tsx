import React from 'react';
import {dishes, menus} from '../components/Data/data';
import Post from './Post';
function Posts() {
    let category: string = "";
    document.addEventListener('click',function (event){
        if(event.target){
            category = ((event.target as Element).innerHTML).toString();
            return (
                {dishes[category].map(post => {
                    <Post post={post} />
                })}
            );
        } else {
            if(!event.target){
                for(let categoryName in dishes){
                    return (
                    dishes[categoryName].map(post => {
                        <Post post={post} />
                    })
                    );
                }
            }
        }
     
       
    });

 
};

export default Posts;