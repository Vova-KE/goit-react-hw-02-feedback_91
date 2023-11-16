import React from 'react';
import style from './style.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.buttons}>
      {options.map(option => (
        <button key={option} className={style.button} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
      {/* <button className={style.button} onClick={this.handleClickGood}>
        Good
      </button>
      <button className={style.button} onClick={this.handleClickNeutral}>
        Neutral
      </button>
      <button className={style.button} onClick={this.handleClickBad}>
        Bad
      </button> */}
    </div>
  );
};

export default FeedbackOptions;
