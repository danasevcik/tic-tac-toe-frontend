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
        return userA.high_score - userB.high_score
      })
      let highScoreUsers = sortedUsers.slice(0,5)
      this.setState({users: highScoreUsers})
    })
  }

  renderUsers = (users) => {
    return users.map(user => {
      return <HighScore user={user} key={user.id}/>
    })
  }

  render() {
    return (
      <div>
      scoreboard
        {!this.state.users && this.getHighScores()}
        {!!this.state.users && this.renderUsers(this.state.users)}
      </div>
    )
  }
}

export default ScoreBoard
