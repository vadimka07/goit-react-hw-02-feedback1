import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return total + value;
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return ((good * 100) / this.countTotalFeedback()).toFixed(0) + '%';
  };
  handleClick = (e) => {
    const event = e.target.textContent;
    this.setState((prevState) => ({
      [event]: prevState[event] + 1,
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const stats = Object.entries({
      good,
      neutral,
      bad,
      total,
      positivePercentage,
    });
    return (
      <>
        <FeedbackOptions options={options} onLeaveFeedback={this.handleClick} />
        {this.countTotalFeedback() ? (
          <Statistics stats={stats} />
        ) : (
          <Notification message='There is no feedback' />
        )}
      </>
    );
  }
}
export default Feedback;
