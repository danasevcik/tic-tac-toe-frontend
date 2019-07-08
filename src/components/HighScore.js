import React from 'react';

class HighScore extends React.Component {

  render() {
    return (
      <span>
        <p>{this.props.number + 1}. {this.props.user.name.toUpperCase()} - {this.props.user.high_score}</p>
      </span>
    )
  }
}

export default HighScore
