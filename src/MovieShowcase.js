import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    const myArr = movieData.map(movie => {
      let foo = movie.genres
      foo = foo.join(", ")
      //console.log(`foo = ${foo}`)
      return <MovieCard key={movie.title + movie.poster} title={movie.title} IMDBRating={movie.IMDBRating} genres={foo} poster={movie.poster} />
    })
    return(myArr)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
