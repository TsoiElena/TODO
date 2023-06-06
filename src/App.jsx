import React, { Component } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TaskList from './components/TaskList/TaskList'

const DONE = 'completed'
const EDIT = 'editing'
const ACTIVE = 'active'

let idCounter = 100

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                {
 id: 1, className: DONE, description: 'Completed task', created: new Date(), editing: false, done: true,
},
                {
 id: 2, className: ACTIVE, description: 'Editing task', created: new Date(), editing: false, done: false,
},
                {
 id: 3, className: ACTIVE, description: 'Active task', created: new Date(), editing: false, done: false,
},
            ],
            filter: 'all',
        }

        this.deleteTask = (id) => {
            this.setState(({ tasks }) => ({
                    tasks: tasks.filter((task) => task.id !== id),
                }))
        }
        this.handleDone = (id) => {
            this.setState(({ tasks }) => {
                const newTasks = tasks.map((task) => {
                    if (task.id === id) {
                        task.done = !task.done
                        if (task.done) {
                            task.className = DONE
                        } else {
                            task.className = ACTIVE
                        }
                    }
                    return task
                })
                return { tasks: newTasks }
            })
        }
        this.addNewTask = (label) => {
            this.createTask(label)
        }
        this.createTask = (label) => {
            idCounter++
            const newTask = {
                id: idCounter,
                className: ACTIVE,
                description: label,
                created: new Date(),
                editing: false,
                done: false,
            }
            this.setState(({ tasks }) => ({
                    tasks: [...tasks, newTask],
                }))
        }
        this.handleFilter = (filter) => {
            this.setState({
                filter,
            })
        }
        this.clearCompleted = () => {
            this.setState(({ tasks }) => {
                const newTasks = tasks.filter((task) => task.done === false)
                return {
                    tasks: newTasks,
                }
            })
        }
        this.onEdit = (id) => {
            this.setState(({ tasks }) => {
                const newTasks = tasks.map((task) => {
                    if (task.id === id) {
                        task.className = EDIT
                        task.editing = true
                    }
                    return task
                })
                return { tasks: newTasks }
            })
        }
        this.descriptionChanged = (id, name) => {
            this.setState(({ tasks }) => {
                const newTasks = tasks.map((task) => {
                    if (task.id === id) {
                        task.className = task.done ? DONE : ACTIVE
                        task.editing = false
                        task.description = name
                    }
                    return task
                })
                return { tasks: newTasks }
            })
        }
    }

    render() {
        const { tasks, filter } = this.state
        const leftItems = tasks.filter((task) => task.done === false).length
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
        )
    }
}
