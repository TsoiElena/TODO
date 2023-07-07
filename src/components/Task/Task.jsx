import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes, { number } from 'prop-types';

import Timer from '../Timer/Timer';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.stopTimer = this.stopTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.state = {
      editingValue: this.props.description,
      createdValue: 'created ' + formatDistanceToNow(this.props.created, { includeSeconds: true, addSuffix: true }),
      min: this.props.min,
      sec: this.props.sec,
      timeLeft: this.props.min * 60 + this.props.sec,
    };
    this.editing = (e) => {
      this.setState({
        editingValue: e.target.value,
      });
    };
    this.descChange = (e) => {
      e.preventDefault();
      this.props.descChanged(this.state.editingValue);
    };
    this.tick = () => {
      this.setState({
        createdValue: 'created ' + formatDistanceToNow(this.props.created, { includeSeconds: true, addSuffix: true }),
      });
    };
  }

  startTimer() {
    this.timerID = setInterval(() => {
      let timerLeft = this.state.timeLeft - 1;
      if (timerLeft <= 0) {
        clearInterval(this.timerID);
      }
      this.setState({
        timeLeft: timerLeft,
        min: (timerLeft - (timerLeft % 60)) / 60,
        sec: timerLeft % 60,
      });
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    this.createdId = setInterval(() => this.tick(), 1000);
    if (this.state.timeLeft) this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.createdId);
    this.stopTimer();
  }

  render() {
    const { description, editing, onDeleted, handleDone, done, onEdit } = this.props;
    const { editingValue, createdValue, min, sec } = this.state;

    return (
      <>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={handleDone} checked={done} />
          <label>
            <span className="title">{description}</span>
            <Timer min={min} sec={sec} stopTimer={this.stopTimer} startTimer={this.startTimer} />
            <span className="description">{createdValue}</span>
          </label>
          <button className="icon icon-edit" onClick={onEdit} />
          <button className="icon icon-destroy" onClick={onDeleted} />
        </div>
        {editing && (
          <form onSubmit={this.descChange}>
            <input type="text" className="edit" value={editingValue} onChange={this.editing} />
          </form>
        )}
      </>
    );
  }
}

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
