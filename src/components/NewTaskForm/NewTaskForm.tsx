import React, { useState } from 'react';

import '../App.css';

type NewTaskForm = {
  addNewTask: (label: string, min: string | number, sec: string | number) => void;
};

const NewTaskForm: React.FC<NewTaskForm> = ({ addNewTask }) => {
  const [state, setState] = useState({
    label: '',
    min: '',
    sec: '',
  });

  const onLabelChange = (e: any) => {
    setState((state) => ({ ...state, label: String(e.target.value) }));
  };
  const onMinChange = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setState((state) => ({ ...state, min: Number(e.target.value) }));
  };
  const onSecChange = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setState((state) => ({ ...state, sec: Number(e.target.value) }));
  };
  const onSubmit = (e: any) => {
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
