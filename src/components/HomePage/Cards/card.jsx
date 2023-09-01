import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import MyRating from "../Rating";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


export default function ActionAreaCard() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getMovieData();
  }, []);

    const options = {
      method: 'GET',
      url: 'https://watchmode.p.rapidapi.com/autocomplete-search/',
      params: {
        search_value: 'Breaking Bad',
        search_type: '1'
      },
      headers: {
        'X-RapidAPI-Key': 'b6eeaa45eemsh70c723eebd55b41p10f430jsnf715937a4f87',
        'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
      }
    };

    async function getMovieData(){
      try {
        const response = await axios.request(options);
        console.log(response.data)
        setMovieData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  return (
    <div className="row container">
      {movieData.results &&
        movieData.results.map((movie, index) => (
          <div className="card-s col-lg-4" key={movie.id} style={{ padding: "2% 3%", textAlign:"-webkit-center", }}>
            <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
              <Link to={`/movie/${movie.id}`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="290"
                    image={movie.image_url} 
                    alt={movie.name}
                    style={{ width: "100%" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.name}
                    </Typography>
                    <MyRating value={Number(movie.relevance) / 100} />
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </div>
        ))}
    </div>
  );
}

