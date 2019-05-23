import React, { Component } from 'react';
import articles from '../articles';
import ArticlePreview from './ArticlePreview';

class Articles extends Component {
  render() {

  return (
    <div className="allarticles">
      <h1>Articles!</h1>
      { articles.map((article, index) => {
        return (
          <ArticlePreview key={index} article={article} />
        )
      }) }
    </div>
  );
}
}

export default Articles;
