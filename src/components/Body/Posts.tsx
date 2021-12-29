import React, {useState} from 'react';
import Post from './Post';
import './body.css';
import {Dish} from "../Data/data";
import {dishes, categorys} from '../Data/data';
function Posts(): JSX.Element {
let [chekkedDishes, filter] = useState<Dish[]>([]);
let [currentDishes, change] = useState(dishes);
    let sortDish = function() {
        document.addEventListener('click', function (event) {
            if (event.target) {
                if ((event.target as Element).tagName === "LI") {
                    let checkedCategory = (event.target as Element).innerHTML;
                    for (let category of categorys) {
                        if (checkedCategory === category.title) {
                            let idCategory = category.id;
                            chekkedDishes = [];
                            for(let checkedCategory of dishes){
                                if(checkedCategory.categoryId === idCategory){
                                    chekkedDishes.push(checkedCategory);
                                    filter(chekkedDishes);
                                    currentDishes = [];
                                    change(currentDishes);
                                }
                            }
                        }
                    }
                }
                else {
                    if ((event.target as Element).tagName === "SPAN") {
                        let checkedDish = (event.target as Element).innerHTML;
                        for (let checkedCategory of dishes) {
                            chekkedDishes = [];
                            if (checkedCategory.title === checkedDish) {
                                chekkedDishes.push(checkedCategory);
                                filter(chekkedDishes);
                                currentDishes = [];
                                change(currentDishes);
                            }
                        }
                    }
                }
            }
        });
    }
  return (
          <div>
              <div className="menu">
                  <ul>
                      {categorys.map(category => {
                          return (
                              <li onClick={sortDish}>{category.title}</li>
                          )
                      })}
                  </ul>
              </div>
              <div className = "container">
                    {currentDishes.map(dish => {
                        return (<Post image={dish.image} title={dish.title} description={dish.description}/>)
                    })}
                  {chekkedDishes.map(dish => {
                      return (<Post image={dish.image} title={dish.title} description={dish.description}/>)
                  })}
              </div>
          </div>
        );
}

export default Posts;