import React, { Component } from 'react';
import ArticlePreview from './ArticlePreview';

class Cat extends Component {
  render() {

  return (
    <div>
      <h1>Cats!</h1>
      { this.props.cats.map((cat, index) => <ArticlePreview article={cat} key={index} />) }
    </div>
  );
}
}

export default Cat;
