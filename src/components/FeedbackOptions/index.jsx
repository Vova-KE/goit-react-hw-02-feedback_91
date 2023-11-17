import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.buttons}>
      {options.map(option => (
        <button
          key={option}
          className={style.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
