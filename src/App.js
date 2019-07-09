import React from 'react';
import './App.css';
import Login from './components/Login'
import GameContainer from './components/GameContainer'
import HardGameContainer from './components/HardGameContainer'
import ScoreBoard from './components/ScoreBoard'


import WinnerX from './components/WinnerX'
import WinnerO from './components/WinnerO'
import GameOver from './components/GameOver'
import Warn from './components/Warn'

class App extends React.Component {

  state = {
    user: null,
    start: false,
    startEasy: false,
    startHard: false,
    winner: [null, null]
  }

  startEasyGame = () => {
    if (this.state.startEasy) {
      return <Warn />
    }
    this.setState({winner: [null, null]})
    this.setState({startHard: false})
    this.setState({startEasy: true})
    this.setState({start: true})
    fetch('http://localhost:3000/easy-session', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        session: {
          user_id: this.state.user.id,
          score: 5
        }
      })
    })
  }

  startHardGame = () => {
    this.setState({winner: [null, null]})
    this.setState({startEasy: false})
    this.setState({startHard: true})
    this.setState({start: true})
    fetch('http://localhost:3000/hard-session', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        session: {
          user_id: this.state.user.id,
          score: 10
        }
      })
    })
  }

  announceWinnerEasy = (letter) => {
    if (letter === 'x') {
      fetch(`http://localhost:3000/easy-user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({
          user: {
            user_id: this.state.user.id,
            score: 5
          }
        })
      })
    }
    setTimeout(() => {
      this.setState({startEasy: false})
      this.setState({start: false})
      this.setState({winner: [true, letter]})
    }, 1000)
  }

  announceWinnerHard = (letter) => {
    if (letter === 'x') {
      fetch(`http://localhost:3000/hard-user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({
          user: {
            user_id: this.state.user.id,
            score: 10
          }
        })
      })
    }
    setTimeout(() => {
      this.setState({startHard: false})
      this.setState({start: false})
      this.setState({winner: [true, letter]})
    }, 1000)
  }

  setUser = (user) => {
    this.setState({ user })
  }

  render() {
    return (
      <div className="App">
        {<h1>TIC TAC TOE LAND 💫</h1>}
        {this.state.user &&
          <ScoreBoard winner={this.state.winner} user={this.state.user}/>
        }
        {(this.state.user) &&
          <div>
            <button onClick={() => {this.startEasyGame()}}>START EASY GAME</button>
            <button onClick={() => {this.startHardGame()}}>START HARD GAME</button>
          </div>
        }

        {(!this.state.user) &&
          <div>
            <Login setUser={(user) => this.setUser(user)} user={this.state.user}/>
          </div>
        }
        {(this.state.startEasy && !this.state.winner[0]) &&
          <GameContainer announceWinner={(letter) => this.announceWinnerEasy(letter)} user={this.state.user} startEasy={this.state.startEasy}/>
        }
        {(this.state.startHard && !this.state.winner[0]) &&
          <HardGameContainer announceWinner={(letter) => this.announceWinnerHard(letter)} user={this.state.user} startHard={this.state.startHard}/>
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
