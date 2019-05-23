import React, { Component } from 'react';
import ArticlePreview from './ArticlePreview'

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
        <ArticlePreview article={article} key={index} />
      )
    })
    return articles
  }

  noResults() {
    return (
      <h3>Oops, we weren't able to find any resources for that!</h3>
    )
  }

  render() {
    return (
      <div>
        {this.props.articles.length? <h4 className="results">Search Results: {this.props.search}</h4> : null }
        {this.props.articles.length ? this.showArticles() : this.noResults()}
      </div>
    )
  }
}

export default Results;
