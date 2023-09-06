import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
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
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;