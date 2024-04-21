import React from 'react';

const FeedbackStats = ({ reviews }) => {
  const Reviews = reviews.length;
  const AvgRatings =
    reviews.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / reviews.length;
  return (
    <div className="reviewStatistics">
      <p>Reviews: {Reviews}</p>
      <p>Avg ratings:{isNaN(AvgRatings) ? 0 : AvgRatings.toFixed(1)} </p>
    </div>
  );
};

export default FeedbackStats;
