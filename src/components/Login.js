import React from 'react';

class Login extends React.Component {

  state = {
    name: null
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleLogin = (state) => {
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        user: {
          name: state.name
        }
      })
    })
  }

  render() {
    console.log('rendered');
    return (
      <div>
        <input onChange={(e) => {this.handleChange(e)}} id="name" name="name" placeholder="name"></input>
        <br></br>
        <button onClick={() => {this.handleLogin(this.state)}}>Let's Get Started</button>
      </div>
    )
  }
}

export default Login
