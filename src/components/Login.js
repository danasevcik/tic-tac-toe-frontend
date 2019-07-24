import React from 'react';

class Login extends React.Component {

  state = {
    name: null,
    hometown: null,
    funFact: null,
    new: false,
    old: false,
    loggedIn: false,
    username: null,
    password: null
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleCreate = (state) => {
    // create new user
    // send to users controller
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
          fun_fact: state.funFact,
          username: state.username,
          password: state.password
        }
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        alert(data.message);
      } else {
        this.props.setUser(data.user);
        this.setState({loggedIn: true})
      }
    })

  }

  handleLogin = (state) => {
    // login existing user
    // send to auth controller
    let token = localStorage.getItem("token");
    fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        user: {
          username: state.username,
          password: state.password
        }
      })
    })
    .then(res => res.json())
    .then(data => this.props.setUser(data))
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
          <input onChange={(e) => {this.handleChange(e)}} name="username" placeholder="USERNAME"></input>
          <input onChange={(e) => {this.handleChange(e)}} type="password" name="password" placeholder="PASSWORD"></input>
          <input onChange={(e) => {this.handleChange(e)}} name="hometown" placeholder="HOMETOWN"></input>
          <input onChange={(e) => {this.handleChange(e)}} name="funFact" placeholder="FUN FACT"></input>
          <button onClick={() => {this.handleCreate(this.state)}}>SUBMIT</button>
          <button onClick={() => {this.goBack()}}>BACK</button>
        </div>
      }
      {this.state.old &&
        <div>
          <input onChange={(e) => {this.handleChange(e)}} name="username" placeholder="USERNAME"></input>
          <input onChange={(e) => {this.handleChange(e)}} type="password" name="password" placeholder="PASSWORD"></input>
          <button onClick={() => {this.handleLogin(this.state)}}>SUBMIT</button>
          <button onClick={() => {this.goBack()}}>BACK</button>
        </div>
      }
    </div>
    )
  }
}

export default Login
