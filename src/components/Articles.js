import React, { Component } from 'react';
import articles from '../articles';
import SingleArticle from './SingleArticle';

class Articles extends Component {
  render() {

  return (
    <div className="allarticles">
      <h1>Articles!</h1>
      { articles.map((article, index) => <SingleArticle article={article} />) }
    </div>
  );
}
}

export default Articles;
