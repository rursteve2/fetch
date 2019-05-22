import React, { Component } from 'react';
import Subscribe from './Subscribe';
import './Footer.css';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      hide: false,
      valid: false
    };
  }

  submitSubscribe = (e) => {
    e.preventDefault();
    this.setState({
      hide: true
    })
    alert('did the thing');
  }

  render() {
    return (
      <footer>
        {this.state.hide ? null : <Subscribe submitSubscribe={this.submitSubscribe}/>}
        <div className="footer-bottom">
          <p>Fetch &#169; 2019</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
