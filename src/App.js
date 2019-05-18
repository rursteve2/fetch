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
        <Route exact path="/" render={() => 
        <div>
          <Search search={this.state.search} onChangeHandler={this.onChangeHandler} />
          <Body/>
        </div>
      }/>
      <Route path="/articles" render={() => <Articles/>}/>
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
