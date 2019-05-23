import React from 'react';

export default function SingleArticle(props) {
  const { article } = props;
  return (
    <div className="one-article">
      <img src={article.img} alt={article.title}/>
      <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      </div>
    </div>
  )
}
