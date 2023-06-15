import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TasksFilter.css';

export default class TasksFilter extends Component {
  constructor() {
    super();
    this.state = {
      all: 'selected',
      active: '',
      complete: '',
    };
    this.onClick = (e) => {
      const text = e.target.innerText;
      if (text === 'All') {
        this.setState({
          all: 'selected',
          active: '',
          complete: '',
        });
        this.props.handlefilter('all');
      }
      if (text === 'Active') {
        this.setState({
          all: '',
          active: 'selected',
          complete: '',
        });
        this.props.handlefilter('active');
      }
      if (text !== 'Completed') {
        return;
      }
      this.setState({
        all: '',
        active: '',
        complete: 'selected',
      });
      this.props.handlefilter('completed');
    };
  }
  render() {
    const { all, active, complete } = this.state;
    return (
      <ul className="filters">
        <li>
          <button className={all} onClick={this.onClick}>
            All
          </button>
        </li>
        <li>
          <button className={active} onClick={this.onClick}>
            Active
          </button>
        </li>
        <li>
          <button className={complete} onClick={this.onClick}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

TasksFilter.defaultPtops = {
  handlefilter: () => {},
};

TasksFilter.propTypes = {
  handlefilter: PropTypes.func,
};
