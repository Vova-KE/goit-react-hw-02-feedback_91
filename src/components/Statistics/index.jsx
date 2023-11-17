import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className={style.title}>Statistics</h2>
      <p className={style.statItem}>Good: {good}</p>
      <p className={style.statItem}>Neutral: {neutral}</p>
      <p className={style.statItem}>Bad: {bad}</p>
      <p className={style.statItem}>Total: {total}</p>
      <p className={style.statItem}>
        Positive feedback: {good ? positivePercentage : 0}%
      </p>{' '}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
