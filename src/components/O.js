import React from 'react';
import AlreadyTakenByComp from './AlreadyTakenByComp'

class O extends React.Component {

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
      <div id={this.props.hard ? "hard-o" : "o"} onClick={() => {this.alreadyTaken()}}>
        {this.state.taken ? <AlreadyTakenByComp /> : null}
      </div>
    )
  }
}

export default O
