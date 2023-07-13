import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TasksFilter.css';

const TasksFilter = ({ handlefilter }) => {
  const [state, setState] = useState({
    all: 'selected',
    active: '',
    complete: '',
  });

  const onClick = (e) => {
    const text = e.target.innerText;
    if (text === 'All') {
      setState({
        all: 'selected',
        active: '',
        complete: '',
      });
      handlefilter('all');
    }
    if (text === 'Active') {
      setState({
        all: '',
        active: 'selected',
        complete: '',
      });
      handlefilter('active');
    }
    if (text !== 'Completed') {
      return;
    }
    setState({
      all: '',
      active: '',
      complete: 'selected',
    });
    handlefilter('completed');
  };
  return (
    <ul className="filters">
      <li>
        <button className={state.all} onClick={onClick}>
          All
        </button>
      </li>
      <li>
        <button className={state.active} onClick={onClick}>
          Active
        </button>
      </li>
      <li>
        <button className={state.complete} onClick={onClick}>
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TasksFilter;

TasksFilter.defaultPtops = {
  handlefilter: () => {},
};

TasksFilter.propTypes = {
  handlefilter: PropTypes.func,
};
