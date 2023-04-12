import React from "react";

function Search({ handleSearch, search }) {

  function handleChange(e) {
    handleSearch(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        onChange={handleChange}
        value={search}
        type="text"
        id="search"
        placeholder="Type a name to search..."
      />
    </div>
  );
}

export default Search;
