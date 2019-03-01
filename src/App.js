import React, { Component } from 'react';

import './App.css';
import Header from './header.js'
import MovieList from './moviesList.js'

const movies =  [
  {
  title: "Paris est à nous",
  image: "https://image.tmdb.org/t/p/w185/90XPbJYfJCkZLfp9wQD2m9sNOqS.jpg",
  rate:2
  },
  {
    title: "Between Worlds",
    image: "https://image.tmdb.org/t/p/w185/wfxqobg0Do8OwIO6IUM7LWHF1mV.jpg",
    rate:4
    },{
      title: "Crazy Rich Asians",
      image: "https://image.tmdb.org/t/p/w185/gnTqi4nhIi1eesT5uYMmhEPGNih.jpg",
      rate:3
      }
]


class App extends Component {
  state={
    movies:movies,
    minRate: 1
  }

  filterMovies(filterMv){
    this.setState({
      movies : movies.filter((x) => 
      {
        return x.title.toLowerCase().indexOf(filterMv.toLowerCase()) !== -1
      })
  })
  }
  addMovie(newMovie){
    console.log(newMovie)
      this.setState({
     movies: movies.concat(newMovie)
     })
  }
//change rate 
changeRate = x => {
  this.setState({minRate:x})
}
  render() {

    return (
      <div>
         <Header filtermv={(x)=>this.filterMovies(x)} minRate={this.state.minRate} changeRate={this.changeRate}/>
         <MovieList listmovies={this.state.movies.filter(el => el.rate >= this.state.minRate )} newMovie={(x)=>this.addMovie(x)}/>
      </div>
    );
  }
}

export default App;
