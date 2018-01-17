import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';

import formatTime from './../utils/format_time';
import './timerstyles.css';

function TimerWidget(props) {
  const { seconds, maxSeconds } = props;
  const progressValue = Math.abs(seconds - maxSeconds);
  const formattedTime = formatTime(seconds);
  const size = 170;


  return (
    <div className="progressContainer">
      <h2 className="time">{ formattedTime }</h2>
      <div className="progress-widget">
        <div className="pw-background">
          <CircularProgress
            color="accent"
            size={size + 30}
            mode="determinate"
            value={100}
            min={0}
            max={100}
            className="background"
          />
        </div>
        <div className="pw-progress">
          <CircularProgress
            size={size}
            mode="determinate"
            value={progressValue}
            min={0}
            max={maxSeconds}
          />
        </div>
      </div>
    </div>
  );
}

TimerWidget.propTypes = {
  seconds: PropTypes.number.isRequired,
  maxSeconds: PropTypes.number.isRequired,
};

export default TimerWidget;
