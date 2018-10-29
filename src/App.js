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
    // declare a new array, filled with objects from json file
    const imageArray = this.state.images;

    // determine from child component (Cards) which image was clicked
    // if not one already selected, mark it "dirty" for future checks
    if(!selected) {
      imageArray.forEach((image,index) => {
        if (id === image.id) {
          imageArray[index].selected = true;
        }
        
        // deconstruct state object attributes needed
        const { topScore, score } = this.state
        // set new score on success
        const newScore = score + 1
        // set new top score if it exceeds old top score
        const newTopScore = newScore > topScore ? newScore : topScore;
        
        // set state ojbect attributes as needed
        return this.setState({
          score: newScore,
          topScore: newTopScore,
          message: "You guessed correctly! Keep clicking."
        })       
      });

    }  
    // this is the case for image selected TWICE (fail & reset)  
    else {
      imageArray.forEach((image,index) => {
        imageArray[index].selected = false;

      })

      return this.setState({
        message: "Sorry! You guessed incorrectly. Try again.",
        score: 0
      })
    
    }
    // reshuffle the "deck" (grid)
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
