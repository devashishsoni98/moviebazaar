import React, { useEffect, useState } from "react";
import Footer from "../common/footer";
import "./HomePage.css";
// import MultiActionAreaCard from "./Cards/card";
import Header from "../common/header";
import ActionAreaCard from "./Cards/card";
import ActionAreaCard2 from "./Cards/card2";
import { Paper } from "@mui/material";
import axios from "axios";

const HomePage = () => {
    const [movieData, setMovieData] = useState();

  const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': 'b6eeaa45eemsh70c723eebd55b41p10f430jsnf715937a4f87',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };

    async function getMovieData (){
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setMovieData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(()=>{
      getMovieData()
    },[])

  return (
    <div className="body">
      <Header />
      <main>
        <h1 className="heading-one">Featured Movies</h1>
        <img
          src="https://cdn.pixabay.com/photo/2019/02/10/09/51/photographer-3986846_1280.jpg"
          className="imgg"
        />
        <div>
          <div style={{ flexGrow: "1" }}>
            <ActionAreaCard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
