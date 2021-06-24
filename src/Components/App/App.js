import './App.css';
import { Component } from 'react'
import Login from '../Login/Login'
import Main from '../Main/Main'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: JSON.parse(localStorage.getItem('hooloo-login'))
    }
  }

  setUser = (user) => {
    this.setState({ user: user })
  }

  render() {
    if (!this.state.user) {
      return (
        <Login setUser={this.setUser} />
      )
    } else {
      return (
        <Main user={this.state.user} setUser={this.setUser} />
      )
    }
  }
}