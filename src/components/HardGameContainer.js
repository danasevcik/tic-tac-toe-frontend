import React from 'react';
import EmptySpace from './EmptySpace'
import X from './X'
import O from './O'

class HardGameContainer extends React.Component {

  state = {
    user: null,
    game: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    currentPlayer: 'x'
  }

  getComponent = (id) => {
    if (this.state.game[id] === 'x') {
      return <X hard={true}/>
    } else if (this.state.game[id] === 'o') {
      return <O hard={true}/>
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
    // winners for 'x'
    if (this.state.game[0] === 'x' && this.state.game[1] === 'x') {
      if (this.state.game[2] === 'x' && this.state.game[3] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[4] === 'x' && this.state.game[5] === 'x') {
      if (this.state.game[6] === 'x' && this.state.game[7] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[8] === 'x' && this.state.game[9] === 'x') {
      if (this.state.game[10] === 'x' && this.state.game[11] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[12] === 'x' && this.state.game[13] === 'x') {
      if (this.state.game[14] === 'x' && this.state.game[15] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[0] === 'x' && this.state.game[4] === 'x') {
      if (this.state.game[8] === 'x' && this.state.game[12] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[1] === 'x' && this.state.game[5] === 'x') {
      if (this.state.game[9] === 'x' && this.state.game[13] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[2] === 'x' && this.state.game[6] === 'x') {
      if (this.state.game[10] === 'x' && this.state.game[14] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[3] === 'x' && this.state.game[7] === 'x') {
      if (this.state.game[11] === 'x' && this.state.game[15] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[0] === 'x' && this.state.game[5] === 'x') {
      if (this.state.game[10] === 'x' && this.state.game[15] === 'x') {
        this.props.announceWinner('x')
      }
    }
    if (this.state.game[3] === 'x' && this.state.game[6] === 'x') {
      if (this.state.game[9] === 'x' && this.state.game[12] === 'x') {
        this.props.announceWinner('x')
      }
    }
    //winners for 'o'
    if (this.state.game[0] === 'o' && this.state.game[1] === 'o') {
      if (this.state.game[2] === 'o' && this.state.game[3] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[4] === 'o' && this.state.game[5] === 'o') {
      if (this.state.game[6] === 'o' && this.state.game[7] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[8] === 'o' && this.state.game[9] === 'o') {
      if (this.state.game[10] === 'o' && this.state.game[11] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[12] === 'o' && this.state.game[13] === 'o') {
      if (this.state.game[14] === 'o' && this.state.game[15] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[0] === 'o' && this.state.game[4] === 'o') {
      if (this.state.game[8] === 'o' && this.state.game[12] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[1] === 'o' && this.state.game[5] === 'o') {
      if (this.state.game[9] === 'o' && this.state.game[13] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[2] === 'o' && this.state.game[6] === 'o') {
      if (this.state.game[10] === 'o' && this.state.game[14] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[3] === 'o' && this.state.game[7] === 'o') {
      if (this.state.game[11] === 'o' && this.state.game[15] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[0] === 'o' && this.state.game[5] === 'o') {
      if (this.state.game[10] === 'o' && this.state.game[15] === 'o') {
        this.props.announceWinner('o')
      }
    }
    if (this.state.game[3] === 'o' && this.state.game[6] === 'o') {
      if (this.state.game[9] === 'o' && this.state.game[12] === 'o') {
        this.props.announceWinner('o')
      }
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
    setTimeout(() => {
      let newArr = []
      for (let i = 0; i < this.state.game.length; i++) {
        if (this.state.game[i] === null) {
          newArr.push(i)
        }
      }
      if (newArr.length > 0) {
        let min = Math.ceil(0);
        let max = Math.floor(newArr.length - 1);
        let chosenIndex =  Math.floor(Math.random() * (max - min + 1)) + min
        let chosenGameIndex = newArr[chosenIndex]
        this.state.game[chosenGameIndex] = this.state.currentPlayer
        this.setState({currentPlayer: 'x'})
        this.setState({game: [...this.state.game]})}
      }
    , 2000)
  }

  render() {
    this.nextMove()
    return (
      <div id="board-container">
        {this.state.user ? <h1>Welcome, {this.state.user}</h1> : <h1>Welcome</h1>}

        <div id="hard-board">

          <div className="spot" id='0'> {!!this.state.game[0] ? this.getComponent(0) : <EmptySpace hard={true} spotId={0} handleChooseSpace={() => {this.handleChooseSpace(0)}}/>} </div>
          <div className="spot" id='1'> {!!this.state.game[1] ? this.getComponent(1) : <EmptySpace hard={true} spotId={1} handleChooseSpace={() => {this.handleChooseSpace(1)}}/>} </div>
          <div className="spot" id='2'> {!!this.state.game[2] ? this.getComponent(2) : <EmptySpace hard={true} spotId={2} handleChooseSpace={() => {this.handleChooseSpace(2)}}/>} </div>
          <div className="spot" id='3'> {!!this.state.game[3] ? this.getComponent(3) : <EmptySpace hard={true} spotId={3} handleChooseSpace={() => {this.handleChooseSpace(3)}}/>} </div>
          <div className="spot" id='4'> {!!this.state.game[4] ? this.getComponent(4) : <EmptySpace hard={true} spotId={4} handleChooseSpace={() => {this.handleChooseSpace(4)}}/>} </div>
          <div className="spot" id='5'> {!!this.state.game[5] ? this.getComponent(5) : <EmptySpace hard={true} spotId={5} handleChooseSpace={() => {this.handleChooseSpace(5)}}/>} </div>
          <div className="spot" id='6'> {!!this.state.game[6] ? this.getComponent(6) : <EmptySpace hard={true} spotId={6} handleChooseSpace={() => {this.handleChooseSpace(6)}}/>} </div>
          <div className="spot" id='7'> {!!this.state.game[7] ? this.getComponent(7) : <EmptySpace hard={true} spotId={7} handleChooseSpace={() => {this.handleChooseSpace(7)}}/>} </div>
          <div className="spot" id='8'> {!!this.state.game[8] ? this.getComponent(8) : <EmptySpace hard={true} spotId={8} handleChooseSpace={() => {this.handleChooseSpace(8)}}/>} </div>
          <div className="spot" id='9'> {!!this.state.game[9] ? this.getComponent(9) : <EmptySpace hard={true} spotId={9} handleChooseSpace={() => {this.handleChooseSpace(9)}}/>} </div>
          <div className="spot" id='10'> {!!this.state.game[10] ? this.getComponent(10) : <EmptySpace hard={true} spotId={10} handleChooseSpace={() => {this.handleChooseSpace(10)}}/>} </div>
          <div className="spot" id='11'> {!!this.state.game[11] ? this.getComponent(11) : <EmptySpace hard={true} spotId={11} handleChooseSpace={() => {this.handleChooseSpace(11)}}/>} </div>
          <div className="spot" id='12'> {!!this.state.game[12] ? this.getComponent(12) : <EmptySpace hard={true} spotId={12} handleChooseSpace={() => {this.handleChooseSpace(12)}}/>} </div>
          <div className="spot" id='13'> {!!this.state.game[13] ? this.getComponent(13) : <EmptySpace hard={true} spotId={13} handleChooseSpace={() => {this.handleChooseSpace(13)}}/>} </div>
          <div className="spot" id='14'> {!!this.state.game[14] ? this.getComponent(14) : <EmptySpace hard={true} spotId={14} handleChooseSpace={() => {this.handleChooseSpace(14)}}/>} </div>
          <div className="spot" id='15'> {!!this.state.game[15] ? this.getComponent(15) : <EmptySpace hard={true} spotId={15} handleChooseSpace={() => {this.handleChooseSpace(15)}}/>} </div>

        </div>


      </div>
    )
  }
}

export default HardGameContainer
