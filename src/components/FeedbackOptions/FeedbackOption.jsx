import PropTypes from 'prop-types';
import { BtnContainer, Button } from './FeedbackOption.styled';

function FeedbackOption({ good, bad, neutral, onClick }) {
  const buttons = { good, bad, neutral };

  return (
    <BtnContainer>
      {Object.keys(buttons).map(key => (
        <Button key={key} onClick={() => onClick(key)}>
          {key}
        </Button>
      ))}
    </BtnContainer>
  );
}

FeedbackOption.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FeedbackOption;
