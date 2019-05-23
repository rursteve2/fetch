import React from 'react';

export default function SingleArticle(props) {
  const { article } = props;
  return (
    <div className="one-article">
      <h1>{article.title}</h1>
      <img src={article.img} alt={article.title}/>
      <p>{article.body}</p>
    </div>
  )
}
