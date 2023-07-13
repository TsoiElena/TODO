import React, { useState } from 'react';
import '../App.css';

type TasksFilterProps = {
  handlefilter: (e: string) => void;
};

const TasksFilter: React.FC<TasksFilterProps> = ({ handlefilter }) => {
  const [state, setState] = useState({
    all: 'selected',
    active: '',
    complete: '',
  });

  const onClick = (e: any) => {
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
