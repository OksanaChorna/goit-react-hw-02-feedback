import { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import style from './feedback.module.css';
import Section from '../Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    if (event.target.innerText === 'good') {
      this.setState(prevState => {
        return {
          good: prevState.good + 1,
        };
      });
    }

    if (event.target.innerText === 'neutral') {
      this.setState(prevState => {
        return {
          neutral: prevState.neutral + 1,
        };
      });
    }

    if (event.target.innerText === 'bad') {
      this.setState(prevState => {
        return {
          bad: prevState.bad + 1,
        };
      });
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() > 0) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
    return 0;
  };

  render() {
    return (
      <div className={style.feedbackCard}>
        <Section title="Please leave feedback!">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default Feedback;
