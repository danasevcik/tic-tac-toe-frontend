import React from 'react';
import AlreadyTaken from './AlreadyTaken'

class X extends React.Component {

  state = {
    taken: false
  }

  alreadyTaken = () => {
    this.setState({taken: true})
    setTimeout(() => {
      this.setState({taken: false})
    }, 2000)
  }


  render() {
    return (
      <div id={this.props.hard ? "hard-x" : "x"} onClick={() => {this.alreadyTaken()}}>
        {this.state.taken ? <AlreadyTaken /> : null}
      </div>
    )
  }
}

export default X
