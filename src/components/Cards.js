import React from 'react';

const Cards = (props) => {
    
    return(    
        <button 
            className="allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"
            onClick={() => props.cardHandleClick(props.id, props.selected)}
            key={props.id} >
                
            <img 
                id={props.id}
                alt={props.name} 
                src={props.cardImage} >
            </img>
            

        </button>
        )
    }

export default Cards;