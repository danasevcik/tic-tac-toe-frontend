import React from 'react';
import './App.css';
import GameContainer from './components/GameContainer'
import WinnerX from './components/WinnerX'
import WinnerO from './components/WinnerO'

class App extends React.Component {

  state = {
    start: false,
    winner: [null, null]
  }

  startGame = () => {
    this.setState({winner: [null, null]})
    this.setState({start: true})
  }

  announceWinner = (letter) => {
    console.log('in announce winner');
    console.log(letter);
    setTimeout(() => {
      this.setState({start: false})
      this.setState({winner: [true, letter]})
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        {(this.state.start && !this.state.winner[0]) ?
          <GameContainer announceWinner={(letter) => this.announceWinner(letter)}/>
          :
          <div>
            <h1>Welcome</h1>
            <button onClick={() => {this.startGame()}}>Start Game</button>
          </div>
        }
        {(this.state.winner[0] === true && this.state.winner[1] === 'x') &&
          <WinnerX />
        }
        {(this.state.winner[0] === true && this.state.winner[1] === 'o') &&
          <WinnerO />
        }
      </div>
    );
  }
}


export default App;
