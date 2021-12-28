import React from 'react';
import Post from './Post';
import './body.css';
import { JsxElement } from 'typescript';
import {dishes, categorys} from '../Data/data';


function Posts(): JSX.Element {
    let checkedCategory: string = "";
    let idCategory: number | null = null;
    let checkedDish: string = "";
    document.addEventListener('click',function (event){
        if(event.target){
            if((event.target as Element).tagName === "LI"){
            checkedCategory = (event.target as Element).innerHTML;
            } else {
                if((event.target as Element).tagName === "SPAN"){
                    checkedDish = (event.target as Element).innerHTML;
                    }
            }
        }
    });
    if(checkedCategory !== ""){
         for (let category of categorys){
             if(checkedCategory === category.title){
                idCategory = category.id;
             }
         }
                for(let dish of dishes){
                    if(dish.categoryId === idCategory){
                        return (
                            <div className = "container">
                            <Post image = {dish.image} title = {dish.title} description = {dish.description}/>
                            </div>
                        )
                    }
                }
    }
        return (
            <div className = "container">
            {dishes.map(dish => {
               return (<Post image = {dish.image} title = {dish.title} description = {dish.description}/>)
           })}
           </div>
        ); 
}

export default Posts;