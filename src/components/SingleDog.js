import React, { Component } from 'react';

class SingleDog extends Component {
  render() {
    const { dog } = this.props;
  return (
    <div className="articles">
      <img src={dog.img}/>
      <div>
      <h1>{dog.title}</h1>
      <p>{dog.body}</p>
      </div>
    </div>
  );
}
}

export default SingleDog;