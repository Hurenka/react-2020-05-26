import React from 'react';

import Menu from './menu';
import Review from './review';
import Rate from './rate';

export default function Restaurant({ restaurant: { menu, reviews } }) {
  const averageRating =
    reviews.reduce((sum, { rating }) => sum + rating, 0) / reviews.length;
  return (
    <div>
      <Rate rating={averageRating.toFixed(0)} />
      <Menu menu={menu} />
      <Review reviews={reviews} />
    </div>
  );
}
