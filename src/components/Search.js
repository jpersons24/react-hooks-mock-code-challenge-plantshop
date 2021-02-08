import React, { useSearch } from "react";

function Search({ searchInput, onSearchChange}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchInput}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
