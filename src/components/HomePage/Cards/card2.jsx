// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea} from '@mui/material';
// import MyRating from './Rating';

// export default function ActionAreaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="290"
//           image="https://www.movieposters.com/cdn/shop/files/elio_240x360_crop_center.progressive.jpg?v=1687879262"
//           alt="green iguana" style={{width:"100%"}}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Movie name
//           </Typography>
//           <MyRating/>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }


import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import MyRating from '../Rating';

const movies = [
  {
    name: 'Movie 4',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8F3pX3suerFsiPUTEi70GmxxIE2GTLlI_9VPDz9qvrOZynmaxY0ITPjfW4VByI9dW90&usqp=CAU',
    rating : 3
  },
  {
    name: 'Movie 5',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKUWAwTO-6VtSwo1at5sh3Uj-4hRsK77FUSfWq6i6IszCc-RYFBJDjlb6IlbSqaSIMyc&usqp=CAU',
    rating : 3.5
  },
  {
    name: 'Movie 6',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrjFxgt7k4L-x_4-dotUQodtcGBlto8oOiiw&usqp=CAU',
    rating : 4
  },
  // Add more movies as needed
];

export default function ActionAreaCard2() {
  return (
    <div className='flex-container'>
      {movies.map((movie, index) => (
        <div className="card-s" style={{flexGrow:"1", padding:"2% 3%"}}> 
        <Card key={index} sx={{ maxWidth: 345, boxShadow: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="290"
              image={movie.imageUrl}
              alt={movie.name}
              style={{ width: '100%' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.name}
              </Typography>
              <MyRating value={movie.rating} />
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
      ))}
    </div>
  );
}

