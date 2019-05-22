import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Search from './components/Search'
import Body from './components/Body'
import Footer from './components/Footer'
import Results from './components/Results'
import Articles from './components/Articles'
import { Route, Switch } from 'react-router-dom';
import articles from './articles.js';

class App extends Component {
constructor() {
  super()
  this.state = {
    search: "",
    filteredArticles: [],
    submitted: false,
    articles: [],
    dogs: [],
    cats: [],
    bunnies: []
  }
  this.resetSubmit = this.resetSubmit.bind(this);
}
//   dataGrabber = async() => {
//   const newData = data.map((articles) => {
//     return articles
//   })
//   await this.setState({ articles: newData })
//     console.log(this.state)
// }

// dataSplit = async() => {
//   const dogType = data.filter((animal) => {
//     return animal.pet === 'dog';
//   })
//   const catType = data.filter((animal) => {
//     return animal.pet === 'cat';
//   })
//   const bunnyType = data.filter((animal) => {
//     return animal.pet === 'bunny';
//   })
//   this.setState({
//     dogs: dogType,
//     cats: catType,
//     bunnies: bunnyType
//   })
//       console.log(this.state)
// }

//   componentDidMount(){
//     this.dataGrabber();
//     this.dataSplit()
//   }

  onChangeHandler = (e) => {
    let { value } = e.target;
    this.setState({ search: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    let allArticles = articles.filter((article) =>
      article.pet.includes(this.state.search) || article.pet+'s' === this.state.search
    )
    console.log(allArticles)
    this.setState({
      filteredArticles: allArticles,
      submitted: true
    })
    return allArticles
  }

  resetSubmit() {
    this.setState({
      submitted: false
    })
  }

  render() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" render={() =>
        <div>
          <Search
            search={this.state.search}
            submitted={this.state.submitted}
            onSubmit={this.onSubmit}
            onChangeHandler={this.onChangeHandler} filteredArticles={this.state.filteredArticles}
          />
          <Body/>
        </div>
      }/>
      <Route path="/articles" render={() => <Articles/>}/>
      <Route path="/search-results" render={() => <div>
        <Search
          search={this.state.search}
          submitted={this.state.submitted}
          onSubmit={this.onSubmit}
          onChangeHandler={this.onChangeHandler} filteredArticles={this.state.filteredArticles}
        />
        <Results
        articles={this.state.filteredArticles}
        resetSubmit={this.resetSubmit} />
        </div> }/>
      </Switch>
      <Footer/>
    </div>
  );
}
}

export default App;
