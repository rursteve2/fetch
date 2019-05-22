import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Search from './components/Search'
import Body from './components/Body'
import Forum from './components/Forum'
import Footer from './components/Footer'
import articles from './articles'
import Categories from './components/Categories'



import Articles from './components/Articles'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
constructor() {
  super()
  this.state = {
    search: "",
    articles: articles,
    dogs: [],
    cats: [],
    bunnies: []
  }
}

dataSplit = async() => {
   const dogType = this.state.articles.filter((animal) => {
     return animal.pet === 'dog';
   })
   const catType = this.state.articles.filter((animal) => {
     return animal.pet === 'cat';
   })
   const bunnyType = this.state.articles.filter((animal) => {
     return animal.pet === 'bunny';
   })
   await this.setState({ 
     dogs: dogType,
     cats: catType,
     bunnies: bunnyType     
   })
       console.log(this.state)
}

 componentDidMount(){
     this.dataSplit()
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
      <Categories
      dogs={this.state.dogs}
      cats={this.state.cats}
      bunnies={this.state.bunnies}
      />
        <Route exact path="/" render={() =>
        <div>
          <Search search={this.state.search} onChangeHandler={this.onChangeHandler} />
          <Body/>
        </div>
      }/>
      <Route path="/articles" render={() => <Articles/>}/>
      <Route path="/forums" render={() => <Forum/>}/>
      </Switch>
      <Footer/>
    </div>
  );
}
}

export default App;
