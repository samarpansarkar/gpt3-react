import React from 'react'
import './article.css'

const Article = ({ imgUrl, heading }) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt="blog Image" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <p>Sep 26, 2021</p>
        <h3>{heading}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  )
};

export default  Article;
