import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes, { number } from 'prop-types';

import Timer from '../Timer/Timer';

const Task = ({ description, editing, onDeleted, handleDone, done, onEdit, min, sec, created, descChanged }) => {
  const [state, setState] = useState({
    editingValue: description,
    createdValue: 'created ' + formatDistanceToNow(created, { includeSeconds: true, addSuffix: true }),
    minT: min,
    secT: sec,
    timeLeft: min * 60 + sec,
  });

  const handleEditing = (e) => {
    setState((state) => ({ ...state, editingValue: e.target.value }));
  };

  const descChange = (e) => {
    e.preventDefault();
    descChanged(state.editingValue);
  };
  const tick = () => {
    setState((state) => ({
      ...state,
      createdValue: 'created ' + formatDistanceToNow(created, { includeSeconds: true, addSuffix: true }),
    }));
  };

  const [timerId, setTimerId] = useState();

  const startTimer = () => {
    const timerID = setInterval(() => {
      if (state.timeLeft <= 0) {
        clearInterval(timerID);
      }
      setState((state) => ({
        ...state,
        timeLeft: state.timeLeft - 1,
        minT: (state.timeLeft - 1 - ((state.timeLeft - 1) % 60)) / 60,
        secT: (state.timeLeft - 1) % 60,
      }));
    }, 1000);
    setTimerId(timerID);
  };

  const stopTimer = () => {
    clearInterval(timerId);
  };

  useEffect(() => {
    const createdId = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(createdId);
      stopTimer();
    };
  }, []);

  return (
    <>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleDone} checked={done} />
        <label>
          <span className="title">{description}</span>
          <Timer min={state.minT} sec={state.secT} stopTimer={stopTimer} startTimer={startTimer} />
          <span className="description">{state.createdValue}</span>
        </label>
        <button className="icon icon-edit" onClick={onEdit} />
        <button className="icon icon-destroy" onClick={onDeleted} />
      </div>
      {editing && (
        <form onSubmit={descChange}>
          <input type="text" className="edit" value={state.editingValue} onChange={handleEditing} />
        </form>
      )}
    </>
  );
};

export default Task;

Task.defaultProps = {
  description: '',
  editing: false,
  onDeleted: () => {},
  handleDone: () => {},
  done: false,
  onEdit: () => {},
  min: 0,
  sec: 0,
};
Task.propTypes = {
  description: PropTypes.string,
  editing: PropTypes.bool,
  onDeleted: PropTypes.func,
  handleDone: PropTypes.func,
  done: PropTypes.bool,
  onEdit: PropTypes.func,
  min: number,
  sec: number,
};
