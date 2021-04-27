import styles from './statistics.module.css';
import Notification from '../Notification';
import PropsType from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total() === 0) {
    return <Notification message="No feedback given" />;
  }

  return (
    <ul className={styles.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total()}</li>
      <li>Positive feedback: {positivePercentage()}%</li>
    </ul>
  );
};

Statistics.prototype = {
  good: PropsType.string.isRequired,
  neutral: PropsType.string.isRequired,
  bad: PropsType.string.isRequired,
  total: PropsType.number,
  positivePercentage: PropsType.func,
}

export default Statistics;
