import React from 'react';
import HighScore from './HighScore'

class ScoreBoard extends React.Component {

  state = {
    users: this.props.users
  }

  getHighScores = () => {
    let token = localStorage.getItem("token");
    if (!!token) {
      fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => {
        let sortedUsers = data.users.sort((userA, userB) => {
          return userB.high_score - userA.high_score
        })
        let highScoreUsers = sortedUsers.slice(0,5)
        this.setState({users: highScoreUsers})
      })
    }
  }

  renderUsers = (users) => {
    this.state.users = null
    return users.map((user, i) => {
      return <HighScore user={user} key={user.id} number={i}/>
    })
  }

  render() {
    return (
      <div id="high-scores">
        <div id="high-scores-title">HIGH SCORES</div>
        {!this.state.users &&
          <div>
            <iframe title="loading-plant" src="https://giphy.com/embed/l3c61vAfyPVVt0i9q" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/samsungmobile-love-l3c61vAfyPVVt0i9q">via GIPHY</a></p>{this.getHighScores()}
          </div>
        }
        {!!this.state.users && this.renderUsers(this.state.users)}
      </div>
    )
  }
}

export default ScoreBoard
