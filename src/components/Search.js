import React, { Component } from 'react';
import articles from '../articles'

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
          article.pet.includes(this.props.search) || article.pet+'s' === this.props.search
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
              <div className="articles">
              <h1>{article.title}</h1>
              <p>{article.body}</p>
              </div>
          )
      }) : null
  return (
    <div>
      <form onChange={e => this.onSubmit(e)}>
        <h1>Fetch the information you need to provide the best care for yor pet!</h1>
        <input onChange={this.props.onChangeHandler} type="search" value={this.props.search} placeholder="Search for article"/>
        <button type="submit">Search</button>
      </form>
      {map}
    </div>
  );
}
}


export default Search;
