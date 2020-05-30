import React from 'react';
import Rate from './rate';
export default function Review(props) {
  return (
    <div>
      <ul>
        {props.reviews.map((review) => (
          <li key={review.id}>
            <h6>{review.user}</h6>
            <Rate rating={review.rating} />
            <span>{review.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
