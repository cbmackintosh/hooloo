import React from 'react'
import FeaturedTile from '../FeaturedTile/FeaturedTile'

const Home = ({ movies }) => {
  console.log(movies)
  return (
    <div className="home">
      <FeaturedTile 
        className="featured-container" 
        movie={movies[Math.floor(Math.random() * movies.length)]} 
      />
    </div>
  )

}
export default Home