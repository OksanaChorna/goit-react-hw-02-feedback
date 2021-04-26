import style from './Feedback.module.css';

const Feedback = () => {
  return (
    <div className={style.feedbackCard}>
      <h1 className={style.feedbackTitle}>Please leave feedback!</h1>
      <ul className={style.feedbackList}>
        <li className={style.feedbackItem}></li>
      </ul>
    </div>
  );
};

export default Feedback;
