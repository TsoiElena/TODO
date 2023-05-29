import React, {Component} from "react";

import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskList from "./components/TaskList/TaskList";
import {type} from "@testing-library/user-event/dist/type";

const DONE = 'completed';
const EDIT = 'editing';
const ACTIVE = 'active';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {id: 1, className: DONE, description: 'Completed task', created:'created 17 seconds ago', editing: false, done: true},
                {id: 2, className: EDIT, description: 'Editing task', created:'created 5 minutes ago', editing: true, done: false},
                {id: 3, className: ACTIVE, description: 'Active task', created:'created 5 minutes ago', editing: false, done: false},
            ],
        };
        this.deleteTask = (id) => {
            this.setState(({tasks}) => {
                return {
                    tasks: tasks.filter((task) => task.id !== id)
                }
            })
        };
        this.handleDone = (id) => {
            this.setState(({tasks}) => {
                const newTasks = tasks.map(task => {
                    if(task.id === id) {
                        task.done = !task.done
                        if (task.done) {
                            task.className = DONE
                        } else {
                            task.className = ACTIVE
                        }
                    }
                    return task
                })
                return {tasks: newTasks}
            })
        };
    }


    render () {
        const {tasks} = this.state
        return (
            <div className="todoapp">
                <Header/>
                <div className="main">
                    <TaskList tasks={tasks}
                        onDeleted={this.deleteTask} handleDone={this.handleDone}
                    />
                    <Footer/>
                </div>
            </div>
        )
    }
}

/*const App = () => {

    const tasks = [
        {id: 1, description: 'Completed task', created:'created 17 seconds ago'},
        {id: 2, description: 'Editing task', created:'created 5 minutes ago'},
        {id: 3, description: 'Active task', created:'created 5 minutes ago'},
    ]

  return (
      <div className="todoapp">
          <Header/>
          <div className="main">
              <TaskList tasks={tasks} onDeleted={(id)=>console.log('del ', id)}/>
              <Footer/>
          </div>
      </div>
  )
}

export default App*/
