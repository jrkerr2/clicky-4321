import React from 'react';

const Message = (props) => {
    
    return (    
        <div className="message" key={props.id}>
            <p> { this.state.message} </p>                            
            <h3> Score: { this.state.score} </h3>
            <h3> Top Score: { this.state.topScore } </h3>
            

        </div>
    )
}

export default Message;