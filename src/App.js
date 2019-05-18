import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Search from './components/Search'
import Body from './components/Body'
import Footer from './components/Footer'
import Articles from './components/Articles'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
constructor() {
  super()
  this.state = {
    search: ""
  }
}

  onChangeHandler = (e) => {
    let { value } = e.target;
    this.setState({ search: value });
  }
 
 
  



  render() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route to="/" render={() => 
        <div>
          <Search search={this.state.search} onChangeHandler={this.onChangeHandler} />
          <Body/>
        </div>
      }/>
      <Route to="/articles" render={() => <Articles/>}/>
        <Search 
        search={this.state.search}
        onChangeHandler={this.onChangeHandler}
        />
        <Body/>
      </Switch>
      <Footer/>
    </div>
  );
}
}

export default App;
