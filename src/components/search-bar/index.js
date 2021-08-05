import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ handleSubmit, handleSearchInputChanges, searchValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="btn"
          name="name"
          placeholder="Type text"
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input type="submit" className="bg-warning" value="search" />
      </form>
    </>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.any.isRequired,
  handleSearchInputChanges: PropTypes.any.isRequired,
  searchValue: PropTypes.any.isRequired,
};

export default SearchBar;
