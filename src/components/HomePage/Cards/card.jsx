import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import MyRating from "../Rating";
import axios from "axios";
import { Link } from "react-router-dom";


export default function ActionAreaCard() {

const [movieData, setMovieData] = useState();

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'b6eeaa45eemsh70c723eebd55b41p10f430jsnf715937a4f87',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

async function getMovieData(){
  try {
    const response = await axios.request(options);
    console.log(response.data);
    setMovieData(response.data);
  } catch (error) {
    console.error(error);

  }
}

 useEffect(()=>{
  getMovieData();
 }, []);


  return (
    <div className="row container">
      {movieData &&
        movieData.map((movieData, index) => (
          <div className="card-s col-lg-4" style={{ flexGrow: "1", padding: "2% 3%" }}>
            <Card key={index} sx={{ maxWidth: 345, boxShadow: 5 }}>
              <Link to={`/movieData/${movieData.id}`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="290"
                    image={movieData.image}
                    alt={movieData.title}
                    style={{ width: "100%" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movieData.title}
                    </Typography>
                    <MyRating value={Number(movieData.rating) / 2} />
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </div>
        ))}
    </div>
  );
}

