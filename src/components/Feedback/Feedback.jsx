import styles from './Feedback.module.css';

const Feedback = ({ feedback, total, positive }) => {
  return (
    <div>
      <p className={styles.fbGood}>Good:{feedback.good}</p>
      <p className={styles.fbNeutral}>Neutral:{feedback.neutral}</p>
      <p className={styles.fbBad}>Bad:{feedback.bad}</p>
      <p>Total:{total}</p>
      <p>Positiv:{positive}%</p>
    </div>
  );
};
export default Feedback;
