import React from 'react';
import './App.css';
import Login from './components/Login'
import GameContainer from './components/GameContainer'
import HardGameContainer from './components/HardGameContainer'
import EasyCompGameContainer from './components/EasyCompGameContainer'
import ScoreBoard from './components/ScoreBoard'


import WinnerX from './components/WinnerX'
import WinnerO from './components/WinnerO'
import GameOver from './components/GameOver'

class App extends React.Component {

  state = {
    user: null,
    start: false,
    startEasy: false,
    startHard: false,
    startEasyCompGame: false,
    winner: [null, null],
    stalemate: false
  }

  startEasyGame = () => {
    if (this.state.startEasy) {
      alert('Game In Session!')
    }
    this.setState({winner: [null, null]})
    this.setState({startHard: false})
    this.setState({startEasyCompGame: false})
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
    if (this.state.startHard) {
      alert('Game In Session!')
    }

    this.setState({winner: [null, null]})
    this.setState({startEasy: false})
    this.setState({startEasyCompGame: false})
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

  startEasyCompGame = () => {
    if (this.state.startEasyCompGame) {
      alert('Game In Session!')
    }

    this.setState({winner: [null, null]})
    this.setState({startEasy: false})
    this.setState({startHard: false})
    this.setState({startEasyCompGame: true})
    this.setState({start: true})

    fetch('http://localhost:3000/easy-comp-session', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        session: {
          user_id: this.state.user.id,
          score: 20
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

  announceStaleMate = () => {
    console.log('stalemate');
    setTimeout(() => {
      this.setState({stalemate: true})
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
            <button onClick={() => {this.startEasyCompGame()}}>START HARDER GAME</button>
          </div>
        }

        {(!this.state.user) &&
          <div>
            <Login setUser={(user) => this.setUser(user)} user={this.state.user}/>
          </div>
        }
        {(this.state.startEasy && !this.state.winner[0]) &&
          <GameContainer announceWinner={(letter) => this.announceWinnerEasy(letter)} announceStaleMate={this.announceStaleMate}/>
        }
        {((this.state.startHard && !this.state.winner[0]) && !this.state.stalemate) &&
          <HardGameContainer announceWinner={(letter) => this.announceWinnerHard(letter)} announceStaleMate={this.announceStaleMate}/>
        }
        {((this.state.startEasyCompGame && !this.state.winner[0]) && !this.state.stalemate) &&
          <EasyCompGameContainer announceWinner={(letter) => this.announceWinnerEasy(letter)} announceStaleMate={this.announceStaleMate}/>
        }
        {(this.state.winner[0] === true && this.state.winner[1] === 'x') &&
          <WinnerX />
        }
        {(this.state.winner[0] === true && this.state.winner[1] === 'o') &&
          <WinnerO />
        }
        {this.state.stalemate &&
          <GameOver />
        }
      </div>
    );
  }
}


export default App;
