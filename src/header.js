import React, { Component } from 'react';
import Rating from './rating.js'
import Search from './search.js'



const Header = (props) => {
    //console.log(props.name)
    return (
        <div className='header'>
          <Search filtermv={props.filtermv}/>
          <Rating rating={props.minRate} changerate={props.changeRate} />
        </div>
    )
}

export default Header