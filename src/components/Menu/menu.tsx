import React, {useState} from 'react';
import './menu.css';
import {arrayDish, menus} from '../Data/data';
import Dish from '../Dish/dish';

interface Info{
    title: string;
    description: string;
    category: string;
    image:string;
}

function Filter() {
    let [arrayDishNew, change] = useState(arrayDish);
    let [arrayOneDishNew, changeOne] = useState<Info[]>([]);
    let nameCategory: string;
    let sortDish = function(){
         document.addEventListener('click',function (event) {
            if(event.target){
             if ((event.target as Element).innerHTML === "Показать все"){
                 arrayOneDishNew = [];
                 changeOne(arrayOneDishNew);
                 arrayDishNew = arrayDish;
                 change(arrayDishNew);
             } else {
                 if ((event.target as Element).tagName === "LI") {
                     nameCategory = (event.target as Element).innerHTML;
                     arrayDishNew = arrayDish.filter(function (item) {
                        return item.category === nameCategory;
                     });
                     arrayOneDishNew = [];
                     changeOne(arrayOneDishNew);
                     change(arrayDishNew);
                 } else {
                     if ((event.target as Element).tagName === "SPAN") {
                         arrayDishNew = [];
                         change(arrayDishNew);
                     }
                 }
             }
            }
         })
    }

    return (
        <div>
            <div className="menu">
                <ul>
                {menus.map((item, index) => <li key={index} onClick={sortDish}>{item}</li>)}
                </ul>
            </div>
        <div className="container">
            {arrayDishNew.map(item =>
                <div className="prew">
                <div className="img-prew">
                    <img src={item.image} alt={item.title} title={item.title} />
                </div>
                <span className="h2" onClick={sortDish}>
                    {item.title}
                </span>
                <p>
                    {item.description}
                </p>
                </div>
            )}
            <Dish/>
        </div>
        </div>
     );
}

 export default Filter;
 