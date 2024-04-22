import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import React, { useContext } from 'react';
import FeedbackContaxt from '../utils/FeedbackContaxt';

const FeedbackItem = ({ review }) => {
  const { handleDelete, editFeedback } = useContext(FeedbackContaxt);
  return (
    <div className="card">
      <div className="numDisplay">{review.rating}</div>
      <div className="txtDisplay">{review.message}</div>
      <div className="edit-Icons">
        <button onClick={() => editFeedback(review)}>
          <FaEdit className="icon" />
        </button>
        <button onClick={() => handleDelete(review.id)}>
          <MdDeleteForever className="icon" />
        </button>
      </div>
    </div>
  );
};

export default FeedbackItem;
