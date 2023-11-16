import React from 'react';
import style from './style.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  roundPercentage,
}) => {
  //   countTotalFeedback = () =>
  //     this.state.good + this.state.neutral + this.state.bad;
  //   countPositiveFeedbackPercentage = () =>
  //     (this.state.good / this.countTotalFeedback()) * 100;
  //   roundPercentage = () => this.countPositiveFeedbackPercentage().toFixed(0);

  return (
    <>
      <h2 className={style.title}>Statistics</h2>
      <p className={style.statItem}>Good: {good}</p>
      <p className={style.statItem}>Neutral: {neutral}</p>
      <p className={style.statItem}>Bad: {bad}</p>
      <p className={style.statItem}>Total: {countTotalFeedback}</p>
      <p className={style.statItem}>
        Positive feedback: {good ? roundPercentage : 0}%
      </p>{' '}
    </>
  );
};

export default Statistics;
