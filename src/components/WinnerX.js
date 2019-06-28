import React from 'react';

class WinnerX extends React.Component {

  render() {
    console.log('here');
    return (
      <div id='winner-x'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png" alt="smiley face" />
        <h1>Congrats, you won!</h1>
      </div>
    )
  }
}

export default WinnerX
