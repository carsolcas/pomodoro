import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
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
    const { onTick, onTimerOver } = this.props;
    let { seconds } = this.state;
    if (seconds >= 0) seconds -= 1;
    this.setState({ seconds });

    onTick(seconds);
    if (seconds === 0) {
      this.stopTimer();
      onTimerOver();
    }
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
        <Button bsStyle="success" onClick={this.handleStartClick}>Start</Button>
        <Button bsStyle="warning" onClick={this.stopTimer}>Pause</Button>
      </div>);
  }
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  onTick: PropTypes.func.isRequired,
  onTimerOver: PropTypes.func.isRequired,
};

export default Timer;
