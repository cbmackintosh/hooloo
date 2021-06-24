import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'  
import { getAllMovies } from '../../API-Calls'
import Account from '../Account/Account'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'

export default class Main extends Component {
  constructor({ user, setUser }) {
    super()
    this.state = {
      user: user,
      movies: []
    }
  }

  componentDidMount() {
    getAllMovies()
    .then(data => this.setState({ movies: data.movies }))
  }

  render() {
    return (
      <main>

        <NavBar className="nav" />

        <Switch>
          
          <Route exact path='/'>
            <Home
            movies={this.state.movies}
            />
          </Route>

          <Route path='/search'>
            <h1>This is the search page</h1>
          </Route>

          <Route 
            path='/account'
            render={() =>
              <Account
                user={this.state.user}
                setUser={this.props.setUser}
                movies={this.state.movies}
              />
            }
          />

          <Route path='/movie/:id'>
            <h1>Movie show card Modal</h1>
          </Route>

        </Switch>
      </main>
    )
  }
}