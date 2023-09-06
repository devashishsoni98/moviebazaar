import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import MyRating from "../Rating";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./card.css";

export default function ActionAreaCard({ movies }) {
  return (
    <div className="row container">
      {movies.map((movie, index) => (
        <div
          className="card-s col-lg-4"
          key={movie.id}
          style={{ padding: "2% 3%", textAlign: "-webkit-center" }}
        >
        
          <Link to={`/movie/${movie.id}`} className="link-c">
            <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100%"
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_title}
                  style={{ width: "100%" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movie.original_title}
                  </Typography>
                  <MyRating value={Number(movie.vote_average) / 2} />
                  <Typography variant="body2" color="textSecondary" className="rate">
                    {Number(movie.vote_average / 2).toFixed(1)} / 5
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}


