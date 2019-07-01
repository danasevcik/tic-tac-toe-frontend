import React from 'react';
import './App.css';
import GameContainer from './components/GameContainer'
import HardGameContainer from './components/HardGameContainer'

import WinnerX from './components/WinnerX'
import WinnerO from './components/WinnerO'
import GameOver from './components/GameOver'

class App extends React.Component {

  state = {
    startEasy: false,
    startHard: false,
    winner: [null, null]
  }

  startEasyGame = () => {
    this.setState({winner: [null, null]})
    this.setState({startEasy: true})
  }

  startHardGame = () => {
    this.setState({winner: [null, null]})
    this.setState({startHard: true})
  }

  announceWinner = (letter) => {
    setTimeout(() => {
      this.setState({startEasy: false})
      this.setState({winner: [true, letter]})
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        {<h1>TIC TAC TOE LAND 💫</h1>}
        {(!this.state.startEasy && !this.state.startHard) &&
          <div>
            <button onClick={() => {this.startEasyGame()}}>Start Easy Game</button>
            <button onClick={() => {this.startHardGame()}}>Start Hard Game</button>
          </div>
        }
        {(this.state.startEasy && !this.state.winner[0]) &&
          <GameContainer announceWinner={(letter) => this.announceWinner(letter)}/>
        }
        {(this.state.startHard && !this.state.winner[0]) &&
          <HardGameContainer announceWinner={(letter) => this.announceWinner(letter)}/>
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
