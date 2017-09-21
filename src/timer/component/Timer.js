import React, { Component } from 'react';

import TimingLabel from './TimerLabel';
import ControlPanel from './ControlPanel';

import TimerController from '../controller/TimerController';
import CountDownModel from '../model/CountDownModel';

import '../../style/timer.css';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.timerController = new TimerController();
    this.state = {
      displayedTime: new CountDownModel(0, 0, 0, 0)
    }
  }

  _startTimer(millisecond) {
    let that = this;
    this.timerController.run(millisecond, (countDown) => {
      that.setState({
        displayedTime: countDown
      })
    });
  }

  _stopTimer() {
    this.timerController.stopTimer();
  }

  _resetTimer() {
    this.setState({
      displayedTime: new CountDownModel(0, 0, 0, 0)
    })
  }

  render() {
    return (
      <div className="timer darkBackground">
        <TimingLabel displayedTime={this.state.displayedTime} />
        <ControlPanel 
          startTimer={this._startTimer.bind(this)}
          stopTimer={this._stopTimer.bind(this)}
          resetTimer={this._resetTimer.bind(this)}
        />
      </div>
    )
  }
}