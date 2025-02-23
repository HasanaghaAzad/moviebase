import React from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from '../components/MovieList';
import Header from '../components/Header';

const useQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage: React.FC = () => {
  const queryParams = useQueryParams();
  const query = queryParams.get('query');

  return (
    <>
      <Header />
      <div className="container">
        <h2>Search results for "{query}"</h2>
        <MovieList />
      </div>
    </>
  );
};

export default SearchPage;