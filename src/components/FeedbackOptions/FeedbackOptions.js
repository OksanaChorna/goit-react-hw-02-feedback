import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.feedbackList}>
      {Object.keys(options).map(key => {
        return (
          <button key={key} type="button" onClick={onLeaveFeedback}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
