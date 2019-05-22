import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Body extends Component {
  render() {
    return (
      <div className="bodyanimals">
        <Link to="#">
          <img src={require("../assets/indexcat.svg")}/>
        </Link>
        <Link to="#">
          <img src={require("../assets/indexdog.svg")}/>
        </Link>
        <Link to="#">
          <img src={require("../assets/indexsmallanimals.svg")}/>
        </Link>
      </div>
    );
  }
}

export default Body;
