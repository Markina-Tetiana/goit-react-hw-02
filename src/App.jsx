import { useState, useEffect } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('feedback');
    return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(data));
  }, [data]);

  const updateFeedback = feedbackType => {
    setData({ ...data, [feedbackType]: data[feedbackType] + 1 });
  };

  const resetResult = () => {
    setData({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = data.good + data.neutral + data.bad;
  const positiveFeedback = Math.round((data.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        newFeedback={updateFeedback}
        total={totalFeedback}
        onReset={resetResult}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedback={data}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;
