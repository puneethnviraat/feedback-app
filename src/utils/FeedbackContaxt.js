import { createContext, useState, useEffect } from 'react';
import reviewsData from './data';

const FeedbackContaxt = createContext();

export const FeedbackProvider = ({ children }) => {
  const [reviews, setReviews] = useState(reviewsData);
  const [isLoding, setLoding] = useState(true);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //fetch reviews
  const fetchFeedback = async () => {
    const response = await fetch(`/reviewsData?_sort=id`);
    const data = await response.json();
    setReviews(data);
    setLoding(false);
  };
  //update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/reviewsData/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    setReviews(
      reviews.map((item) => (item.id === id ? { ...item, ...data } : item))
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
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/reviewsData', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setReviews([data, ...reviews]);
  };

  //delete feedback
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      await fetch(`/reviewsData/${id}`, { method: 'DELETE' });
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
        isLoding,
      }}
    >
      {children}
    </FeedbackContaxt.Provider>
  );
};
export default FeedbackContaxt;
