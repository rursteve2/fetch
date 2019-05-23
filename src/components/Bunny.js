import React, { Component } from 'react';
import SingleBunny from './SingleBunny';

class Bunny extends Component {
  render() {

  return (
    <div>
      <h1>Bunnies!</h1>
      { this.props.bunnies.map((bunny, index) => <SingleBunny bunny={bunny} />) }
    </div>
  );
}
}

export default Bunny;