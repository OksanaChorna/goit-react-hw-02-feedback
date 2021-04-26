import { Component } from 'react';
import style from './feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    console.log(event.target.innerText);
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

        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
