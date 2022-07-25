import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Notification from '../Notification';
import FeedbackOption from '../FeedbackOptions';
import Statistics from '../Statistics';
import { Container, Title } from './Section.styled';

class Section extends Component {
  static propTypes = {
    state: PropTypes.exact({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    posFeed: PropTypes.number,
  };
  render() {
    const { title, onClick, state } = this.props;
    console.log(typeof state.good);
    const total = this.props.total;
    const positiveFeed = Number.parseInt(this.props.posFeed);

    return (
      <Container>
        <Title>{title}</Title>
        <FeedbackOption onClick={onClick} state={state} />
        <h3>Statistics</h3>
        {total ? (
          <Statistics state={state} total={total} posFeed={positiveFeed} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }
}

export default Section;
