import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Search from './components/Search'
import Body from './components/Body'
import Footer from './components/Footer'
import data from './data.js'

class App extends Component {
  constructor(){
    super()
    this.state ={
      articles: [],
      dogs: {}
    }
  }

  dataGrabber = async() => {
    const newData = data.map((articles) => { 
      return articles
    })  
    await this.setState({ articles: newData })
      console.log(this.state)   
  }

  dataSplit = async() => {
    const dogType = data.filter((animal) => {
      return animal.pet === 'dog';
  })
      this.setState({ dogs: dogType })
      console.log(this.state)
  }

  componentDidMount(){
    this.dataGrabber();
    this.dataSplit()
  }

  render() {
  return (
    <div className="App">
      <NavBar/>
        <Search/>
        <Body
        articles={this.state.articles}
        />
        <Footer/>
    </div>
  );
}
}

export default App;
