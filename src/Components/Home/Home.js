import React from 'react'
import NavBar from '../NavBar/NavBar'

const Home = ({ movies }) => {

  return (
    <main>
      <NavBar className="nav" />
      <div className="home">
        {/* <FeaturedTile 
          className="featured-container" 
          movie={movies[Math.floor(Math.random() * movies.length)]} 
        /> */}
      </div>
    </main>
  )

}
export default Home