import React, { Component } from 'react';

function searchingFor(term) {
  return function(x) {
  return x.title.toLowerCase().includes(term.toLowerCase()) || false;
  };
}


class Search extends Component {
  constructor(props){
    super(props);
      this.state = {
        term: ''
      }
  }

  searchHandler = (e) => {
   this.setState({ term: e.target.value });
    console.log(e.target.value);
    }
  
  render() {

    const{term} = this.state


  return (
    <div>
        <form>
          <input type="text" onChange={this.searchHandler} value={this.state.term} />
        </form>
        {this.props.articles.filter(searchingFor(term)).map(article => (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <span>{article.brief}</span>
            <article>{article.body}</article>
            <h1>{article.pet}</h1>
          </div>
        ))}
      </div>   
  );
}
}


export default Search;
