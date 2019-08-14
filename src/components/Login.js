import React from 'react';
import { Button, Form } from 'semantic-ui-react'

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
        this.props.setUser(data);
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
    .then(data => {
      if (data.message) {
        alert(data.message);
      } else {
        this.props.setUser(data);
        this.setState({loggedIn: true})
      }
    })
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
      <div id="login-main-div">
        {!this.state.loggedIn &&
          <div id="login">
            <h1 id="item-1">TIC TAC TOE</h1>
            <Button.Group id="item-2" size='large'>
              <Button onClick={() => {this.handleNew()}}>SIGN UP</Button>
              <Button.Or/>
              <Button onClick={() => {this.handleOld()}}>LOGIN</Button>
            </Button.Group>
          </div>
        }

      {this.state.new &&
        <Form id="signup-form">
          <Form.Field>
            <label>Name</label>
            <input onChange={(e) => {this.handleChange(e)}} name="name" placeholder="NAME"></input>
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <input onChange={(e) => {this.handleChange(e)}} name="username" placeholder="USERNAME"></input>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input onChange={(e) => {this.handleChange(e)}} type="password" name="password" placeholder="PASSWORD"></input>
          </Form.Field>
          <Form.Field>
            <label>Hometown</label>
            <input onChange={(e) => {this.handleChange(e)}} name="hometown" placeholder="HOMETOWN"></input>
          </Form.Field>
          <Form.Field>
            <label>Fun Fact</label>
            <input onChange={(e) => {this.handleChange(e)}} name="funFact" placeholder="FUN FACT"></input>
          </Form.Field>
          <Button type="submit" onClick={() => {this.handleCreate(this.state)}}>SIGN UP</Button>
          <Button type="submit" onClick={() => {this.goBack()}}>BACK</Button>
        </Form>
      }
      {this.state.old &&
        <Form id="login-form">
          <Form.Field>
            <label>Username</label>
            <input onChange={(e) => {this.handleChange(e)}} name="username" placeholder="USERNAME"></input>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input onChange={(e) => {this.handleChange(e)}} type="password" name="password" placeholder="PASSWORD"></input>
          </Form.Field>
          <Button type="submit" onClick={() => {this.handleLogin(this.state)}}> SIGN IN</Button>
          <Button type="submit" onClick={() => {this.goBack()}}>BACK</Button>
        </Form>
      }
    </div>
    )
  }
}

export default Login
