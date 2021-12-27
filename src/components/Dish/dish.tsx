import React, {useState} from 'react';
import '../Menu/menu.css';
import {arrayDish} from '../Data/data';

interface Info{
    title: string;
    description: string;
    category: string;
    image:string;
}
function Dish() {
    let [arrayOneDishNew, changeOne] = useState<Info[]>([]);
    let currentTitle: string;
    document.addEventListener('click',function (event) {
    let sortDish = function(){
            if(event.target){
                if ((event.target as Element).tagName === "SPAN") {
                    currentTitle = (event.target as Element).innerHTML;
                    console.log(currentTitle);
                    arrayOneDishNew = arrayDish.filter(function (item) {
                        return item.title === currentTitle;
                    })
                    changeOne(arrayOneDishNew);
                }
            
            }  
    }();

    });
    document.addEventListener('click',function (event) {
        if(event.target){
            if ((event.target as Element).tagName !== "SPAN") {
        arrayOneDishNew = [];
        changeOne(arrayOneDishNew);
            }
    }
    });

    return (
        <div>
                {arrayOneDishNew.map(item =>
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
            )}
        </div>
     );
}

 export default Dish;