import React, { Component } from 'react';
import forums from '../forums'
import SingleForum from './SingleForum'

class Forum extends Component {
  constructor(props){
    super(props)
    this.state = {
      forums: [],
      that: ''
    }
  }

  dataRender = (e) => {
    console.log(forums)
    this.setState({
      forums: forums
      })
  }

  render() {
    return (
      <div>
        { forums.map((forum, index) => <SingleForum forum={forum} key={index} />) }                
      </div>
    );
  }
}

export default Forum;
