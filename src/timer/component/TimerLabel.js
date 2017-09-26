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

  _formattedTimeString() {
    const minute = this._formattedMinute();
    const second = this._formattedSecond();
    return [minute, second].join(":");
  }

  _formattedMinute() {
    const minute = parseInt(this.state.time.minute);
    if (minute < 0 || minute >= 60) {
      return "00";
    }
    if (minute < 10) {
      return "0" + minute;
    }
    return minute.toString();
  }

  _formattedSecond() {
    const second = parseInt(this.state.time.second);
    if (second < 0 || second >= 60) {
      return "00";
    }
    if (second < 10) {
      return "0" + second;
    }
    return second.toString();
  }

  _formattedMillisecond() {
    const millisecond = parseInt(this.state.time.millisecond);
    if (millisecond < 0 || millisecond >= 1000) {
      return "00";
    }
    const displayedMillisecond = parseInt(millisecond / 10);
    if (displayedMillisecond < 10) {
      return "0" + displayedMillisecond;
    }
    return displayedMillisecond.toString();
  }

  render() {
    return (
      <div className="time">
        <h2 className="time-main">{this._formattedTimeString()}</h2>
        <p className="time-millisecond">{"." + this._formattedMillisecond()}</p>
      </div>
    )
  }
}
// time
  // time-main
  // time-millisecond