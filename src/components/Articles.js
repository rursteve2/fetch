import React, { Component } from 'react';
import articles from '../articles';
import { Link } from 'react-router-dom';

class Articles extends Component {
  render() {

  return (
    <div className="allarticles">
      <h1>Articles!</h1>
      { articles.map((article, index) => {
        return (
          <div className="articles" key={index}>
            <img src={article.img} alt={article.title}/>
            <div>
            <Link to={`article/${article.id}`} onClick={() => this.props.selectArticle(article.id)}><h1>{article.title}</h1></Link>
            <p>{article.brief}... <Link to={`article/${article.id}`} onClick={() => this.props.selectArticle(article.id)}>Read more</Link></p>
            </div>
          </div>
        )
      }) }
    </div>
  );
}
}

export default Articles;
