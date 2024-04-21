import React from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
const FeedbackList = ({ reviews, deleteTeview }) => {
  if (!reviews.length) {
    return <p>No reviews</p>;
  }

  return (
    <div>
      <AnimatePresence>
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={review.id}
              review={review}
              deleteTeview={deleteTeview}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div>
  //     {reviews.map((review) => (
  //       <FeedbackItem
  //         key={review.id}
  //         review={review}
  //         deleteTeview={deleteTeview}
  //       />
  //     ))}
  //   </div>
  // );
};

export default FeedbackList;
