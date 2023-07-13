import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';

const TaskList = ({ tasks, onDeleted, handleDone, filter, onEdit, descChanged }) => {
  const taskList = tasks.map((task) => {
    const { id, className, ...props } = task;
    const el = (
      <li className={className} key={id}>
        <Task
          {...props}
          onDeleted={() => onDeleted(id)}
          handleDone={() => handleDone(id)}
          onEdit={() => onEdit(id)}
          descChanged={(name) => descChanged(id, name)}
        />
      </li>
    );
    if (filter === 'all') return el;
    if (filter === 'active' && !task.done) return el;
    if (filter === 'completed' && task.done) return el;
  });
  return <ul className="todo-list">{taskList}</ul>;
};

export default TaskList;

TaskList.defaultProps = {
  tasks: [],
  onDeleted: () => {},
  handleDone: () => {},
  filter: 'all',
  onEdit: () => {},
  descChanged: () => {},
};

TaskList.propsType = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  onDeleted: PropTypes.func,
  handleDone: PropTypes.func,
  filter: PropTypes.string,
  onEdit: PropTypes.func,
  descChanged: PropTypes.func,
};
