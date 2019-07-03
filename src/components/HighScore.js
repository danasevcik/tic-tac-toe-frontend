import React from 'react';

class HighScore extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.user.name}</p>
        <p>{this.props.user.high_score}</p>
      </div>
    )
  }
}

export default HighScore
