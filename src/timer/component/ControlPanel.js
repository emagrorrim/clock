import React, { Component } from 'react';

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.startTimer = props.startTimer;
    this.stopTimer = props.stopTimer;
    this.resetTimer = props.resetTimer;
  }

  _start() {
    const minute = parseInt(this.minuteField.value || 0);
    const second = parseInt(this.secondField.value || 0);
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
      <div className="controller">
        <div className="controller-time">
          <input className="time-input" ref={ref=>{this.minuteField = ref}} defaultValue="0" />mins
          <input className="time-input" ref={ref=>{this.secondField = ref}} defaultValue="0" />seconds
        </div>
        <div className="controller-panel">
          <button className="time-btn start" onClick={this._start.bind(this)}/>
          <button className="time-btn stop" onClick={this._stop.bind(this)}/>
          <button className="time-btn reset" onClick={this._reset.bind(this)}/>
        </div>
      </div>
    )
  }
}
