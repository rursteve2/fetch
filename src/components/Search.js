import React, { Component } from 'react';
import articles from '../articles'


function searchingFor(term) {
  return function(x) {
  return x.title.toLowerCase().includes(term.toLowerCase()) || false;
  };
}


class Search extends Component {

    constructor() {
        super()
        this.state = {
            filteredArticles: [],
            submitted:false
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        let allArticles = articles.filter((article) => 
          article.pet === this.props.search
        )
        console.log(allArticles)
        this.setState({
            filteredArticles: allArticles,
            submitted:true
        })
        return allArticles
      }



  render() {
      let map = this.state.submitted ?
      this.state.filteredArticles.map((article) => {
          return(
              <div>
              <h1>{article.title}</h1>
              <p>{article.body}</p>
              </div>
          )
      }) : null
  return (
    <div>
        <form onSubmit={e => this.onSubmit(e)}>
            <input onChange={this.props.onChangeHandler} type="search" value={this.props.search} placeholder="Search for article"/>
            <button type="submit">Search</button>
        </form>
        {map}
    </div>
  );
}
}


export default Search;
