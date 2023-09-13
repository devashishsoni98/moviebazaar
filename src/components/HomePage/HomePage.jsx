import React, { useState, useEffect } from "react";
import Footer from "../common/footer";
import "./HomePage.css";
import Header from "../common/header";
import ActionAreaCard from "./Cards/card";

const HomePage = () => {
  const apikey = process.env.REACT_APP_TMDB_API;
  const [searchResults, setSearchResults] = useState([]);
  const [unfilteredResults, setUnfilteredResults] = useState([]);
  const [defaultMovies, setDefaultMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [sortBy, setSortBy] = useState("default");

  const handleSearch = (searchTerm) => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchTerm}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log("Search results:", json);
        const filteredResults = json.results.filter(
          (movie) => movie.poster_path
        );
        setSearchResults(filteredResults);
        setUnfilteredResults(filteredResults);
        setLoading(false);
        setIsHomePage(false);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setLoading(false);
        setIsHomePage(false);
      });
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}`)
      .then((res) => res.json())
      .then((json) => setDefaultMovies(json.results))
      .catch((error) => console.error("Error fetching default movies:", error));
  }, []);

  const handleHomeClick = () => {
    setSearchResults([]);
    setIsHomePage(true);
  };

  const handleSortChange = (criteria) => {
    setSortBy(criteria);
    if (criteria === "rank") {
      const sortedResults = [...searchResults].sort(
        (a, b) => b.vote_average - a.vote_average
      );
      setSearchResults(sortedResults);
    } else if (criteria === "popularity") {
      const sortedResults = [...searchResults].sort(
        (a, b) => b.popularity - a.popularity
      );
      setSearchResults(sortedResults);
    } else if (criteria === "releaseDate") {
      const sortedResults = [...searchResults].sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
      setSearchResults(sortedResults);
    } else if (criteria === "default") {
      setSearchResults(unfilteredResults);
    }
  };

  return (
    <div className="body">
      <Header onSearch={handleSearch} onHomeClick={handleHomeClick} />
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {isHomePage ? (
              <div>
                <h1 className="heading-one">Featured Movies</h1>
                <img
                  src="https://cdn.pixabay.com/photo/2019/02/10/09/51/photographer-3986846_1280.jpg"
                  className="imgg"
                  alt="banner"
                />
                <div
                  className="d"
                  style={{
                    flexGrow: "1",
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginTop: "3%",
                  }}
                >
                  <ActionAreaCard movies={defaultMovies} />
                </div>
              </div>
            ) : (
              <>
                <div className="sort-dropdown">
                  <label htmlFor="sort-dropdown" className="labell">Sort by:</label>
                  <select
                    className="select-sort"
                    id="sort-dropdown"
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="popularity">Popularity</option>
                    <option value="rank">Rank</option>
                    <option value="releaseDate">Release Date</option>
                  </select>
                </div>
                <div
                  className="d"
                  style={{
                    flexGrow: "1",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <ActionAreaCard movies={searchResults} />
                </div>
              </>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;