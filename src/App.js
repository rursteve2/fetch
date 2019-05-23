import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Search from './components/Search'
import SingleDog from './components/SingleDog'
import SingleCat from './components/SingleCat'
import SingleBunny from './components/SingleBunny'
import Body from './components/Body'
import Footer from './components/Footer'
import Results from './components/Results'
import articles from './articles'
import Categories from './components/Categories'
import Articles from './components/Articles'
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Forum from './components/Forum';
import Dog from './components//Dog'
import Bunny from './components//Bunny'
import Cat from './components/Cat'

class App extends Component {
constructor() {
  super()
  this.state = {
    search: "",
    filteredArticles: [],
    submitted: false,
    articles: articles,
    dogs: [],
    cats: [],
    bunnies: []
  }
  this.resetSubmit = this.resetSubmit.bind(this);
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
}

 componentDidMount(){
     this.dataSplit()
  }

  onChangeHandler = (e) => {
    let { value } = e.target;
    this.setState({ search: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    let allArticles = articles.filter((article) =>
      article.pet.includes(this.state.search) || article.pet+'s' === this.state.search
    )
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
      <Search
            search={this.state.search}
            submitted={this.state.submitted}
            onSubmit={this.onSubmit}
            onChangeHandler={this.onChangeHandler} filteredArticles={this.state.filteredArticles}
          />
      <Switch>
        <Route exact path="/" render={() =>
          <Body
          dogs={this.props.dogs}
          />
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
          <Route path="/Dog" render={() => <Dog
          dogs={this.state.dogs}
          />} />
          <Route path="/Cat" render={() => <Cat
          cats={this.state.cats}
          />} />
          <Route path="/Bunny" render={() => <Bunny
          bunnies={this.state.bunnies}
          />} />
        <Route path="/about" render={() => <About/>} />
        <Route path="/forum" render={() => <Forum/>} />
      </Switch>
      <Footer/>
    </div>
  );
}
}

export default App;
