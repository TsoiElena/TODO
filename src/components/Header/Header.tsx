import React from 'react';

import '../App.css';
import NewTaskForm from '../NewTaskForm/NewTaskForm';

type HeaderProps = {
  addNewTask: (label: string, min: string | number, sec: string | number) => void;
};

const Header: React.FC<HeaderProps> = ({ addNewTask }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm addNewTask={addNewTask} />
    </header>
  );
};

export default Header;
