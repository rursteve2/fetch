import React, { Component } from 'react';
import SingleDog from './SingleDog';

class Dog extends Component {
  render() {

  return (
    <div>
      <h1>Dogs!</h1>
      { this.props.dogs.map((dog, index) => <SingleDog dog={dog} />) }
    </div>
  );
}
}

export default Dog;