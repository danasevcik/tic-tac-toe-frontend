import React from 'react';

class HighScore extends React.Component {

  render() {
    console.log('in high score');
    return (
      <div id="show">
      here
        {this.props.user.name}
      </div>
    )
  }
}

export default HighScore
