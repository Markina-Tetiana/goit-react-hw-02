import styles from './Options.module.css';

const Options = ({ newFeedback, total, onReset }) => {
  return (
    <>
      <button onClick={() => newFeedback('good')} className={styles.btn}>
        Good
      </button>
      <button onClick={() => newFeedback('neutral')} className={styles.btn}>
        Neutral
      </button>
      <button onClick={() => newFeedback('bad')} className={styles.btn}>
        Bad
      </button>

      {total > 0 && (
        <button onClick={onReset} className={styles.resetBtn}>
          Reset
        </button>
      )}
    </>
  );
};

export default Options;
