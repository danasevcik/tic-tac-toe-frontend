import React from 'react';
import EmptySpace from './EmptySpace'
import X from './X'
import O from './O'

class EasyCompGameContainer extends React.Component {

  state = {
    game: [null, null, null, null, null, null, null, null, null],
    currentPlayer: 'x'
  }

  getComponent = (id) => {
    if (this.state.game[id] === 'x') {
      return <X />
    } else if (this.state.game[id] === 'o') {
      return <O />
    }
  }

  handleChooseSpace = (spotId) => {
    this.state.game[spotId] = this.state.currentPlayer
    this.setState({game: [...this.state.game]})
    if (this.state.currentPlayer === 'x') {
      this.setState({currentPlayer: 'o'})
    } else if (this.state.currentPlayer === 'o') {
      this.setState({currentPlayer: 'x'})
    }
  }

  checkForWinner = () => {
    if (this.state.game[0] === 'x' && this.state.game[1] === 'x') {
      if (this.state.game[2] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[3] === 'x' && this.state.game[4] === 'x') {
      if (this.state.game[5] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[6] === 'x' && this.state.game[7] === 'x') {
      if (this.state.game[8] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[0] === 'x' && this.state.game[3] === 'x') {
      if (this.state.game[6] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[1] === 'x' && this.state.game[4] === 'x') {
      if (this.state.game[7] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[2] === 'x' && this.state.game[5] === 'x') {
      if (this.state.game[8] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[0] === 'x' && this.state.game[4] === 'x') {
      if (this.state.game[8] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[2] === 'x' && this.state.game[4] === 'x') {
      if (this.state.game[6] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[0] === 'o' && this.state.game[1] === 'o') {
      if (this.state.game[2] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[3] === 'o' && this.state.game[4] === 'o') {
      if (this.state.game[5] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[6] === 'o' && this.state.game[7] === 'o') {
      if (this.state.game[8] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[0] === 'o' && this.state.game[3] === 'o') {
      if (this.state.game[6] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[1] === 'o' && this.state.game[4] === 'o') {
      if (this.state.game[7] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[2] === 'o' && this.state.game[5] === 'o') {
      if (this.state.game[8] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[0] === 'o' && this.state.game[4] === 'o') {
      if (this.state.game[8] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[2] === 'o' && this.state.game[4] === 'o') {
      if (this.state.game[6] === 'o') {
        this.props.announceWinner('o')
      }
    }

    let newArr = []
    for(let i = 0; i < this.state.game.length; i++) {
      if (this.state.game[i] === null) {
        newArr.push(this.state.game[i])
      }
    }
    if (newArr.length === 0) {
      console.log('here');
      this.props.announceStaleMate()
    }


  }

  nextMove = () => {
    if (!this.checkForWinner()) {
      if (this.state.currentPlayer === 'o') {
        this.computerTurn()
      }
    }
  }

  computerTurn = () => {
    console.log('computer turn', this.state.currentPlayer);
    setTimeout(() => {
      if (this.state.game[4] === null) {
        this.state.game[4] = this.state.currentPlayer
        this.setState({currentPlayer: 'x'})
        this.setState({game: [...this.state.game]})
      }
      if (this.state.game[0] === 'x' && this.state.game[1] === 'x') {
        if (this.state.game[2] === null) {
          this.state.game[2] = this.state.currentPlayer
          this.setState({currentPlayer: 'x'})
          this.setState({game: [...this.state.game]})
        }
      }
      if (this.state.game[0] === 'x' && this.state.game[1] === 'x') {
        if (this.state.game[4] === 'o' && this.state.game[2] === 'o') {
          if (this.state.game[6] === null && this.state.currentPlayer === 'o') {
            this.state.game[6] = this.state.currentPlayer
            this.setState({currentPlayer: 'x'})
            this.setState({game: [...this.state.game]})
          }
        }
      }
      if (this.state.game[0] === 'x' && this.state.game[1] === 'x') {
        if (this.state.game[4] === 'o' && this.state.game[2] === 'o') {
          if (this.state.game[6] === 'x' && this.state.currentPlayer === 'o') {
            this.state.game[3] = this.state.currentPlayer
            this.setState({currentPlayer: 'x'})
            this.setState({game: [...this.state.game]})
          }
        }
      }
      if (this.state.game[0] === 'x' && this.state.game[6] === 'x') {
        if (this.state.currentPlayer === 'o' && this.state.game[3] === null) {
          this.state.game[3] = this.state.currentPlayer
          this.setState({currentPlayer: 'x'})
          this.setState({game: [...this.state.game]})
        }
      }
      if (this.state.game[0] === 'x' && this.state.game[6] === 'x') {
        if (this.state.game[5] === 'x' && this.state.currentPlayer === 'o') {
          if (this.state.game[7] === null) {
            this.state.game[7] = this.state.currentPlayer
            this.setState({currentPlayer: 'x'})
            this.setState({game: [...this.state.game]})
          }
        }
      }
      if (this.state.game[0] === 'x' && this.state.game[2] === 'x') {
        if (this.state.game[1] === null && this.state.currentPlayer === 'o') {
          this.state.game[1] = this.state.currentPlayer
          this.setState({currentPlayer: 'x'})
          this.setState({game: [...this.state.game]})
        }
      }
      if (this.state.game[0] === 'x' && this.state.game[2] === 'x') {
        if (this.state.game[1] === 'o' && this.state.game[4] === 'o') {
          if (this.state.game[7] === null && this.state.currentPlayer === 'o') {
            this.state.game[7] = this.state.currentPlayer
            this.setState({currentPlayer: 'x'})
            this.setState({game: [...this.state.game]})
          }
        }
      }
      if (this.state.game[0] === 'x' && this.state.game[1] === 'x') {
        if (this.state.game[2] === null && this.state.currentPlayer === 'o') {
          this.state.game[2] = this.state.currentPlayer
          this.setState({currentPlayer: 'x'})
          this.setState({game: [...this.state.game]})
        }
      }
      if (this.state.game[0] === 'x' && this.state.game[5] === 'x') {
        if (this.state.game[2] === null && this.state.currentPlayer === 'o') {
          this.state.game[2] = this.state.currentPlayer
          this.setState({currentPlayer: 'x'})
          this.setState({game: [...this.state.game]})
        }
      }



    }
    , 2000)
  }

  render() {
    this.nextMove()
    return (
      <div id="board-container">
        {!!this.props.user ? <h1>{this.props.user.name.toUpperCase()}! LET'S SEE WHAT YOU'VE GOT</h1> : <h1>Welcome</h1>}

        <div id="board">

          <div className="spot" id='0'> {!!this.state.game[0] ? this.getComponent(0) : <EmptySpace spotId={0} handleChooseSpace={() => {this.handleChooseSpace(0)}}/>} </div>
          <div className="spot" id='1'> {!!this.state.game[1] ? this.getComponent(1) : <EmptySpace spotId={1} handleChooseSpace={() => {this.handleChooseSpace(1)}}/>} </div>
          <div className="spot" id='2'> {!!this.state.game[2] ? this.getComponent(2) : <EmptySpace spotId={2} handleChooseSpace={() => {this.handleChooseSpace(2)}}/>} </div>
          <div className="spot" id='3'> {!!this.state.game[3] ? this.getComponent(3) : <EmptySpace spotId={3} handleChooseSpace={() => {this.handleChooseSpace(3)}}/>} </div>
          <div className="spot" id='4'> {!!this.state.game[4] ? this.getComponent(4) : <EmptySpace spotId={4} handleChooseSpace={() => {this.handleChooseSpace(4)}}/>} </div>
          <div className="spot" id='5'> {!!this.state.game[5] ? this.getComponent(5) : <EmptySpace spotId={5} handleChooseSpace={() => {this.handleChooseSpace(5)}}/>} </div>
          <div className="spot" id='6'> {!!this.state.game[6] ? this.getComponent(6) : <EmptySpace spotId={6} handleChooseSpace={() => {this.handleChooseSpace(6)}}/>} </div>
          <div className="spot" id='7'> {!!this.state.game[7] ? this.getComponent(7) : <EmptySpace spotId={7} handleChooseSpace={() => {this.handleChooseSpace(7)}}/>} </div>
          <div className="spot" id='8'> {!!this.state.game[8] ? this.getComponent(8) : <EmptySpace spotId={8} handleChooseSpace={() => {this.handleChooseSpace(8)}}/>} </div>

        </div>


      </div>
    )
  }
}

export default EasyCompGameContainer
