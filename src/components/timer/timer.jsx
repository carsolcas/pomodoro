import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';

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
    const maxSeconds = this.props.seconds;
    const progressValue = Math.abs(seconds - maxSeconds);
    const formattedTime = formatTime(seconds);
    return (
      <div><h2>{ formattedTime }</h2>
        <div>
          <CircularProgress
            size={170}
            mode="determinate"
            value={progressValue}
            min={0}
            max={maxSeconds}
          />
        </div>


        <Button fab color="accent" aria-label="start" onClick={this.handleStartClick}>
          <PlayArrow />
        </Button>
        <Button fab color="primary" aria-label="stop" onClick={this.stopTimer} >
          <Pause />
        </Button>
      </div>);
  }
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  onTick: PropTypes.func.isRequired,
  onTimerOver: PropTypes.func.isRequired,
};

export default Timer;
