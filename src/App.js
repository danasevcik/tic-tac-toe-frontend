import React from 'react';
import './App.css';
import GameContainer from './components/GameContainer'

class App extends React.Component {

  state = {
    start: false
  }

  startGame = () => {
    this.setState({start: true})
  }


  render() {
    return (
      <div className="App">
        {this.state.start ?
          <GameContainer />
          :
          <div>
            <h1>Welcome</h1>
            <button onClick={() => {this.startGame()}}>Start Game</button>
          </div>
        }
      </div>
    );
  }
}


export default App;
