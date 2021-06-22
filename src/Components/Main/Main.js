import React, { Component } from 'react'
import { getAllMovies } from '../../API-Calls'
import { Switch, Route } from 'react-router-dom'  

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    getAllMovies()
    .then(data => this.setState({ movies: data.movies }))
  }

  render() {
    return (
      <Switch>

        <Route exact path='/'>
          <h1>Render Welcome Component, button to navigate home or logout</h1>
        </Route>

        <Route path='/home'>
          <h1>Render Home component with carousels organized by genre</h1>
        </Route>

        <Route path='/search'>
          <h1>This is the search page</h1>
        </Route>

        <Route path='/account'>
          <h1>Account page with account details and list of reviewed movies with filter functionality and logout button</h1>
        </Route>

        <Route path='/movie/:id'>
          <h1>Movie show card Modal</h1>
        </Route>

      </Switch>
    )
  }
}