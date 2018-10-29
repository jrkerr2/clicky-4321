import React from 'react';
import images from "./images.json";
import Cards from './components/Cards';
import Jumbo from './components/Jumbo';
// import Message from './components/Message';

class App extends React.Component {

  state = {
    images,
    score: 0,
    topScore: 0,
    message: "Click on a character to start the game"

  }

  clickHandler = (id, selected) => {
    const imageArray = this.state.images;
    if(!selected) {
      imageArray.forEach((image,index) => {
        if (id === image.id) {
          imageArray[index].selected = true;
        }
        
        const { topScore, score } = this.state
        const newScore = score + 1
        const newTopScore = newScore > topScore ? newScore : topScore;
        
        return this.setState({
          score: newScore,
          topScore: newTopScore,
          message: "You guessed correctly! Keep clicking."
        })       
      });

    }    
    else {
      imageArray.forEach((image,index) => {
        imageArray[index].selected = false;

      })

      return this.setState({
        message: "Sorry! You guessed incorrectly. Try again.",
        score: 0
      })
    
    }
    
    return this.setState({
      images: imageArray.sort(() => Math.random() - 0.5)
    });
  };

  render() {
    return (
      
        <div className="container"> 
          <Jumbo />

          <p> { this.state.message } </p>
          <h3> Score: { this.state.score } | Top Score: { this.state.topScore } </h3>        
                    
          {this.state.images.map(card => (
            <Cards 
              cardImage={card.image}  
              cardHandleClick={this.clickHandler}
              key={card.id}
              id={card.id}
              name={card.name}
              selected={card.selected}            

          />))} 
        </div>        
    );
  }
}

export default App;
