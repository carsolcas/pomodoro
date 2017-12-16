import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.state= { seconds: this.props.seconds };
    this.timer = 0;
  }

  tick() {
    const { onTick } = this.props;
    let { seconds } = this.state;
    seconds -= 1;
    onTick(seconds);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  handleStartClick() {
    this.timer = setInterval(this.tick, 1000);
  }

  render() {
    const { seconds } = this.state;
    return (<div>{ seconds }</div>);
  }
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  onTick: PropTypes.func.isRequired,
};

export default Timer;
