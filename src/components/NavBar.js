import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

class NavBar extends Component {
  render() {

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
}

export default NavBar;
