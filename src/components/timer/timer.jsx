import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonsWidget from './buttonswidget';
import TimerWidget from './timerwidget';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.tick = this.tick.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.state = {
      seconds: this.props.seconds,
      timer: 0 
};
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
    const { timer } = this.state;
    clearInterval(timer);
    this.setState({ timer: 0 });
  }

  isRunning() {
    return this.state.timer !== 0;
  }

  handleStartClick() {
    let { timer } = this.state;
    if (timer === 0) {
      timer = setInterval(this.tick, 1000);
      this.setState({ timer });
    }
  }

  render() {
    const { seconds } = this.state;
    const maxSeconds = this.props.seconds;
    return (
      <div>
        <TimerWidget seconds={seconds} maxSeconds={maxSeconds} />

        <ButtonsWidget
          isRuning={this.isRunning()}
          onStartClick={this.handleStartClick}
          onPauseClick={this.stopTimer}
        />
      </div>);
  }
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  onTick: PropTypes.func.isRequired,
  onTimerOver: PropTypes.func.isRequired,
};

export default Timer;
