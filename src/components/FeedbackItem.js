import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const FeedbackItem = ({ review, deleteTeview }) => {
  return (
    <div className="card">
      <div className="numDisplay">{review.rating}</div>
      <div className="txtDisplay">{review.message}</div>
      <div className="edit-Icons">
        <FaEdit className="icon" />
        <button onClick={() => deleteTeview(review.id)}>
          <MdDeleteForever className="icon" />
        </button>
      </div>
    </div>
  );
};

export default FeedbackItem;
