import React, { Component } from 'react';
import SingleCat from './SingleCat';

class Dog extends Component {
  render() {

  return (
    <div>
      <h1>Cats!</h1>
      { this.props.cats.map((cat, index) => <SingleCat cat={cat} />) }
    </div>
  );
}
}

export default Dog;