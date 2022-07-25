import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Statistics extends Component {
  static propTypes = {
    state: PropTypes.exact({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
    positiveFeed: PropTypes.number,
  };
  render() {
    const { state } = this.props;
    const total = this.props.total;
    const { good, neutral, bad } = state;
    const positiveFeed = Number.parseInt(this.props.posFeed);

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
}

export default Statistics;
