import React, { Component } from 'react';
import Forum from './SingleForum'
import forums from '../forums'


class SingleForum extends Component {
  render() {
    const { forum } = this.props;
  return (
    <div className="forums">
      <h1>{forum.title}</h1>
      <p>{forum.body}</p>
      <span>{forum.brief}</span>
    </div>
  );
}
}

export default SingleForum;