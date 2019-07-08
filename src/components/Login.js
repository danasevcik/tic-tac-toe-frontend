import React from 'react';

class Login extends React.Component {

  state = {
    name: null,
    hometown: null,
    funFact: null,
    new: false,
    old: false,
    loggedIn: false
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
    .then(res => res.json())
    .then(data => this.props.setUser(data.user))
    .then(this.setState({loggedIn: true}))
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
    .then(res => res.json())
    .then(data => this.props.setUser(data.user))
    .then(this.setState({loggedIn: true}))
  }

  handleNew = () => {
    this.setState({loggedIn: true})
    this.setState({new: true})
  }

  handleOld = () => {
    this.setState({loggedIn: true})
    this.setState({old: true})
  }

  goBack = () => {
    this.setState({new: false})
    this.setState({old: false})
    this.setState({loggedIn: false})
  }

  render() {
    return (
      <div>
        {!this.state.loggedIn &&
          <button onClick={() => {this.handleNew()}}>SIGN UP</button>
        }
        {!this.state.loggedIn &&
          <button onClick={() => {this.handleOld()}}>LOGIN</button>
        }
      {this.state.new &&
        <div>
          <input onChange={(e) => {this.handleChange(e)}} name="name" placeholder="NAME"></input>
          <input onChange={(e) => {this.handleChange(e)}} name="hometown" placeholder="HOMETOWN"></input>
          <input onChange={(e) => {this.handleChange(e)}} name="funFact" placeholder="FUN FACT"></input>
          <button onClick={() => {this.handleCreate(this.state)}}>SUBMIT</button>
          <button onClick={() => {this.goBack()}}>BACK</button>
        </div>
      }
      {this.state.old &&
        <div>
          <input onChange={(e) => {this.handleChange(e)}} name="name" placeholder="NAME"></input>
          <button onClick={() => {this.handleLogin(this.state)}}>SUBMIT</button>
          <button onClick={() => {this.goBack()}}>BACK</button>
        </div>
      }
    </div>
    )
  }
}

export default Login
