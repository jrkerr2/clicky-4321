import React from 'react';

const Message = (props) => {
    
    return (    
        <div className="message" key={props.id}>
            <p> { props.message } </p>                            
            <h3> Score: { props.score }  |  Top Score: { props.topScore } </h3>
            <br></br>
        </div>
    )
}

export default Message;