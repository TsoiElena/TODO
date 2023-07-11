import React, { Component } from 'react';

import '../App.css';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      stop: true,
    };
    this.play = () => {
      this.setState({
        start: true,
        stop: false,
      });
      this.props.startTimer();
    };
    this.stop = () => {
      this.setState({
        start: false,
        stop: true,
      });
      this.props.stopTimer();
    };
  }
  render() {
    const { min, sec } = this.props;
    const { start, stop } = this.state;
    let timerM = min;
    let timerS = sec;
    if (timerM - (timerM % 10) === 0) timerM = `0${timerM}`;
    if (timerS - (timerS % 10) === 0) timerS = `0${timerS}`;
    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.play} disabled={start} />
        <button className="icon icon-pause" onClick={this.stop} disabled={stop} />
        {timerM ? timerM : '00'}:{timerS ? timerS : '00'}
      </span>
    );
  }
}

Timer.defaultProps = {
  min: 0,
  sec: 0,
};
