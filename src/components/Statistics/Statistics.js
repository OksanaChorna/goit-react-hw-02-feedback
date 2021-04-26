// import styles from './statistics.module.css';

import Notification from '../Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total() === 0) {
    return <Notification message="No feedback given" />;
  }

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total()}</li>
      <li>Positive feedback: {positivePercentage()}%</li>
    </ul>
  );
};

export default Statistics;
