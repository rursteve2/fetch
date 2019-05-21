import React, { Component } from 'react';
import Forum from './SingleForum'
import forums from '../forums'


class SingleForum extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggle: false,
      comment: '',
      comments: [], //this state is absolutely useless. I could hold each comments in variables and assign them to this array but a backend is needed to implement this
      count: 1
    }
  }

  handleChange = async(e) => {
    const element = e.target;
    const name = element.name;
    const value = element.value;
    await this.setState({
        [name]: value
    });
}

handleSubmit = async(e) => {
  e.preventDefault();
  alert('this is where we would have posted a comment lol backend anybody?')
  window.location.reload('/');
}

  handleClick = async(e) => {
    e.preventDefault();
    await this.setState({
      toggle: true,
      count: +1
    })
  }
  render() {
    const { forum } = this.props;
    if(this.state.toggle === false)
  return (
    <div className="forums">
      <h1>{forum.title}</h1>
      <p>{forum.body}</p>
      <span>{forum.brief}</span>
      <button onClick={this.handleClick}>Comment</button>
    </div>
  );
  else
  return(
    <form className="Comment-form" onSubmit={this.handleSubmit}>
       <h1>{forum.title}</h1>
    <label> Your Text </label>
    <input
        type='input'
        placeholder='Comment'
        id='comment'
        name='comment'
        value={this.state.comment}
        onChange={this.handleChange}
    />
    <p>{this.state.count} Comments</p>
      <button onClick={this.handleSubmit}>Submit</button>
      </form>
  )
}
}

export default SingleForum;