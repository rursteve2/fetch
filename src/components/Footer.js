import React, { Component } from 'react';
import Subscribe from './Subscribe';
import './Footer.css';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      hide: false
    };
  }

  submitSubscribe = (e) => {
    e.preventDefault();
    this.setState({
      hide: true
    });
    alert('did the thing');
  }

  render() {
    return (
      <footer>
        {this.state.hide ? null : <Subscribe submitSubscribe={this.submitSubscribe}/>}
        <div className="social-container">
          <div className="social fb"></div>
          <div className="social tw"></div>
          <div className="social pn"></div>
          <div className="social ig"></div>
        </div>
        <div className="footer-bottom">
          <p>&#169; 2019 Fetch</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
