import React from 'react';
import HighScore from './HighScore'

class ScoreBoard extends React.Component {

  state = {
    users: ""
  }

  getHighScores = () => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => {
      let sortedUsers = data.users.sort((userA, userB) => {
        return userB.high_score - userA.high_score
      })
      let highScoreUsers = sortedUsers.slice(0,5)
      this.setState({users: highScoreUsers})
    })
  }

  renderUsers = (users) => {
    this.state.users = null
    return users.map((user, i) => {
      return <HighScore user={user} key={user.id} number={i}/>
    })
  }

  render() {
    return (
      <div>
        <div id="high-scores">
          <div id="high-scores-title">HIGH SCORES</div>
          {!this.state.users && this.getHighScores()}
          {!!this.state.users && this.renderUsers(this.state.users)}
        </div>
      </div>
    )
  }
}

export default ScoreBoard
