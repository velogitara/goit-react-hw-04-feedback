import { useState } from 'react';
import Section from './Section';
// import PropTypes from 'prop-types';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const handleClick = key => {
    switch (key) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  function countTotalFeedback() {
    // Object.values(this.state).reduce((acc, item) => acc + item, 0);
    return good + neutral + bad;
  }
  function countPositiveFeedbackPercentage() {
    return (good / countTotalFeedback()) * 100;
  }

  return (
    <Section
      good={good}
      neutral={neutral}
      bad={bad}
      title="Please leave Feedback"
      onClick={handleClick}
      total={countTotalFeedback()}
      posFeed={countPositiveFeedbackPercentage()}
    />
  );
}
