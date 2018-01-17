import React, { Component } from 'react';
import Timer from './components/timer/timer';
import formatTime from './components/utils/format_time';
import logo from './logo.svg';
import './App.css';

const POMODORO = 'POMODORO';
const SHORT_BREAK = 'SHORT_BREAK';
const LONG_BREAK = 'LONG_BREAK';

const TIMES = {
  POMODORO: 25,
  SHORT_BREAK: 5,
  LONG_BREAK: 15,
};

class App extends Component {

  constructor(props) {
    super(props);

    this.onTimerOver = this.onTimerOver.bind(this);

    this.state = {
      pomodoros: 0,
      isPomodoro: true,
    };
  }

  onTick(seconds) {
    document.title = `[${formatTime(seconds)}] Pomodoro`;
  }

  onTimerOver() {
    let {isPomodoro, pomodoros } = this.state;
    if (isPomodoro) pomodoros += 1;
    isPomodoro = !isPomodoro;
    this.setState({ isPomodoro, pomodoros });
  }

  render() {
    const { isPomodoro, pomodoros } = this.state;
    let title;
    let type;
    if (isPomodoro) {
      title = `Pomodoro #${ pomodoros + 1 }`;
      type = POMODORO;
    } else if (pomodoros % 4 === 0) {
      title = 'Long Break';
      type = LONG_BREAK;
    } else {
      title = 'Short Break';
      type = SHORT_BREAK;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pomodoro Timer </h1>
        </header>
        <div className="App-intro">
          <Timer
            seconds={TIMES[type]}
            onTick={this.onTick}
            onTimerOver={this.onTimerOver}
            title={title}
            type={type}
          />
        </div>
      </div>
    );
  }
}

export default App;