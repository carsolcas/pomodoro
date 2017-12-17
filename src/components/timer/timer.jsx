import React, { Component } from 'react';
import PropTypes from 'prop-types';
import formatTime from './../utils/format_time';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.tick = this.tick.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.state = { seconds: this.props.seconds };
    this.timer = 0;
  }

  tick() {
    const { onTick } = this.props;
    let { seconds } = this.state;
    seconds -= 1;
    onTick(seconds);
    this.setState({ seconds });
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = 0;
  }

  handleStartClick() {
    if (this.timer === 0) {
      this.timer = setInterval(this.tick, 1000);
    }
  }

  render() {
    const { seconds } = this.state;
    const formattedTime = formatTime(seconds);
    return (
      <div><h2>{ formattedTime }</h2>
        <button onClick={this.handleStartClick}>Start</button>
        <button onClick={this.stopTimer}>Pause</button>
      </div>);
  }
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  onTick: PropTypes.func.isRequired,
};

export default Timer;
