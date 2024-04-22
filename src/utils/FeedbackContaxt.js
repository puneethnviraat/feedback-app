import { createContext, useState } from 'react';
import reviewsData from './data';
import { v4 as uuidv4 } from 'uuid';
const FeedbackContaxt = createContext();
export const FeedbackProvider = ({ children }) => {
  const [reviews, setReviews] = useState(reviewsData);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //update feedback item

  const updateFeedback = (id, updItem) => {
    setReviews(
      reviews.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  //set item to updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setReviews([newFeedback, ...reviews]);
  };

  //delete feedback
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setReviews(reviews.filter((item) => item.id !== id));
    }
  };
  return (
    <FeedbackContaxt.Provider
      value={{
        reviews,
        handleDelete,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContaxt.Provider>
  );
};
export default FeedbackContaxt;
