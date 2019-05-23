import React, { Component } from 'react';
import ArticlePreview from './ArticlePreview';

class Bunny extends Component {
  render() {
  return (
    <div>
      <h1>Bunnies!</h1>
      { this.props.bunnies.map((bunny, index) => <ArticlePreview article={bunny} key={index} />) }
    </div>
  );
}
}

export default Bunny;
