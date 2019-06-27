import React from 'react';
import EmptySpace from './EmptySpace'
import X from './X'
import O from './O'

class GameContainer extends React.Component {

  state = {
    user: null,
    game: ['x', 'o', null, null, null, null, null, null, null]
  }

  getComponent = (id) => {
    console.log(id);
    console.log(this.state.game[id]);
    if (this.state.game[id] === 'x') {
      return <X />
    } else if (this.state.game[id] === 'o') {
      return <O />
    }
  }

  render() {
    return (
      <div id="board-container">
        {this.state.user ? <h1>Welcome, {this.state.user}</h1> : <h1>Welcome</h1>}

        <div id="board">
        
          <div className="spot" id='0'> {!!this.state.game[0] ? this.getComponent(0) : <EmptySpace />} </div>
          <div className="spot" id='1'> {!!this.state.game[1] ? this.getComponent(1) : <EmptySpace />} </div>
          <div className="spot" id='2'> {!!this.state.game[2] ? this.getComponent(2) : <EmptySpace />} </div>
          <div className="spot" id='3'> {!!this.state.game[3] ? this.getComponent(3) : <EmptySpace />} </div>
          <div className="spot" id='4'> {!!this.state.game[4] ? this.getComponent(4) : <EmptySpace />} </div>
          <div className="spot" id='5'> {!!this.state.game[5] ? this.getComponent(5) : <EmptySpace />} </div>
          <div className="spot" id='6'> {!!this.state.game[6] ? this.getComponent(6) : <EmptySpace />} </div>
          <div className="spot" id='7'> {!!this.state.game[7] ? this.getComponent(7) : <EmptySpace />} </div>
          <div className="spot" id='8'> {!!this.state.game[8] ? this.getComponent(8) : <EmptySpace />} </div>

        </div>


      </div>
    )
  }
}

export default GameContainer
