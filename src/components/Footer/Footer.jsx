import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';
import TasksFilter from '../TasksFilter/TasksFilter';

function Footer({ leftItems, handleFilter, clear }) {
  return (
    <footer className="footer">
      <span className="todo-count">{leftItems} items left</span>
      <TasksFilter handlefilter={handleFilter} />
      <button className="clear-completed" onClick={clear}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  leftItems: 0,
  handleFilter: () => {},
  clear: () => {},
};

Footer.propTypes = {
  leftItems: PropTypes.number,
  handleFilter: PropTypes.func,
  clear: PropTypes.func,
};

export default Footer;
