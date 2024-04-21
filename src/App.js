import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import Header from './components/Header';
import reviewsData from './utils/data';
import FeedbackList from './components/FeedbackList';
import Card from './components/Card';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
  const [reviews, setReviews] = useState(reviewsData);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setReviews(reviews.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setReviews([newFeedback, ...reviews]);
  };
  return (
    <div className="container">
      <Header />
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats reviews={reviews} />
      <FeedbackList reviews={reviews} deleteTeview={handleDelete} />
    </div>
  );
};
export default App;
