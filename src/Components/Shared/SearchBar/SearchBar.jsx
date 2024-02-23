import React from 'react';

import './searchBar.css';

const SearchBar = ({ searchOption, setSearchOption }) => {
  return (
    <input
      type="text"
      placeholder="&#xF002; Search your trip"
      className="search-input"
      value={searchOption}
      onChange={(e) => setSearchOption(e.target.value)}
    />
  );
};

export default SearchBar;
