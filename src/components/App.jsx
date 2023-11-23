import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import style from './style.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  handleClick = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);

  countPositiveFeedbackPercentage = () =>
    (this.state.good / this.countTotalFeedback()) * 100;

  roundPercentage = () => this.countPositiveFeedbackPercentage().toFixed(0);

  render() {
    const getCountTotalFeedback = this.countTotalFeedback();
    const getRoundPercentage = this.roundPercentage();

    return (
      <div className={style.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {getCountTotalFeedback ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={getCountTotalFeedback}
              positivePercentage={getRoundPercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
