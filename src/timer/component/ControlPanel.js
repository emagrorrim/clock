import React, { Component } from 'react';

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.startTimer = props.startTimer;
    this.stopTimer = props.stopTimer;
    this.resetTimer = props.resetTimer;
  }

  _start() {
    const minute = parseInt(this.minuteField.value);
    const second = parseInt(this.secondField.value);
    const millisecond = minute * 60 * 1000 + second * 1000;
    if (millisecond > 0) {
      this.startTimer(millisecond);
    }
  }

  _stop() {
    this.stopTimer();
  }

  _reset() {
    this.stopTimer();
    this.resetTimer();
    this.minuteField.value = "0";
    this.secondField.value = "0";
  }

  render() {
    return (
      <div>
        <input ref={ref=>{this.minuteField = ref}} defaultValue="0" />mins
        <input ref={ref=>{this.secondField = ref}} defaultValue="0" />seconds
        <button onClick={this._start.bind(this)}>start</button>
        <button onClick={this._stop.bind(this)}>stop</button>
        <button onClick={this._reset.bind(this)}>reset</button>
      </div>
    )
  }
}
