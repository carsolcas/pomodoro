import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonsWidget from './buttonswidget';
import TimerWidget from './timerwidget';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleRestartClick = this.handleRestartClick.bind(this);
    this.handleSkipClick = this.handleSkipClick.bind(this);
    this.tick = this.tick.bind(this);
    this.stopTimer = this.stopTimer.bind(this);

    this.state = {
      seconds: this.props.seconds,
      timer: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.type !== this.props.type) {
      this.setState({ seconds: nextProps.seconds });
    }
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
    const { seconds } = this.state;
    if (timer === 0 && seconds > 0) {
      timer = setInterval(this.tick, 1000);
      this.setState({ timer });
    }
  }

  handleRestartClick() {
    const { seconds } = this.props;
    this.setState({ seconds });
  }

  handleSkipClick() {
    const { onSkip } = this.props;
    onSkip();
  }

  render() {
    const { seconds } = this.state;
    const maxSeconds = this.props.seconds;

    return (
      <div>
        <h1>{this.props.title}</h1>
        <TimerWidget seconds={seconds} maxSeconds={maxSeconds} />

        <ButtonsWidget
          isRuning={this.isRunning()}
          onStartClick={this.handleStartClick}
          onPauseClick={this.stopTimer}
          onRestartClick={this.handleRestartClick}
        />
      </div>);
  }
}

Timer.propTypes = {
  type: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  onTick: PropTypes.func.isRequired,
  onTimerOver: PropTypes.func.isRequired,
  onSkip: PropTypes.func.isRequired,
  title: PropTypes.string,
};

Timer.defaultProps = {
  title: '',
};

export default Timer;
