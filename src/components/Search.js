import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Search extends Component {

  render () {
    return (
      <div>
        <form onSubmit={e => this.props.onSubmit(e)}>
          <h1>Fetch the information you need to provide the best care for your pet!</h1>
          <input className="searchbar" onChange={this.props.onChangeHandler} type="search" value={this.props.search} placeholder="Search for article"/>
          <button className="searchbutton" type="submit">Search</button>
        </form>
        {this.props.submitted ? <Redirect to="/search-results"/> : null }
      </div>
    )
  }
}


export default Search;
