// import React from 'react'
// import { Rating } from '@mui/material'

// const MyRating = () => {
//   return (
//     <div>
//   <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
//   </div>
//   )
// }

// export default MyRating

import React from 'react';
import { Rating } from '@mui/material';

const MyRating = ({ value }) => {
  return (
    <div>
      <Rating name="half-rating-read" value={value} precision={0.5} readOnly />
    </div>
  );
};

export default MyRating;
