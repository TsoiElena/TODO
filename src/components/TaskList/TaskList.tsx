import React from 'react';
import '../App.css';
import Task from '../Task/Task';
import { TaskType } from '../App';

type TaskListProps = {
  tasks: Array<TaskType>;
  onDeleted: (i: number) => void;
  handleDone: (i: number) => void;
  filter: string;
  onEdit: (i: number) => void;
  descChanged: (i: number, n: string) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleted, handleDone, filter, onEdit, descChanged }) => {
  const taskList = tasks.map((task) => {
    const { id, className, ...props }: TaskType = task;
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
