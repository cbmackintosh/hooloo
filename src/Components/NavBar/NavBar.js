import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      visible: true,
      prevScrollPosition: window.pageYOffset
    }
  }

  render() {
    return(
      <nav className={"visible-" + this.state.visible}>
        <Link to='/account'><button>Account</button></Link>
        <Link to='/'><h1>Hooloo</h1></Link>
        <Link to='/search'><button>Search</button></Link>
      </nav>
    )
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const { prevScrollPosition } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPosition > currentScrollPos;

    this.setState({
      prevScrollPosition: currentScrollPos,
      visible
    });
  };

}
