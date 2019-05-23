import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Search from './components/Search'
import Body from './components/Body'
import Footer from './components/Footer'
import Results from './components/Results'
import articles from './articles'
import Categories from './components/Categories'
import Articles from './components/Articles'
import { Route, Switch, withRouter } from 'react-router-dom';
import About from './components/About';
import Forum from './components/Forum';
import SingleArticle from './components/SingleArticle';

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
    bunnies: [],
    selectedArticle: ''
  }
  this.resetSubmit = this.resetSubmit.bind(this);
  this.selectArticle = this.selectArticle.bind(this);
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

  selectArticle(id) {
    this.props.history.replace(`/${id}`);
  }

  render() {
  return (
    <div className="App">
      <NavBar/>
      <Categories
      dogs={this.state.dogs}
      cats={this.state.cats}
      bunnies={this.state.bunnies}
      />
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
        <Route path="/articles" render={() => <Articles selectArticle={this.selectArticle} />}/>
        <Route path="/search-results" render={() => <div>
          <Search
            search={this.state.search}
            submitted={this.state.submitted}
            onSubmit={this.onSubmit}
            onChangeHandler={this.onChangeHandler} filteredArticles={this.state.filteredArticles}
          />
          <Results
          articles={this.state.filteredArticles}
          resetSubmit={this.resetSubmit} selectArticle={this.selectArticle} />
          </div> }/>
        <Route path="/about" render={() => <About/>} />
        <Route path="/forum" render={() => <Forum/>} />
        <Route path="/article/:id" render={({match}) => <SingleArticle article={articles[match.params.id]} />} />
      </Switch>
      <Footer/>
    </div>
  );
}
}

export default withRouter(App);
