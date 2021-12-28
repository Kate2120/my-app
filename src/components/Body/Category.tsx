import React from 'react';
import './body.css';
interface PostProps{
    title: string;
    description: string;
    image:string;
}
import { categorys } from '../Data/data';

function Category(): JSX.Element {

    return (
        <div className="menu">
            <ul>
               {categorys.map(category => {
                   return (
                       <li>{category.title}</li>
                   )
               })}
            </ul>
        </div>
    );
};

export default Category;