import React, { useState } from 'react';
import Card from './Card';
import RatingSelector from './RatingSelector';

const FeedbackForm = ({ handleAdd }) => {
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState('');

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errTextmessage, seterrTextmessage] = useState('');

  const handleTextChange = (e) => {
    if (message === '') {
      seterrTextmessage(null);
      setButtonDisabled(true);
    } else if (message !== '' && message.trim().length <= 10) {
      seterrTextmessage('Review must be at least 10 charecters ');
      setButtonDisabled(true);
    } else {
      seterrTextmessage(null);
      setButtonDisabled(false);
    }
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim().length > 10) {
      const newFeedback = {
        message,
        rating,
      };
      handleAdd(newFeedback);
    }
    setMessage('');
  };
  return (
    <>
      <h3 className="formHeading">How would you rate your service with us?</h3>
      <form className="feedbackForm" onSubmit={handleSubmit}>
        <RatingSelector select={(rating) => setRating(rating)} />
        <input
          value={message}
          type="text"
          placeholder="Write a review"
          onChange={handleTextChange}
        />
        <button className="btn btn-primary" disabled={buttonDisabled}>
          Submit
        </button>
        {errTextmessage && <div className="message">{errTextmessage}</div>}
      </form>
    </>
  );
};

export default FeedbackForm;
