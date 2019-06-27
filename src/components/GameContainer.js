import React from 'react';

class GameContainer extends React.Component {

  state = {
    user: null
  }

  render() {
    return (
      <div id="board-container">
        {this.state.user ? <h1>Welcome, {this.state.user}</h1> : <h1>Welcome</h1>}
        <div id="board">
          <div class="spot" id='1'></div>
          <div class="spot" id='2'></div>
          <div class="spot" id='3'></div>
          <div class="spot" id='4'></div>
          <div class="spot" id='5'></div>
          <div class="spot" id='6'></div>
          <div class="spot" id='7'></div>
          <div class="spot" id='8'></div>
          <div class="spot" id='9'></div>
        </div>


      </div>
    )
  }
}

export default GameContainer
