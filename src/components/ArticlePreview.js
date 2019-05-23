import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticlePreview extends Component {
  render() {
    const { article } = this.props;
    return (
      <div className="articles">
        <img src={article.img} alt={article.title}/>
        <div>
        <Link to={`article/${article.id}`} onClick={() => this.props.selectArticle(article.id)} className="h1-link"><h1>{article.title}</h1></Link>
        <p>{article.brief}... <Link to={`article/${article.id}`} onClick={() => this.props.selectArticle(article.id)} className="link">Read more</Link></p>
        </div>
      </div>
    )
  }
}

export default ArticlePreview
