import React, { Component } from 'react'
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
        <button>Account</button>
        <h1>Hooloo</h1>
        <button>Search</button>
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
