import React from 'react';
import {dishes, menus} from '../components/Data/data';
import Post from './Post';
interface Info{
    title: string;
    description: string;
    category: string;
    image:string;
}
interface Dishes{
    [key: string]: Info[];
}
let allDishes: Dishes = {dishes};
function Posts() {
    let category: string = "";
    document.addEventListener('click',function (event){
        if(event.target){
            category = (event.target as Element).innerHTML;
            let arr: Info[] = allDishes[category];
            return (
                arr.map(post => {
                    <Post post={post} />
                })
            );
        } else {
            if(!event.target){
                for(let categoryName in dishes){
                    return (
                        {dishes[categoryName].map(post => {
                        <Post />
                    })}
                    );
                }
            }
        }
     
       
    })

 
};

export default Posts;