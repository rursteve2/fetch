import React, { Component } from 'react';

class SingleArticle extends Component {
  render() {
    const { article } = this.props;
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  );
}
}

export default SingleArticle;
