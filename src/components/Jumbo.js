import React from 'react';

const Jumbo = (props) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container text-center">
        <h1 className="display-4">South Park Clicky Game</h1>
        <p className="lead">Click on any image to earn points, but don't click on any more than once!</p>
      </div>
    </div>
  )
};

export default Jumbo;

// const Cards = (props) => {
    
//   return(    
//       <button 
//           className="allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"
//           onClick={() => props.cardHandleClick(props.id, props.selected)}
//           key={props.id} >
              
//           <img 
//               id={props.id}
//               alt={props.name} 
//               src={props.cardImage} >
//           </img>
          

//       </button>
//       )
//   }
