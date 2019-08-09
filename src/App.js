import React from 'react';
import './App.css';
import Login from './components/Login'
import GameContainer from './components/GameContainer'
import HardGameContainer from './components/HardGameContainer'
import EasyCompGameContainer from './components/EasyCompGameContainer'
import ScoreBoard from './components/ScoreBoard'
import ChangeColors from './components/ChangeColors'


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
    stalemate: false,
    changeColor: true
  }

  componentDidMount() {
    this.getUser()
  }

  getUser = () => {
    console.log('getting user');
    let token = localStorage.getItem("token");
    if (!!token) {
      fetch("http://localhost:3000/get_user", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
          Authorization: `${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
        } else {
          this.setUser(data);
        }
      })
    } else {
      console.log('no token');
    }
  }

  startEasyGame = () => {
    if (this.state.startEasy) {
      alert('Game In Session!')
    }

    this.setState({
      stalemate: false,
      winner: [null, null],
      startHard: false,
      startEasyCompGame: false,
      startEasy: true,
      changeColor: false,
      start: true
    })
    document.getElementById("customize-colors").className = "item"
    document.getElementById("easy-game").className = "active item"
    document.getElementById("hard-game").className = "item"
    document.getElementById("comp-game").className = "item"

    let token = localStorage.getItem("token");
    if (!!token) {
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
    } else {
      console.log('no token');
    }
  }

  startHardGame = () => {
    if (this.state.startHard) {
      alert('Game In Session!')
    }

    this.setState({
      stalemate: false,
      winner: [null, null],
      startEasy: false,
      startEasyCompGame: false,
      startHard: true,
      changeColor: false,
      start: true
    })

    document.getElementById("customize-colors").className = "item"
    document.getElementById("easy-game").className = "item"
    document.getElementById("hard-game").className = "active item"
    document.getElementById("comp-game").className = "item"

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

    this.setState({
      stalemate: false,
      winner: [null, null],
      startEasy: false,
      startHard: false,
      startEasyCompGame: true,
      changeColor: false,
      start: true
    })

    document.getElementById("customize-colors").className = "item"
    document.getElementById("easy-game").className = "item"
    document.getElementById("hard-game").className = "item"
    document.getElementById("comp-game").className = "active item"

    let token = localStorage.getItem("token");
    if (!!token) {
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
    } else {
      console.log('no token');
    }
  }

  announceWinnerEasy = (letter) => {
    if (letter === 'x') {
      let token = localStorage.getItem("token");
      if (!!token) {
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
      } else {
        console.log('no token');
      }
    }
    setTimeout(() => {
      this.setState({
        startEasy: false,
        start: false,
        winner: [true, letter]
      })
    }, 1000)
  }

  announceWinnerHard = (letter) => {
    if (letter === 'x') {
      let token = localStorage.getItem("token");
      if (!!token) {
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
    } else {
      console.log('no token');
    }
    }
    setTimeout(() => {
      this.setState({
        startHard: false,
        startEasyCompGame: false,
        start: false,
        winner: [true, letter]
      })
    }, 1000)
  }

  announceWinnerCompEasy = (letter) => {
    if (letter === 'x') {
      let token = localStorage.getItem("token");
      if (!!token) {
        fetch(`http://localhost:3000/easy-comp-user`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accepts: "application/json"
          },
          body: JSON.stringify({
            user: {
              user_id: this.state.user.id,
              score: 15
            }
          })
        })
      } else {
        console.log('no token');
      }
    }
    setTimeout(() => {
      this.setState({
        startEasy: false,
        start: false,
        winner: [true, letter]
      })
    }, 1000)
  }

  announceStaleMate = () => {
    setTimeout(() => {
      this.setState({
        startEasyCompGame: false,
        start: false,
        stalemate: true
      })
    }, 1000)

  }

  logout = () => {
    localStorage.removeItem("token")
    this.setState({
      user: null,
      start: false,
      startEasy: false,
      startHard: false,
      startEasyCompGame: false,
      winner: [null, null],
      stalemate: false,
      changeColor: false
     })
  }

  setUser = (data) => {
    localStorage.setItem("token", data.jwt);
    this.setState({ user: data.user })
  }

  changeColors = () => {
    document.getElementById("customize-colors").className = "active item"
    document.getElementById("easy-game").className = "item"
    document.getElementById("hard-game").className = "item"
    document.getElementById("comp-game").className = "item"

    this.setState({
      startEasy: false,
      startHard: false,
      startEasyCompGame: false,
      start: false,
      changeColor: !this.state.changeColor
    })
  }

  render() {
    let token = localStorage.getItem("token");
    return (
      <div className="App">
        {(!!token && this.state.user) &&
          <div class="ui secondary pointing menu">
            <button id="customize-colors" class="active item" onClick={() => {this.changeColors()}}>CUSTOMIZE COLORS</button>
            <button id="easy-game" class="item" onClick={() => {this.startEasyGame()}}>3 X 3 EASY</button>
            <button id="hard-game" class="item" onClick={() => {this.startHardGame()}}>4 X 4 EASY</button>
            <button id="comp-game" class="item" onClick={() => {this.startEasyCompGame()}}>3 X 3 HARD</button>
            <div class="right menu">
              <button id="name" class="item">WELCOME, {this.state.user.name.toUpperCase()}!</button>
              <button id="logout" class="item" onClick={() => {this.logout()}}>LOGOUT</button>
            </div>
          </div>
        }
        {this.state.user &&
          <h1>TIC TAC TOE</h1>
        }


        {this.state.user &&
          <ScoreBoard winner={this.state.winner} user={this.state.user}/>
        }

        {(this.state.changeColor && this.state.user) &&
          <ChangeColors changeColor={this.changeColors}/>
        }

        {(!this.state.user) &&
          <div>
            <Login setUser={(user) => this.setUser(user)} user={this.state.user}/>
          </div>
        }
        {(this.state.startEasy && !this.state.winner[0]) &&
          <GameContainer user={this.state.user} announceWinner={(letter) => this.announceWinnerEasy(letter)} announceStaleMate={this.announceStaleMate}/>
        }
        {((this.state.startHard && !this.state.winner[0]) && !this.state.stalemate) &&
          <HardGameContainer user={this.state.user} announceWinner={(letter) => this.announceWinnerHard(letter)} announceStaleMate={this.announceStaleMate}/>
        }
        {((this.state.startEasyCompGame && !this.state.winner[0]) && !this.state.stalemate) &&
          <EasyCompGameContainer user={this.state.user} announceWinner={(letter) => this.announceWinnerEasy(letter)} announceStaleMate={this.announceStaleMate}/>
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
