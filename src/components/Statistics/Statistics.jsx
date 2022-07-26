import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, posFeed }) {
  const positiveFeed = Number.parseInt(posFeed);

  return (
    <div className="statContainer">
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>Total :{total}</p>
      <p>Positive Feedback : {positiveFeed}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  posFeed: PropTypes.number,
};
