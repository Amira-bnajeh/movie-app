import React, { Component } from 'react';
import Modelpopup from './modelpopup.js';
import Rating from './rating.js'



class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
          
        }
    }

    render (){
        console.log(this.props)
        return(<div className="main">
            {this.props.listmovies.map((mv, i) => (
                <div key={i} className="block-movie">
                    <img src={mv.image} />
                    <h2>{mv.title}</h2>
                    <Rating rating={mv.rate} />
                </div>
            ))}
           
            <Modelpopup newMovie={(movie)=>this.props.newMovie(movie)} />
            </div>
        )
    }
}


export default MovieList