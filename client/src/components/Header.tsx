import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('query');
    if (queryParam) {
      setQuery(queryParam);
    }
  }, [location.search]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <header className="header">
      <Link to="/" className="logo">Movie Database</Link>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </header>
  );
};

export default Header;