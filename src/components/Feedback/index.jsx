import React, { Component } from 'react';
import style from './style.module.css';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';

class Feedback extends Component {
  state = {
    good: this.props.state.good,
    neutral: this.props.state.neutral,
    bad: this.props.state.bad,
  };

  options = Object.keys(this.state);

  handleClick = () => {
    this.setState(prevState => {
      return {
        [this.option]: prevState[this.option] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () =>
    (this.state.good / this.countTotalFeedback()) * 100;
  roundPercentage = () => this.countPositiveFeedbackPercentage().toFixed(0);

  render() {
    return (
      <div className={style.wrapper}>
        {/* <h2 className={style.title}>Please leave feedback</h2> */}
        {/* <div className={style.buttons}>
          <button className={style.button} onClick={this.handleClickGood}>
            Good
          </button>
          <button className={style.button} onClick={this.handleClickNeutral}>
            Neutral
          </button>
          <button className={style.button} onClick={this.handleClickBad}>
            Bad
          </button>
        </div> */}
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.roundPercentage}
          ></Statistics>
        </Section>
        {/* <h2 className={style.title}>Statistics</h2>
        <p className={style.statItem}>Good: {this.state.good}</p>
        <p className={style.statItem}>Neutral: {this.state.neutral}</p>
        <p className={style.statItem}>Bad: {this.state.bad}</p>
        <p className={style.statItem}>Total: {this.countTotalFeedback()}</p>
        <p className={style.statItem}>
          Positive feedback: {this.state.good ? this.roundPercentage() : 0}%
        </p> */}
      </div>
    );
  }
}

export default Feedback;
