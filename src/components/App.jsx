import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import TaskList from './TaskList/TaskList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          className: 'completed',
          description: 'Completed task',
          created: new Date(),
          editing: false,
          done: true,
        },
        {
          id: 2,
          className: 'active',
          description: 'Editing task',
          created: new Date(),
          editing: false,
          done: false,
        },
        {
          id: 3,
          className: 'active',
          description: 'Active task',
          created: new Date(),
          editing: false,
          done: false,
        },
      ],
      filter: 'all',
    };

    this.deleteTask = (id) => {
      this.setState(({ tasks }) => ({
        tasks: tasks.filter((task) => task.id !== id),
      }));
    };
    this.handleDone = (id) => {
      this.setState(({ tasks }) => {
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
        return { tasks: newTasks };
      });
    };
    this.addNewTask = (label) => {
      this.createTask(label);
    };
    this.createTask = (label) => {
      const newTask = {
        id: uuidv4(),
        className: 'active',
        description: label,
        created: new Date(),
        editing: false,
        done: false,
      };
      this.setState(({ tasks }) => ({
        tasks: [...tasks, newTask],
      }));
    };
    this.handleFilter = (filter) => {
      this.setState({
        filter,
      });
    };
    this.clearCompleted = () => {
      this.setState(({ tasks }) => {
        const newTasks = tasks.filter((task) => task.done === false);
        return {
          tasks: newTasks,
        };
      });
    };
    this.onEdit = (id) => {
      this.setState(({ tasks }) => {
        const newTasks = tasks.map((task) => {
          if (task.id === id) {
            task.className = 'editing';
            task.editing = true;
          }
          return task;
        });
        return { tasks: newTasks };
      });
    };
    this.descriptionChanged = (id, name) => {
      this.setState(({ tasks }) => {
        const newTasks = tasks.map((task) => {
          if (task.id === id) {
            task.className = task.done ? 'completed' : 'active';
            task.editing = false;
            task.description = name;
          }
          return task;
        });
        return { tasks: newTasks };
      });
    };
  }

  render() {
    const { tasks, filter } = this.state;
    const leftItems = tasks.filter((task) => task.done === false).length;
    return (
      <div className="todoapp">
        <Header addNewTask={this.addNewTask} />
        <div className="main">
          <TaskList
            tasks={tasks}
            filter={filter}
            onDeleted={this.deleteTask}
            handleDone={this.handleDone}
            onEdit={this.onEdit}
            descChanged={this.descriptionChanged}
          />
          <Footer leftItems={leftItems} handleFilter={this.handleFilter} clear={this.clearCompleted} />
        </div>
      </div>
    );
  }
}
