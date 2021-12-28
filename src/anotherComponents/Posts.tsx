import React from 'react';
import {dishes, menus} from '../components/Data/data';
import Post from './Post';
interface Info{
    title: string;
    description: string;
    category: string;
    image:string;
}
import {Dishes} from "../components/Data/data";
import { JsxElement } from 'typescript';
function Posts(): JSX.Element {
    let category: string = "";
    document.addEventListener('click',function (event){
        if(event.target){
            category = (event.target as Element).innerHTML;
            return (
                dishes[category].map(post => {
                    
                })
            );
        } else {
            if(!event.target){
                for(let categoryName in dishes){
                    return (
                        <h2>{}</h2>
                    
                    )
                }
            }
        }
     
       
    })

 
};

export default Posts;