import React, { Component } from 'react';

export default class TimerLabel extends Component {
  constructor(props) {
    super(props);
    this.state = { time: this.props.time };
  } 

  _formatedTimeString() {
    const minute = this._formatedMinute();
    const second = this._formatedSecond();
    return [minute, second].join(":");
  }

  _formatedMinute() {
    const minute = parseInt(this.state.time.minute);
    if (minute < 0 || minute >= 60) {
      throw new RangeError("Minute can not less than 0 or greater than 59");
    }
    if (minute < 10) {
      return "0" + minute;
    }
    return minute.toString();
  }

  _formatedSecond() {
    const second = parseInt(this.state.time.second);
    if (second < 0 || second >= 60) {
      throw new RangeError("Second can not less than 0 or greater than 59");
    }
    if (second < 10) {
      return "0" + second;
    }
    return second.toString();
  }

  _formatedMillisecond() {
    const millisecond = parseInt(this.state.time.millisecond);
    if (millisecond < 0 || millisecond >= 1000) {
      throw new RangeError("Millisecond can not less than 0 or greater than 999");
    }
    if (millisecond < 10) {
      return "00" + millisecond;
    }
    if (millisecond < 100) {
      return "0" + millisecond;
    }
    return millisecond.toString();
  }

  render() {
    return (
      <div>
        <h2>{this._formatedTimeString()}</h2>  
        <p>{"." + this._formatedMillisecond()}</p>
      </div>
    )
  }
}