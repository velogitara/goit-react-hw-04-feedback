import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BtnContainer, Button } from './FeedbackOption.styled';

class FeedbackOption extends Component {
  static propTypes = {
    state: PropTypes.exact({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
    onClick: PropTypes.func.isRequired,
  };
  render() {
    const { onClick, state } = this.props;

    return (
      <BtnContainer>
        {Object.keys(state).map(key => (
          <Button key={key} onClick={() => onClick(key)}>
            {key}
          </Button>
        ))}
      </BtnContainer>
    );
  }
}

export default FeedbackOption;
