import React, { Component } from 'react';
import style from './style.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () =>
    (this.state.good / this.countTotalFeedback()) * 100;
  roundPercentage = () => this.countPositiveFeedbackPercentage().toFixed(0);

  handleClickGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleClickNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleClickBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <div className={style.wrapper}>
        <h2 className={style.title}>Please leave feedback</h2>
        <div className={style.buttons}>
          <button className={style.button} onClick={this.handleClickGood}>
            Good
          </button>
          <button className={style.button} onClick={this.handleClickNeutral}>
            Neutral
          </button>
          <button className={style.button} onClick={this.handleClickBad}>
            Bad
          </button>
        </div>

        <h2 className={style.title}>Statistics</h2>
        <p className={style.statItem}>Good: {this.state.good}</p>
        <p className={style.statItem}>Neutral: {this.state.neutral}</p>
        <p className={style.statItem}>Bad: {this.state.bad}</p>
        <p className={style.statItem}>Total: {this.countTotalFeedback()}</p>
        <p className={style.statItem}>
          Positive feedback: {this.state.good ? this.roundPercentage() : 0}%
        </p>
      </div>
    );
  }
}

export default Feedback;
