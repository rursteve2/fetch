import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Body extends Component {
  render() {
    return (
      <div className="bodyanimals">
        <Link to="/cat">
          <img src={require("../assets/indexcat.svg")} alt="cats"/>
        </Link>
        <Link to="/dog">
          <img src={require("../assets/indexdog.svg")} alt="dogs"/>
        </Link>
        <Link to="/bunny">
          <img src={require("../assets/indexsmallanimals.svg")} alt="small animals"/>
        </Link>
      </div>
    );
  }
}

export default Body;
