import React, { Component } from 'react';

import TimingLabel from './TimerLabel';

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        hour: 1,
        minute: 3,
        second: 44,
        millisecond: 670
      }
    }
  }

  render() {
    return (
      <div className="darkBackground">
        <TimingLabel className="timingLabel" time={this.state.time} />
      </div>
    )
  }
}