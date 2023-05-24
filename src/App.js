import React from "react";

import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskList from "./components/TaskList/TaskList";

const App = () => {

    const tasks = [
        {id: 1, className: 'completed', description: 'Completed task', created:'created 17 seconds ago', editing: false},
        {id: 1, className: 'editing', description: 'Editing task', created:'created 5 minutes ago', editing: true},
        {id: 1, className: 'active', description: 'Active task', created:'created 5 minutes ago', editing: false},
    ]

  return (
      <div className="todoapp">
          <Header/>
          <div className="main">
              <TaskList tasks={tasks}/>
              <Footer/>
          </div>
      </div>
  )
}

export default App
