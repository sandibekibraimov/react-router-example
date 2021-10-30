import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';

import { useFetch } from '../hooks/useFetch';

const Home = () => {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch('http://localhost:3000/articles');

  return (
    <div className='home'>
      <h2>Articles</h2>
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className='card'>
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <Link to={`/articles/${article.id}`}>Read more...</Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
