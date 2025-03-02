import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={styles.messageRed}>{message}</p>;
};
export default Notification;
