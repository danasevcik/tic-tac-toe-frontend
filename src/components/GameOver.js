import React from 'react';

class GameOver extends React.Component {

  render() {
    return (
      <div id='game-over'>
        <h1>Stalemate</h1>
        <img className="end-img" src="https://media.tmicdn.com/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/r/a/rainbowunicornwebsiteimage.png" alt="unicorn" />
      </div>
    )
  }
}

export default GameOver
