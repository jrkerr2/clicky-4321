import React from 'react';
import images from "./images.json";
import Cards from './Cards';
import Jumbo from './Jumbo';

class App extends React.Component {

  state = {
    images,
    score: 0,
    topScore: 0,
    message: "You lose! Try again."

  }

  // restartGame = () => {
  //   forEach(image => id = Math.random.floor())
  // }

  clickHandler = () => {
    const imageArray = this.state.images;
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
          {this.state.images.map(card => (
            <Cards 
            cardImage={card.image}  
            cardHandleClick={this.clickHandler}

          />))} 

        </div>
        
    );
  }
}

export default App;
