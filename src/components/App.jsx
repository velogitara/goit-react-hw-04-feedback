import React, { Component } from 'react';
import Section from './Section';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = item => {
    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  }
  countPositiveFeedbackPercentage() {
    return (this.state.good / this.countTotalFeedback()) * 100;
  }
  render() {
    return (
      <Section
        state={this.state}
        title="Please leave Feedback"
        onClick={this.handleClick}
        total={this.countTotalFeedback()}
        posFeed={this.countPositiveFeedbackPercentage()}
      />
    );
  }
}

export default App;
