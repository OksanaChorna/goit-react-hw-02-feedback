import style from './Notification.module.css';
import PropsType from 'prop-types';

const Notification = ({ message }) => {
  return <p className={style.message}>{message}</p>;
};

Notification.defaultProps = {
  message: "No feedback given",
};

Notification.PropsType = {
  message: PropsType.string
}

export default Notification;
