import React, { Component } from 'react';



class Search extends Component {
    constructor(props) {
      super(props)
      this.state = {
        search: ""
      }
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange = (e) => {
      this.setState({
        search: e.target.value
      },()=>{
        this.props.filtermv(this.state.search)
      })
      
    }
    
    render() {
       
      return (
        <div>
          <input type="text" 
            value={this.state.search} 
            onChange={this.handleChange}/>
        </div>
        )
    }
  }

  export default Search