import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import SingleDog from './SingleDog'


class Body extends Component {
  render() {
    return (
      <div className="bodyanimals">
        <Link to="/Cat">
          <img src={require("../assets/indexcat.svg")}/>
        </Link>
        <Link to="/Dog">
          <img src={require("../assets/indexdog.svg")}/>
        </Link>
        <Link to="/Bunny">
          <img src={require("../assets/indexsmallanimals.svg")}/>
        </Link>
      </div>
    );
  }
}

export default Body;
