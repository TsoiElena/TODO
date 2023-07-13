import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './NewTaskForm.css';

const NewTaskForm = ({ addNewTask }) => {
  const [state, setState] = useState({
    label: '',
    min: '',
    sec: '',
  });

  const onLabelChange = (e) => {
    setState((state) => ({ ...state, label: e.target.value }));
  };
  const onMinChange = (e) => {
    setState((state) => ({ ...state, min: Number(e.target.value) }));
  };
  const onSecChange = (e) => {
    setState((state) => ({ ...state, sec: Number(e.target.value) }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addNewTask(state.label, state.min, state.sec);
    setState({
      label: '',
      min: '',
      sec: '',
    });
  };

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input className="new-todo" placeholder="Task" autoFocus onChange={onLabelChange} value={state.label} />
      <input className="new-todo-form__timer" placeholder="Min" autoFocus onChange={onMinChange} value={state.min} />
      <input className="new-todo-form__timer" placeholder="Sec" autoFocus onChange={onSecChange} value={state.sec} />
      <button type="submit" />
    </form>
  );
};

export default NewTaskForm;

NewTaskForm.defaultProps = { addNewTask: () => {} };
NewTaskForm.propTypes = { addNewTask: PropTypes.func };
