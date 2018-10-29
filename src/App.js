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

  // restartGame = () => {
  //   forEach(image => id = Math.random())
  // }

  clickHandler = (id, selected) => {
    const imageArray = this.state.images;
    if(!selected) {
      imageArray.forEach((image,index) => {
        if (id === image.id) {
          imageArray[index].selected = true;
        }
        // console.log(image);
        // console.log(id,selected); 

        const { topScore, score } = this.state
        const newScore = score + 1
        const newTopScore = newScore > topScore ? newScore : topScore;
        // console.log("Current: " + score, topScore);
        // console.log("New: " + newScore, newTopScore);

        return this.setState({
          score: newScore,
          topScore: newTopScore,
          message: "You guessed correctly! Keep clicking."
        })       
      });

    }    
    else {
      // console.log("Sorry! You guessed incorrectly.");
      imageArray.forEach((image,index) => {
        imageArray[index].selected = false;

      })
      return this.setState({
        message: "Sorry! You guessed incorrectly. Try again.",
        score: 0
      })

     // imageArray.selected = false;

    }
    
    return this.setState({
      images: imageArray.sort(() => Math.random() - 0.5)
    });
  };
  
  // handleClick = () => {

  //   // check click state of image
  //   if (image.clicked == true)
  //       setState(message = "You lose! Try again.")
  //       restartGame();
        
    
  //   else
  //   // if clicked = true, then lose
  //   // if clicked = false, the clicked --> true AND
  //   // score = score + 1, if score > topScore THEN
  //   // topScore --> score
  //   // shuffle cards
    
  // }

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
