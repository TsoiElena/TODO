import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  constructor() {
    super();
    this.state = {
      label: '',
      min: '',
      sec: '',
    };
    this.onLabelChange = (e) => {
      this.setState({
        label: e.target.value,
      });
    };
    this.onMinChange = (e) => {
      this.setState({
        min: Number(e.target.value),
      });
    };
    this.onSecChange = (e) => {
      this.setState({
        sec: Number(e.target.value),
      });
    };
    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.addNewTask(this.state.label, this.state.min, this.state.sec);
      this.setState({
        label: '',
        min: '',
        sec: '',
      });
    };
  }

  render() {
    const { label, min, sec } = this.state;
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder="Task" autoFocus onChange={this.onLabelChange} value={label} />
        <input className="new-todo-form__timer" placeholder="Min" autoFocus onChange={this.onMinChange} value={min} />
        <input className="new-todo-form__timer" placeholder="Sec" autoFocus onChange={this.onSecChange} value={sec} />
        <button type="submit" />
      </form>
    );
  }
}

NewTaskForm.defaultProps = { addNewTask: () => {} };
NewTaskForm.propTypes = { addNewTask: PropTypes.func };
