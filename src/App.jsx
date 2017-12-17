import React, { Component } from 'react';
import Timer from './components/timer/timer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onTick() {
    console.log('Tick');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pomodoro Timer </h1>
        </header>
        <p className="App-intro">
          <Timer seconds={10 * 60} onTick={this.onTick} />
        </p>
      </div>
    );
  }
}

export default App;
