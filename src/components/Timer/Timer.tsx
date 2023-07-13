import React, { useState } from 'react';

import '../App.css';

type TimerProps = {
  min: number;
  sec: number;
  startTimer: () => void;
  stopTimer: () => void;
};

const Timer: React.FC<TimerProps> = ({ min, sec, startTimer, stopTimer }) => {
  const [state, setState] = useState({
    start: false,
    stop: true,
  });

  const play = () => {
    setState({
      start: true,
      stop: false,
    });
    startTimer();
  };
  const stop = () => {
    setState({
      start: false,
      stop: true,
    });
    stopTimer();
  };

  let timerM: string | number = min;
  let timerS: string | number = sec;
  if (timerM - (timerM % 10) === 0) timerM = `0${timerM}`;
  if (timerS - (timerS % 10) === 0) timerS = `0${timerS}`;
  return (
    <span className="description">
      <button className="icon icon-play" onClick={play} disabled={state.start} />
      <button className="icon icon-pause" onClick={stop} disabled={state.stop} />
      {timerM ? timerM : '00'}:{timerS ? timerS : '00'}
    </span>
  );
};

export default Timer;