import React from "react";
import './Events.css';
import { categories } from './data';
 import Item from './Item';
 import Counter from "./Counter";

const Events = () => {

  
    return( 
        <div className="cards-area-container">
            <h5 className="language-title">Our latest Events</h5>
        <div className="cards-container">
            {categories.map((catElement,index) => {
                return <Item card={catElement}
                            key={index}/>
            })}
        </div>
        <Counter />
        </div>       
    )
}

export default Events;
