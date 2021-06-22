import React from 'react'
import './FeaturedTile.css'

const FeaturedTile = ({ movie }) => {
  
  if (movie) {
    return (
      <div className="featured-tile-container" style={{backgroundImage: `url(${movie.backdrop_path})`}}>
      <div className="text">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
    )
  } else {
    return (
      <h3>Loading...</h3>
    )
  }
}

export default FeaturedTile