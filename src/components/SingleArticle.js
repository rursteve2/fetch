import React, { Component } from 'react';

class SingleArticle extends Component {
  render() {
    const { article } = this.props;
  return (
    <div className="articles">
      <img src={article.img}/>
      <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      </div>
    </div>
  );
}
}

export default SingleArticle;
