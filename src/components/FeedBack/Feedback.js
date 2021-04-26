import { Component } from 'react';
import Statistics from '../Statistics';
import style from './feedback.module.css';

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
        <h1 className={style.feedbackTitle}>Please leave feedback!</h1>

        <div className={style.feedbackList}>
          {Object.keys(this.state).map(key => {
            return (
              <button key={key} type="button" onClick={this.handleClick}>
                {key}
              </button>
            );
          })}
        </div>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default Feedback;
