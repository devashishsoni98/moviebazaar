import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetailsPage.css"; 
import Header from "../../common/header"

const MovieDetailsPage = () => {
  const apikey = process.env.REACT_APP_TMDB_API;
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`
        );
        if (response.ok) {
          const data = await response.json();
          setMovieDetails(data);
        } else {
          console.error("Failed to fetch movie details");
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <>
    <Header/>
    <div className="movie-details-container">
      {movieDetails ? (
        <>
          <h1 className="movie-title">{movieDetails.title}</h1>
        <div className="div-one">
          <div>
          
          <div className="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          </div></div>
          <div className="div-two">
          <p className="release-date">Release Date: {movieDetails.release_date}</p>
          <p className="vote-average">Vote Average: {movieDetails.vote_average}</p>
          <p className="runtime">Runtime: {movieDetails.runtime} minutes</p>
          <p className="overview">Overview: {movieDetails.overview}</p></div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default MovieDetailsPage;
