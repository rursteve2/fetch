import React, { Component } from 'react';

class SingleCat extends Component {
  render() {
    const { cat } = this.props;
  return (
    <div className="articles">
      <img src={cat.img}/>
      <div>
      <h1>{cat.title}</h1>
      <p>{cat.body}</p>
      </div>
    </div>
  );
}
}

export default SingleCat;