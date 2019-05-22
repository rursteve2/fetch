import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.showArticles = this.showArticles.bind(this);
  }

  componentDidMount() {
    this.props.resetSubmit();
  }

  showArticles() {
    let articles = this.props.articles.map((article, index) => {
      return (
        <div className="articles" key={index}>
          <h1>{article.title}</h1>
          <p>{article.brief}</p>
        </div>
      )
    })
    return articles
  }

  noResults() {
    return (
      <h3>Oops, we weren't able to fetch information for that!</h3>
    )
  }

  render() {
    return (
      <div>
        {this.props.articles.length ? this.showArticles() : this.noResults()}
      </div>
    )
  }
}

export default Results;