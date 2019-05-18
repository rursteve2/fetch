import React, { Component } from 'react';
import articles from '../articles'
import { Redirect } from 'react-router-dom'

class Search extends Component {
constructor() {
    super()
    this.state = {
        submitted: false
    }
}

    onSubmit = (e) => {
        e.preventDefault()
        let allArticles = articles.filter((article) => 
          article.pet === this.props.search
        )
        console.log(allArticles)
        this.setState({
            submitted: true
        })
        return allArticles
      }



  render() {
      let afterSubmit = this.state.submitted ? <Redirect to="/articles" /> : null
  return (
    <div>
        {afterSubmit}
        <form onSubmit={e => this.onSubmit(e)}>
            <input onChange={this.props.onChangeHandler} type="search" value={this.props.search} placeholder="Search for article"/>
            <button type="submit">Search</button>
        </form>
    </div>
  );
}
}

export default Search;
