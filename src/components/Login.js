import React from 'react';

class Login extends React.Component {

  state = {
    name: null,
    hometown: null,
    funFact: null,
    new: false,
    old: false
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleCreate = (state) => {
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        user: {
          name: state.name,
          hometown: state.hometown,
          fun_fact: state.funFact
        }
      })
    })
  }

  handleLogin = (state) => {
    fetch(`http://localhost:3000/find-user`, {
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

  handleNew = () => {
    this.setState({new: true})
  }

  handleOld = () => {
    this.setState({old: true})
  }

  goBack = () => {
    this.setState({new: false})
    this.setState({old: false})
  }

  render() {
    console.log('rendered');
    return (
      <div>
        {(this.state.new || this.state.old) ? null :
          <button onClick={() => {this.handleNew()}}>New User</button>
        }
        {(this.state.new || this.state.old) ? null :
          <button onClick={() => {this.handleOld()}}>Returning User</button>
        }
      {this.state.new &&
        <div>
          <input onChange={(e) => {this.handleChange(e)}} name="name" placeholder="name"></input>
          <input onChange={(e) => {this.handleChange(e)}} name="hometown" placeholder="hometown"></input>
          <input onChange={(e) => {this.handleChange(e)}} name="funFact" placeholder="fun fact"></input>
          <button onClick={() => {this.handleCreate(this.state)}}>Let's Get Started</button>
          <button onClick={() => {this.goBack()}}>Back</button>
        </div>
      }
      {this.state.old &&
        <div>
          <input onChange={(e) => {this.handleChange(e)}} name="name" placeholder="name"></input>
          <button onClick={() => {this.handleLogin(this.state)}}>Let's Get Started</button>
          <button onClick={() => {this.goBack()}}>Back</button>
        </div>
      }
    </div>
    )
  }
}

export default Login
