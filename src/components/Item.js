import React from "react";

function Item({card}){
 
   
  
    return(
        <div className="card">
                 
                <img className="card-logo" src={card.img} alt="logo" />
                <h3 className="card-title" >{card.name}</h3>
                
                      
        </div>
    )
}

export default Item;