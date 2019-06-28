import React from 'react';

class EmptySpace extends React.Component {

  handleChooseSpace = (spotId) => {
    this.props.handleChooseSpace(spotId)
  }

  render() {
    return (
      <div id="empty-space" onClick={() => {this.handleChooseSpace(this.props.spotId)}}>
      </div>
    )
  }
}

export default EmptySpace
