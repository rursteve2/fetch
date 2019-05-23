import React, { Component } from 'react';
import ArticlePreview from './ArticlePreview';

class Dog extends Component {
  render() {
  return (
    <div>
      <h1>Dogs!</h1>
      { this.props.dogs.map((dog, index) => <ArticlePreview article={dog} />) }
    </div>
  );
}
}

export default Dog;
