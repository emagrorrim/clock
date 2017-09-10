import React, { Component } from 'react';

import TimingLabel from './TimerLabel';
import TimerController from '../controller/TimerController';
import CountDownModel from '../model/CountDownModel';

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.timerController = new TimerController();
    this.state = {
      displayedTime: new CountDownModel(0, 0, 0, 0)
    }
  }

  componentDidMount() {
    let that = this;
    this.timerController.run(10 * 1000, (countDown) => {
      that.setState({
        displayedTime: countDown
      })
    });
  }

  render() {
    return (
      <div className="darkBackground">
        <TimingLabel className="timingLabel" displayedTime={this.state.displayedTime} />
      </div>
    )
  }
}