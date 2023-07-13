import React from 'react';

import '../App.css';
import TasksFilter from '../TasksFilter/TasksFilter';

type FooterProps = {
  leftItems: number;
  handleFilter: (f: string) => void;
  clear: () => void;
};

const Footer: React.FC<FooterProps> = ({ leftItems, handleFilter, clear }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{leftItems} items left</span>
      <TasksFilter handlefilter={handleFilter} />
      <button className="clear-completed" onClick={clear}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
