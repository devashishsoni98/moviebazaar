import React, { useState } from "react";
import "./Searchbar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      alert("Please enter a Movie Name");
    } else {
      onSearch(searchTerm);
      setSearchTerm("");
      onClose();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="s-container">
      <input
        className="input-box"
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className="search-btn" onClick={handleSearch}>
        <FaSearch className="icon" />
      </button>
    </div>
  );
};

export default SearchBar;
