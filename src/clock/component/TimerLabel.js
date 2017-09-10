import React, { Component } from 'react';

export default class TimerLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.displayedTime
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      time: nextProps.displayedTime
    })
  }

  _formatedTimeString() {
    const minute = this._formatedMinute();
    const second = this._formatedSecond();
    return [minute, second].join(":");
  }

  _formatedMinute() {
    const minute = parseInt(this.state.time.minute);
    if (minute < 0 || minute >= 60) {
      return "00";
    }
    if (minute < 10) {
      return "0" + minute;
    }
    return minute.toString();
  }

  _formatedSecond() {
    const second = parseInt(this.state.time.second);
    if (second < 0 || second >= 60) {
      return "00";
    }
    if (second < 10) {
      return "0" + second;
    }
    return second.toString();
  }

  _formatedMillisecond() {
    const millisecond = parseInt(this.state.time.millisecond);
    if (millisecond < 0 || millisecond >= 1000) {
      return "00";
    }
    const displayedMillisecond = parseInt(millisecond / 10);
    if (displayedMillisecond < 10) {
      return "0" + millisecond;
    }
    return displayedMillisecond.toString();
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