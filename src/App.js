import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Search from './components/Search'
import Body from './components/Body'
import Footer from './components/Footer'

class App extends Component {
  render() {

  return (
    <div className="App">
      <NavBar/>
        <Search/>
        <Body/>
        <Footer/>
    </div>
  );
}
}

export default App;
