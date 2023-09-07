import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetailsPage.css"; 
import Header from "../../common/header";
import {VscDebugBreakpointLog}  from 'react-icons/vsc';
import { easeIn, easeInOut, motion } from "framer-motion";

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
    <motion.div 
    initial={{ y: 25, opacity:0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, ease: easeInOut }}
    className="movie-details-container">
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
          <p className="release-date"><VscDebugBreakpointLog/> Release Date: <span className="col">{movieDetails.release_date}</span></p>
          <p className="vote-average"><VscDebugBreakpointLog/> Vote Average: <span className="col">{movieDetails.vote_average}</span></p>
          <p className="runtime"><VscDebugBreakpointLog/> Runtime: <span className="col">{movieDetails.runtime} minutes</span></p>
          <p className="overview"><VscDebugBreakpointLog/> Overview: <br /> <span className="col space">{movieDetails.overview}</span></p></div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </motion.div>
    </>
  );
};

export default MovieDetailsPage;
