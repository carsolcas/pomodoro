import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Timer from './components/timer/timer';
import LogList from './components/list/list';
import formatTime from './components/utils/format_time';
import logo from './tomato-logo.svg';
import './App.css';

const POMODORO = 'POMODORO';
const SHORT_BREAK = 'SHORT_BREAK';
const LONG_BREAK = 'LONG_BREAK';

const SECONDS_MINUTE = (process.env.NODE_ENV === 'production') ? 60 : 1;

const TIMES = {
  POMODORO: 25 * SECONDS_MINUTE,
  SHORT_BREAK: 5 * SECONDS_MINUTE,
  LONG_BREAK: 15 * SECONDS_MINUTE,
};

class App extends Component {

  constructor(props) {
    super(props);

    this.onTimerOver = this.onTimerOver.bind(this);
    this.onSkip = this.onSkip.bind(this);

    this.state = {
      pomodoros: 0,
      isPomodoro: true,
      log: [],
    };
  }

  onTick(seconds) {
    document.title = `[${formatTime(seconds)}] Pomodoro`;
  }

  processEndPeriod(isCompleted){
    let { isPomodoro, pomodoros, log } = this.state;
    if (isPomodoro){
      pomodoros += 1;
      log.push({title: 'Pomodoro #' + pomodoros, completed: isCompleted});
    }
    isPomodoro = !isPomodoro;
    this.setState({ isPomodoro, pomodoros, log });
  }

  onSkip() {
    const isCompleted = false;
    this.processEndPeriod(isCompleted);
  }

  onTimerOver() {
    const isCompleted = true;
    this.processEndPeriod(isCompleted);
  }

  render() {
    const { isPomodoro, pomodoros, log } = this.state;
    let title;
    let type;
    if (isPomodoro) {
      title = `Pomodoro #${pomodoros + 1}`;
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
            onSkip={this.onSkip}
            title={title}
            type={type}
          />
        </div>
        <div>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <LogList items={log} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LogList items={log} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
