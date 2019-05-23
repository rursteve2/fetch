import React, { Component } from 'react';

class SingleBunny extends Component {
  render() {
    const { bunny } = this.props;
  return (
    <div className="articles">
      <img src={bunny.img}/>
      <div>
      <h1>{bunny.title}</h1>
      <p>{bunny.body}</p>
      </div>
    </div>
  );
}
}

export default SingleBunny;