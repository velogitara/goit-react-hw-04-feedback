import PropTypes from 'prop-types';
import Notification from '../Notification';
import FeedbackOption from '../FeedbackOptions';
import Statistics from '../Statistics';
import { Container, Title } from './Section.styled';

export default function Section({
  title,
  onClick,
  total,
  posFeed,
  good,
  bad,
  neutral,
}) {
  const positiveFeed = Number.parseInt(posFeed);

  return (
    <Container>
      <Title>{title}</Title>
      <FeedbackOption
        onClick={onClick}
        good={good}
        neutral={neutral}
        bad={bad}
      />
      <h3>Statistics</h3>
      {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          posFeed={positiveFeed}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
}

Section.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeed: PropTypes.number,
};
