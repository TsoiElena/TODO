import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import TaskList from './TaskList/TaskList';

export type TaskType = {
  id: number;
  className: string;
  description: string;
  created: any;
  editing: boolean;
  done: boolean;
  min: number;
  sec: number;
};

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      className: 'completed',
      description: 'Completed',
      created: new Date(),
      editing: false,
      done: true,
      min: 12,
      sec: 25,
    },
    {
      id: 2,
      className: 'active',
      description: 'Editing task',
      created: new Date(),
      editing: false,
      done: false,
      min: 12,
      sec: 25,
    },
    {
      id: 3,
      className: 'active',
      description: 'Active task',
      created: new Date(),
      editing: false,
      done: false,
      min: 12,
      sec: 25,
    },
  ]);
  const [filter, setFilter] = useState('all');

  const deleteTask = (id: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const handleDone = (id: number) => {
    setTasks((tasks) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          task.done = !task.done;
          if (task.done) {
            task.className = 'completed';
          } else {
            task.className = 'active';
          }
        }
        return task;
      });
      return newTasks;
    });
  };
  const addNewTask = (label: string, min: string | number, sec: string | number) => {
    createTask(label, min, sec);
  };
  const createTask = (label: string, min: string | number, sec: string | number) => {
    const newTask = {
      id: uuidv4(),
      className: 'active',
      description: label,
      created: new Date(),
      editing: false,
      done: false,
      min: min ? min : 0,
      sec: sec ? sec : 0,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setTasks((tasks) => [...tasks, newTask]);
  };
  const handleFilter = (filter: string) => {
    setFilter(filter);
  };
  const clearCompleted = () => {
    setTasks((tasks) => {
      return tasks.filter((task) => task.done === false);
    });
  };
  const onEdit = (id: number) => {
    setTasks((tasks) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          task.className = 'editing';
          task.editing = true;
        }
        return task;
      });
      return newTasks;
    });
  };
  const descriptionChanged = (id: number, name: string) => {
    setTasks((tasks) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          task.className = task.done ? 'completed' : 'active';
          task.editing = false;
          task.description = name;
        }
        return task;
      });
      return newTasks;
    });
  };

  const leftItems = tasks.filter((task) => task.done === false).length;
  return (
    <div className="todoapp">
      <Header addNewTask={addNewTask} />
      <div className="main">
        <TaskList
          tasks={tasks}
          filter={filter}
          onDeleted={deleteTask}
          handleDone={handleDone}
          onEdit={onEdit}
          descChanged={descriptionChanged}
        />
        <Footer leftItems={leftItems} handleFilter={handleFilter} clear={clearCompleted} />
      </div>
    </div>
  );
};

export default App;
